class User < ApplicationRecord
    has_many :discussions, dependent: :destroy

end
