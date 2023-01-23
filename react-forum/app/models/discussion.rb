class Discussion < ApplicationRecord
    validates :title, presence: true
    validates :body, presence: true
    has_many :comments, dependent: :delete_all
    
end
