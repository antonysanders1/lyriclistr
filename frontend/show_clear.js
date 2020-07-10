 document.getElementById("new-song-btn").addEventListener("click", function(e) {
     e.preventDefault();
     document.getElementById("welcome").style.display = "none";
     document.getElementById("main-container").style.display = "inline";
     document.getElementById("new-form-container").style.display = "inline";
     document.getElementById('song-container').style.display = "none"
     document.getElementById('song-selector').value = "default"
     let input1 = document.getElementById('input1');
     let input2 = document.getElementById('input2');
     let input3 = document.getElementById('input3');
     input1.value = ''
     input2.value = ''
     input3.value = ''
         //     document.getElementById("cancel-btn").style.display = "inline"
         //     document.getElementById("or").style.display = "none"
         //     document.getElementById("new-song-btn").style.display = "none"

 })

 document.getElementById("cancel-btn").addEventListener("click", function(e) {
     //     let form = document.getElementById("new-form-container");
     //     let inputs = document.querySelectorAll('input');
     e.preventDefault();
     window.location.reload(true);
     //     document.getElementById("welcome").style.display = "block";
     //     inputs.forEach(input => input.value = '')
     //     form.style.display = "none"
     //     document.getElementById("new-song-btn").style.display = "inline"
     //     document.getElementById("or").style.display = "inline"
     //     document.getElementById("cancel-btn").style.display = "none"
 })