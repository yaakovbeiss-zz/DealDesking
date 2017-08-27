class AddColumnsToQuotes < ActiveRecord::Migration[5.0]
  def change
    add_column :quotes, :mileage, :integer
    add_column :quotes, :doc_fee_plan, :string
    add_column :quotes, :down_payment, :float
    add_column :quotes, :drive_off, :float
    add_column :quotes, :monthly_payment, :float
  end
end
