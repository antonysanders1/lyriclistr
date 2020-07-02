class Song < ApplicationRecord
    has_many :comments
    validates :title, presence: true
    validates :artist, presence: true
    validates :lyrics, presence: true
end
