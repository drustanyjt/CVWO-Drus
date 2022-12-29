class ChangeDiscussionsDefault2 < ActiveRecord::Migration[7.0]
  def change
    change_column_default :discussions, :image, from: 'https://raw.githubusercontent.com/do-community/react_rails_recipe/master/app/assets/images/Sammy_Meal.jpg', to: "https://i.imgur.com/5OyRxc8.jpeg"
  end
end
