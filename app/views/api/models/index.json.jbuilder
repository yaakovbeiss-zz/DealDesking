@models.each do |model|
  json.set! model.id do
    json.id model.id
    json.make_id model.make_id
    json.name model.name
  end
end
