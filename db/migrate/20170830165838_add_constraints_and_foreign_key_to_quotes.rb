class AddConstraintsAndForeignKeyToQuotes < ActiveRecord::Migration[5.0]
  def change
    add_column :quotes, :trim_id, :integer, null: false

    change_column_null :models, :name, false
    change_column_null :makes, :name, false
  end
end
