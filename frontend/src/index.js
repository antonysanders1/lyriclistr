document.addEventListener("DOMContentLoaded", function() {
    getSongTitle();
    songSelect();
    newSong();
    // getComments();
    //createComment();
})

const service = new ApiAdapter;

function getSongTitle() {
    service.getSongTitles("songs")
        .then(data => {
            data.forEach(index => {
                const song = new Song(index)
                song.showSongTitle()
            })
        })
}

function songSelect() {
    let selector = document.getElementById('song-selector')
    let song = document.getElementById("song-container");
    selector.addEventListener('change', function(e) {
        e.preventDefault()
        document.getElementById("main-container").style.display = "none";
        let songId = e.target.value
        service.getSong(songId)
            .then(data => {
                let selectedSong = new Song(data)
                if (!!document.getElementById('song-title')) {
                    let previousSongTitle = document.querySelector('h2');
                    let previousSongArtist = document.querySelector('h4');
                    let previousSongLyrics = document.getElementById('song-lyrics');
                    song.removeChild(previousSongTitle)
                    song.removeChild(previousSongArtist)
                    song.removeChild(previousSongLyrics)

                    let songTitle = document.createElement('h2');
                    let songArtist = document.createElement('h4');
                    let songLyrics = document.createElement('p');
                    songTitle.innerHTML = selectedSong.title
                    songTitle.setAttribute('id', 'song-title')
                    songArtist.innerHTML = selectedSong.artist
                    songArtist.setAttribute('id', 'song-artist')
                    songLyrics.innerText = selectedSong.lyrics
                    songLyrics.setAttribute('id', 'song-lyrics')
                    song.append(songTitle, songArtist, songLyrics)
                } else {
                    let songTitle = document.createElement('h2');
                    let songArtist = document.createElement('h4');
                    let songLyrics = document.createElement('p');
                    songTitle.innerHTML = selectedSong.title
                    songTitle.setAttribute('id', 'song-title')
                    songArtist.innerHTML = selectedSong.artist
                    songArtist.setAttribute('id', 'song-artist')
                    songLyrics.innerText = selectedSong.lyrics
                    songLyrics.setAttribute('id', 'song-lyrics')
                    song.append(songTitle, songArtist, songLyrics)
                }

                song.style.display = "inline";
            })

    })

}

function newSong() {
    let main = document.getElementById('main-container')
    let form = document.getElementById("new-song");
    let song = document.getElementById('song-container');
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const title = e.target[0].value
        const artist = e.target[1].value
        const lyrics = e.target[2].value
        service.fetchCreateSong(title, artist, lyrics).then(data => { let newSong = new Song(data) })
        main.style.display = "none";

        if (!!document.getElementById('song-title')) {
            let previousSongTitle = document.querySelector('h2');
            let previousSongArtist = document.querySelector('h4');
            let previousSongLyrics = document.getElementById('song-lyrics');
            song.removeChild(previousSongTitle)
            song.removeChild(previousSongArtist)
            song.removeChild(previousSongLyrics)
            let songTitle = document.createElement('h2')
            let songArtist = document.createElement('h4')
            let songLyrics = document.createElement('p')
            songTitle.innerHTML = title;
            songTitle.setAttribute('id', 'song-title')
            songArtist.innerHTML = artist;
            songArtist.setAttribute('id', 'song-artist')
            songLyrics.innerText = lyrics;
            songLyrics.setAttribute('id', 'song-lyrics')
            song.append(songTitle, songArtist, songLyrics)
        } else {
            let songTitle = document.createElement('h2')
            let songArtist = document.createElement('h4')
            let songLyrics = document.createElement('p')
            songTitle.innerHTML = title;
            songTitle.setAttribute('id', 'song-title')
            songArtist.innerHTML = artist;
            songArtist.setAttribute('id', 'song-artist')
            songLyrics.innerText = lyrics;
            songLyrics.setAttribute('id', 'song-lyrics')
            song.append(songTitle, songArtist, songLyrics)
        }
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