class Song {
    constructor({ id, title, artist, lyrics, comments }) {
        this.id = id
        this.title = title
        this.artist = artist
        this.lyrics = lyrics
        this.comments = comments

    }
    showSongTitle() {
        const selector = document.getElementById("song-selector")
        const option = document.createElement("option")
        option.value = this.id
        option.innerHTML = this.title + " - " + this.artist

        selector.append(option)
            //return selector
    }
}