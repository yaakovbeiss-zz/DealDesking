class CreateTerms < ActiveRecord::Migration[5.0]
  def change
    create_table :terms do |t|
      t.integer :quote_id
      t.integer :months

      t.timestamps
    end
  end
end
