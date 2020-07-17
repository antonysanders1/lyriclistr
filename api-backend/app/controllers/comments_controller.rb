class CommentsController < ApplicationController
    def index
        @comments = Comment.all

        render json: @comments, status: 200
    end

    def show
       @comment = Comment.find(params[:id])
       
       render json: @comment, status: 200
    end

    def create
        @comment = Comment.create(comment_params)
        if @comment.valid?
            render json: @comment, status: 200
        else
            render json: {message: @comment.errors.messages}
        end
    end

    def update
        @comment = Comment.find(params[:id])
        if @song.update
            render json: @comment, status: 200
        else
            render json: {message: @comment.errors.messages}
        end
    end

    private 

    def comment_params
        params.require(:comment).permit(:name, :body, :song_id)
    end
end
