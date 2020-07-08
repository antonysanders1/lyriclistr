document.getElementById("new-song-btn").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("welcome").style.display = "none";
    document.getElementById("new-form-container").style.display = "inline";
    document.getElementById("cancel-btn").style.display = "inline"
    document.getElementById("or").style.display = "none"
    document.getElementById("new-song-btn").style.display = "none"
})

document.getElementById("cancel-btn").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("welcome").style.display = "block";
    document.getElementById("new-form-container").style.display = "none";
    document.getElementById("new-song-btn").style.display = "inline"
    document.getElementById("or").style.display = "inline"
    document.getElementById("cancel-btn").style.display = "none"
})

// document.getElementById("submit-btn").addEventListener("click", function() {
//     document.getElementById("main-container").style.display = "none";
//     document.getElementById("song").style.display = "inline";

// })