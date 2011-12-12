class AddUser1ToGames < ActiveRecord::Migration
  def change
    add_column :games, :user1, :integer
  end
end
