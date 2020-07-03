class Song {
    constructor({ id, title, artist, lyrics }) {
        this.id = id
        this.title = title
        this.artist = artist
        this.lyrics = lyrics
        this.comments = []
    }
    get songName() {
        const selector = document.getElementById("song-select")
        const option = document.createElement("option")
        option.innerHTML = this.name
        select.appendChild(option)
            //return selector
    }
}