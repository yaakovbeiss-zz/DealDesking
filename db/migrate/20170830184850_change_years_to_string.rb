class ChangeYearsToString < ActiveRecord::Migration[5.0]
  def change
    change_column :makes, :year, :string
  end
end
