const modal = document.getElementById('myModal');
const img = $('.myImg');
const modalImg = $("#img01");
const captionText = document.getElementById("caption");
$('.myImg').click(function(){
    modal.style.display = "block";
    const newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
});

const span = document.getElementsByClassName("close")[0];

span.onclick = () => {
  modal.style.display = "none";
}

window.onclick = event => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}