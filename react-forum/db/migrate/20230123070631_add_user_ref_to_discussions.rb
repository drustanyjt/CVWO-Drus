class AddUserRefToDiscussions < ActiveRecord::Migration[7.0]
  def change
    add_reference :discussions, :user, null: true, foreign_key: true, default: 1
    
  end
end
