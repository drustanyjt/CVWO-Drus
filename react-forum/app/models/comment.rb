class Comment < ApplicationRecord
    validates :user_id, presence: true
    validates :discussion_id, presence: true
    validates :text, presence: true
    
end
