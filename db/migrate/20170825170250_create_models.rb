class CreateModels < ActiveRecord::Migration[5.0]
  def change
    create_table :models do |t|
      t.string :name

      t.timestamps
    end
    change_column_null :quotes, :make_id, true
    change_column_null :quotes, :model_id, true
  end
end
