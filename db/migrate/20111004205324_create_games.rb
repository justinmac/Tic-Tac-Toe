class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :id
      t.string :name
      t.string :state

      t.timestamps
    end
  end
end
