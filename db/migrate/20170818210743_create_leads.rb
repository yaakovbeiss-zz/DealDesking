class CreateLeads < ActiveRecord::Migration[5.0]
  def change
    create_table :leads do |t|
      t.string :name
      t.string :email
      t.integer :phone_number
      t.string :address
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
