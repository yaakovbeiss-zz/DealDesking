class AddYearsToMakes < ActiveRecord::Migration[5.0]
  def change
    add_column :makes, :year, :integer, null: false
  end
end
