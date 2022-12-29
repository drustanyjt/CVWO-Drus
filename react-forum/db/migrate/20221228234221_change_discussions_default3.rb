class ChangeDiscussionsDefault3 < ActiveRecord::Migration[7.0]
  def change
    change_column_default :discussions, :image, from: "https://i.imgur.com/5OyRxc8.jpeg", to: "https://i.imgur.com/kzhwqKt.jpg"
  end
end
