class CreateRebates < ActiveRecord::Migration[5.0]
  def change
    create_table :rebates do |t|
      t.integer :term_id, null: false
      t.integer :amount, null: false

      t.timestamps
    end
  end
end
