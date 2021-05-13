class CreateStonks < ActiveRecord::Migration[5.2]
  def change
    create_table :stonks do |t|
      t.references :user
      t.references :stock
    end
  end
end
