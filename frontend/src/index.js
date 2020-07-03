document.addEventListener("DOMContentLoaded", function() {
    getSong();
    //createNewSong();
    // getComments();
    //createNewComment();
})
const service = new ApiAdapter;


function getSong() {
    service.getSongs("songs")
        .then(data => {
            data.forEach(i => {
                const song = new Song(i)
                song.SongName
            })
        })
}

function getComment() {
    service.getComments("comments")
        .then(data => {
            data.forEach(d => {
                const newComment = new Comment(d)
                    //newComment.categoryName
            })
        })
}