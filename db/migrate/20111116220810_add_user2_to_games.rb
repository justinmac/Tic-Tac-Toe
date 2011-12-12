class AddUser2ToGames < ActiveRecord::Migration
  def change
    add_column :games, :user2, :integer
  end
end
