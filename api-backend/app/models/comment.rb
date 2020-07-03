class Comment < ApplicationRecord
    belongs_to :song
    validates :body, presence: true
end
