class AddNullConstraintToResiduals < ActiveRecord::Migration[5.0]
  def change
    change_column_null :mileages, :residual_id, false
  end
end
