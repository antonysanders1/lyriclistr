document.addEventListener("DOMContentLoaded", function() {
    getSongTitle();
    songSelect();
    newSong();
    newComment();
})

const service = new ApiAdapter;

function getSongTitle() {
    service.getSongTitles("songs")
        .then(data => {
            data.sort((a, b) => b.id - a.id)
                .forEach(s => {
                    const song = new Song(s)
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
                selectedSong.comments.sort((a, b) => b.id - a.id)
                if (!!document.getElementById('song-title')) {
                    let previousSongTitle = document.querySelector('h2');
                    let previousSongArtist = document.querySelector('h4');
                    let previousSongLyrics = document.getElementById('song-lyrics');
                    song.removeChild(previousSongTitle)
                    song.removeChild(previousSongArtist)
                    song.removeChild(previousSongLyrics)

                    let container = document.getElementById('comments-container');
                    let commentsList = document.getElementById('comments');
                    let previousSongComment = document.getElementsByClassName('comment');
                    let newCommentsList = document.createElement('ul');
                    if (selectedSong.comments.length > 0) {
                        selectedSong.comments.forEach(com => {
                            let comment = document.createElement('li')
                            comment.setAttribute("class", "comment")
                            comment.innerText = com.name + "\n" + com.body
                            container.appendChild(newCommentsList);
                            newCommentsList.insertBefore(comment, newCommentsList.firstElementChild);

                        })
                    } else {
                        let dComment = document.createElement('li');
                        dComment.setAttribute('id', 'default-comment')
                        dComment.innerText = 'This song currently has no comments. Leave some feedback...'
                        container.appendChild(newCommentsList)
                        newCommentsList.appendChild(dComment);


                    }
                    commentsList.remove(previousSongComment);
                    newCommentsList.setAttribute("id", "comments");
                } else {
                    let comments = document.getElementById('comments')
                    if (selectedSong.comments.length > 0) {
                        document.getElementById('comments-container').style.display = "inline";
                        document.getElementById('default-comment').style.display = "none";
                        selectedSong.comments.forEach(com => {
                            let comment = document.createElement('li')
                            comment.setAttribute("class", "comment")
                            comment.innerText = com.name + "\n" + com.body
                            comments.appendChild(comment)
                        })
                    }

                    document.getElementById('comment-default').style.display = "none"
                        // document.getElementById('comment-form-container').style.display = "none"
                    document.getElementById('comments-container').style.display = "inline";

                }
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
        service.fetchCreateSong(title, artist, lyrics).then(data => {
            let nSong = new Song(data)
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
                songTitle.innerHTML = nSong.title;
                songTitle.setAttribute('id', 'song-title')
                songArtist.innerHTML = nSong.artist;
                songArtist.setAttribute('id', 'song-artist')
                songLyrics.innerText = nSong.lyrics;
                songLyrics.setAttribute('id', 'song-lyrics')
                song.append(songTitle, songArtist, songLyrics)
                displayEmptyCommentsSection();


            } else {
                let songTitle = document.createElement('h2')
                let songArtist = document.createElement('h4')
                let songLyrics = document.createElement('p')
                songTitle.innerHTML = nSong.title;
                songTitle.setAttribute('id', 'song-title')
                songArtist.innerHTML = nSong.artist;
                songArtist.setAttribute('id', 'song-artist')
                songLyrics.innerText = nSong.lyrics;
                songLyrics.setAttribute('id', 'song-lyrics')
                song.append(songTitle, songArtist, songLyrics)


                document.getElementById('comments-container').style.display = "inline";
                document.getElementById('comment-default').style.display = "none";
                // document.getElementById('default-comment').style.display = "inline";
                //let comments = document.getElementById('comments')

            }
            song.style.display = "inline";
            document.getElementById('song-selector').style.display = "inline"


        })
    })

}


function newComment() {
    //let formContainer = document.getElementById('comment-form-container')
    let cForm = document.getElementById("new-comment-form");
    cForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = e.target[0].value
        const body = e.target[1].value
        const songId = document.getElementById('song-selector').value
        service.fetchCreateComment(name, body, songId).then(data => {
            let newCom = new Comment(data)
            let commentsContainer = document.getElementById('comments')

            if (!document.getElementsByClassName('comment')) {
                commentsContainer.style.display = "inline"
            }
            document.getElementById('default-comment').style.display = 'none'
            let comment = document.createElement("li")
            comment.setAttribute('class', 'comment')
            comment.innerHTML = newCom.name + '<br/>' + newCom.body
            commentsContainer.insertBefore(comment, commentsContainer.firstElementChild)
            document.getElementById('com-name').value = ""
            document.getElementById('com-input').value = ""

        })
    })

}

function displayEmptyCommentsSection() {
    if (!!document.getElementsByClassName('comment')) {
        let commentsContainer = document.getElementById('comments-container');
        let comUl = document.getElementById('comments');
        let com = document.getElementsByClassName('comment');
        comUl.remove(com);
        let newComUl = document.createElement('ul');
        newComUl.setAttribute("id", 'comments');
        let newDefaultCom = document.createElement('li')
        newDefaultCom.setAttribute("id", "default-comment")
        newDefaultCom.innerText = "This song currently has no comments. Leave some feedback..."
        newComUl.appendChild(newDefaultCom)
        commentsContainer.appendChild(newComUl)
        commentsContainer.style.display = "inline";
        document.getElementById('comment-default').style.display = "none";
    } else {
        document.getElementById('comments-container').style.display = "inline";
    }
}