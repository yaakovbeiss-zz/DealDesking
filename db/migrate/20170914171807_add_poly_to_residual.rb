class AddPolyToResidual < ActiveRecord::Migration[5.0]
  def change
    add_column :residuals, :residualable_id, :integer, null: false
  end
end
