class ApiAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/"
    }

    getSongs(url) {
        return fetch(`${this.baseUrl}${url}`).then(res => res.json())
    }

    getComments(url) {
        return fetch(`${this.baseUrl}${url}`).then(res => res.json())
    }

    createSongs(title, artist, lyrics) {
        return fetch(`${this.baseUrl}songs`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                title: title,
                artist: artist,
                lyrics: lyrics
            })
        }).then(response => response.json())
    }

}