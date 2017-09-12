class CreateMileage < ActiveRecord::Migration[5.0]
  def change
    create_table :mileages do |t|
      t.integer :quote_id, null: false
      t.integer :mileage, null: false

      t.timestamps
    end
  end
end
