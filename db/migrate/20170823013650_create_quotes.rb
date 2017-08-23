class CreateQuotes < ActiveRecord::Migration[5.0]
  def change
    create_table :quotes do |t|
      t.integer :user_id, null: false
      t.integer :lead_id

      t.integer :year
      t.string :make
      t.string :model
      t.string :trim
      t.string :title
      t.integer :msrp
      t.integer :sell_price
      t.integer :profit
      t.integer :rebate
      t.float :residual
      t.float :money_factor
      t.integer :months
      t.float :tax
      t.integer :bank_fee
      t.float :registration
      t.integer :doc_fee
      t.integer :smog
      t.integer :misc_fee
      t.float :rebate_tax
      t.integer :customer_cash
      t.string :bank_fee_plan
      t.string :registration_plan
      t.string :smog_plan
      t.string :misc_fee_plan
      t.string :rebate_tax_plan

      t.timestamps
    end
    add_index :quotes, :user_id
  end
end
