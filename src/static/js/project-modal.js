//Modals for project start
const modal = document.getElementById('myModal');
const img = document.getElementById('myImg', 'myImg2');
const modalImg = document.getElementById("img01", "img02");
const captionText = document.getElementById("caption");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

const span = document.getElementsByClassName("close")[0];

span.onclick = () => { 
  modal.style.display = "none";
}

window.onclick = event => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//Modals for project end

//Slacked Donny and email. Awaiting his reply...