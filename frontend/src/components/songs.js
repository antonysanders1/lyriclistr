class Song {
    constructor({ id, title, artist, lyrics }) {
        this.id = id
        this.title = title
        this.artist = artist
        this.lyrics = lyrics
        this.comments = []
    }
    get songTitle() {
        const selector = document.getElementById("song-selector")
        const option = document.createElement("option")
        option.value = this.id
        option.innerHTML = this.title
        selector.append(option)
        return selector
    }
}