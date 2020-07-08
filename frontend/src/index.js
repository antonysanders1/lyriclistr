document.addEventListener("DOMContentLoaded", function() {
    getSong();
    newSong();
    // getComments();
    //createComment();
})

const service = new ApiAdapter;

function getSong() {
    service.getSongs("songs")
        .then(data => {
            data.forEach(index => {
                const song = new Song(index)
            })
        })
}

function newSong() {
    let form = document.getElementById("new-song");
    let song = document.getElementById("song");
    let songTitle = document.createElement('h2');
    let songArtist = document.createElement('h4');
    let songLyrics = document.createElement('p');
    form.addEventListener("submit", function(e) {
        e.preventDefault()
        const title = e.target[0].value
        const artist = e.target[1].value
        const lyrics = e.target[2].value
        service.fetchCreateSong(title, artist, lyrics).then(data => { let newSong = new Song(data) })
        document.getElementById("main-container").style.display = "none";
        songTitle.innerHTML = title;
        songArtist.innerHTML = artist;
        songLyrics.innerText = lyrics;
        songLyrics.setAttribute('id', 'song-lyrics')
        song.appendChild(songTitle)
        song.appendChild(songArtist)
        song.appendChild(songLyrics)
        song.style.display = "inline";
    })

}











function getComment() {
    service.getComments("comments")
        .then(data => {
            data.forEach(index => {
                const comment = new Comment(index)
                    //comment.
            })
        })
}