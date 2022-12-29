class ChangeDiscussionsDefault1 < ActiveRecord::Migration[7.0]
  def change
    change_column_default :discussions, :image, from: 'https://i.imgur.com/UoUyGR3.jpeg', to: 'https://raw.githubusercontent.com/do-community/react_rails_recipe/master/app/assets/images/Sammy_Meal.jpg'
    change_column_default :discussions, :author, from: '', to: 'Anon'
  end
end
