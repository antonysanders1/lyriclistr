class SongsController < ApplicationController

    def index
        @songs = Song.all

        render json: @songs, status: 200
    end

    def show
       @song = Song.find(params:id)
       
       render json: @song, status: 200
    end

    def create
        @song = Song.create(song_params)
        if @song.create
            render json: @song, status: 200
        else
            render json: {message: @song.errors.messages}
        end
    end

    def update
        @song = Song.find(params[:id])
        if @song.update
            render json: @song, status: 200
        else
            render json: {message: @song.errors.messages}
        end
    end

    private 

    def song_params
        params.require(:song).permit(:title, :artist, :lyrics)
    end

end
