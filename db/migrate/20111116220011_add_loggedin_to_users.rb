class AddLoggedinToUsers < ActiveRecord::Migration
  def change
    add_column :users, :logged_in, :string
  end
end
