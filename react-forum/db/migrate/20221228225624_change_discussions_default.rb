class ChangeDiscussionsDefault < ActiveRecord::Migration[7.0]
  def change
    change_column :discussions, :image, :string, :default => "https://i.imgur.com/UoUyGR3.jpeg"
  end
end
