document.addEventListener("DOMContentLoaded", function() {
    getSong();
    //createSong();
    // getComments();
    //createComment();
})
const service = new ApiAdapter;


function getSong() {
    service.getSongs("songs")
        .then(data => {
            data.forEach(index => {
                const song = new Song(index)
                song.SongTitle
            })
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