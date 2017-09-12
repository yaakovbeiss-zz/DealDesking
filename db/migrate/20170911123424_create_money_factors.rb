class CreateMoneyFactors < ActiveRecord::Migration[5.0]
  def change
    create_table :money_factors do |t|
      t.integer :term_id, null: false
      t.float :money_factor, null: false

      t.timestamps
    end

    change_column_null :terms, :quote_id, false
    change_column_null :terms, :months, false
  end
end
