//Modal for home-page start
var modal = document.getElementById('about-modal');
var btn = document.getElementById("about-me-modal");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//Modal for home-page end

