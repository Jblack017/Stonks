class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :ticker
      t.datetime :last_updated
      t.float :low
      t.float :high
      t.float :open
      t.float :close
    end
  end
end
