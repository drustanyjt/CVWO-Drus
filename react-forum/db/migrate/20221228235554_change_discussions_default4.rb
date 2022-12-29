class ChangeDiscussionsDefault4 < ActiveRecord::Migration[7.0]
  def change
    change_column_default :discussions, :image, from: "https://i.imgur.com/kzhwqKt.jpg", to: "https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA25015.jpg"
  end
end
