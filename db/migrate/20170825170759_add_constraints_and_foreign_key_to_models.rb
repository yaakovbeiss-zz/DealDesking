class AddConstraintsAndForeignKeyToModels < ActiveRecord::Migration[5.0]
  def change
    add_column :models, :make_id, :integer, null: false
    
    change_column_null :quotes, :make_id, false
    change_column_null :quotes, :model_id, false
  end
end
