class AddMileageIdToResidual < ActiveRecord::Migration[5.0]
  def change
    add_column :residuals, :mileage_id, :integer, null: false
  end
end
