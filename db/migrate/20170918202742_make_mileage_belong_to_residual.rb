class MakeMileageBelongToResidual < ActiveRecord::Migration[5.0]
  def change
    add_column :mileages, :residual_id, :integer
    remove_column :mileages, :quote_id, :integer
    remove_column :residuals, :mileage_id, :integer
    remove_column :residuals, :residualable_id, :integer
  end
end
