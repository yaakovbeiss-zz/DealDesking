class RemoveColumnsFromQuote < ActiveRecord::Migration[5.0]
  def change
    remove_column :quotes, :rebate, :integer
    remove_column :quotes, :residual, :float
    remove_column :quotes, :money_factor, :float
    remove_column :quotes, :months, :integer
    remove_column :quotes, :mileage, :integer
  end
end
