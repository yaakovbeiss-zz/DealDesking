class ChangePhoneToString < ActiveRecord::Migration[5.0]
  def change
    change_column :leads, :phone_number, :string
  end
end
