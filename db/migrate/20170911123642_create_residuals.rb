class CreateResiduals < ActiveRecord::Migration[5.0]
  def change
    create_table :residuals do |t|
      t.integer :term_id, null: false
      t.float :residual, null: false

      t.timestamps
    end
  end
end
