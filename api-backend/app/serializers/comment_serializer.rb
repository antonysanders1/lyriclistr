class CommentSerializer < ActiveModel::Serializer
  attributes :id, :name, :body, :song_id
end
