class SongSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :lyrics
  has_many :comments
end
