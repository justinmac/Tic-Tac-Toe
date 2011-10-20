class AddCurrentplayerToGames < ActiveRecord::Migration
  def change
    add_column :games, :currentplayer, :char
  end
end
