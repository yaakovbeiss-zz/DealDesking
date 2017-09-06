# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create({ username: 'eli', password: 'password'})

makes = {}
models = {}

File.readlines('db/Deal Desking Car Info - Sheet1.csv').each do |line|
  record = line.split(",").map { |field| field.strip }
    year, make, model, trim = record[0], record[1], record[2], record[3]

    unless makes["#{year}#{make}"]
      makes["#{year}#{make}"] = Make.create!({ name: make, year: year })
    end
      make_id = makes["#{year}#{make}"].id

    unless models["#{model}#{make_id}"]
      models["#{model}#{make_id}"] = Model.create!({ name: model, make_id: make_id })
    end
    model_id = models["#{model}#{make_id}"].id

      Trim.create!({ name: trim, model_id: model_id })
end
