class CreateTrims < ActiveRecord::Migration[5.0]
  def change
    create_table :trims do |t|
      t.string :name, null: false
      t.integer :model_id, null: false

      t.timestamps
    end
  end
end
