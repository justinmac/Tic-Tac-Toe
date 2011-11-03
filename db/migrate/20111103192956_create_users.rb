class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.integer :id
      t.integer :current_game
      t.string :password

      t.timestamps
    end
  end
end
