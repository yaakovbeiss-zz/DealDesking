class CreateMakes < ActiveRecord::Migration[5.0]
  def change
    create_table :makes do |t|
      t.string :name
      t.timestamps
    end
    add_column :quotes, :make_id, :integer, null: false
    add_column :quotes, :model_id, :integer, null: false
  end
end
