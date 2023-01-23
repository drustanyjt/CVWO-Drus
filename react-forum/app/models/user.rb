class User < ApplicationRecord
    has_many :discussions, dependent: :delete_all
    has_many :comments, dependent: :delete_all

end
