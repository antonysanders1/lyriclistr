class ApiAdapter {
    constructor() {
        this.baseUrl = "http://localhost:3000/"
    }

    getSongTitles(url) {
        return fetch(`${this.baseUrl}${url}`).then(res => res.json())

    }

    getSong(id) {
        return fetch(`${this.baseUrl}songs/${id}`).then(res => res.json())

    }

    fetchCreateSong(title, artist, lyrics) {
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
        }).then(res => res.json())
    }

    fetchCreateComment(name, body, songId) {
        return fetch(`${this.baseUrl}comments`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: name,
                body: body,
                song_id: songId
            })
        }).then(res => res.json())
    }

}