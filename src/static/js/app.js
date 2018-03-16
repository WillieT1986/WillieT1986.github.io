// About Me Image Carousel
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function showDivs(n) {
	let i;
	const x = document.getElementsByClassName("my-photo");
	if (n > x.length) {slideIndex = 1} 
		if (n < 1) {slideIndex = x.length} ;
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none"; 
	}
	x[slideIndex-1].style.display = "block"; 
}

// Expand Button Functions for Project Descriptions
// There has to be a way to refactor this into a single function.
// Maybe someting similar to the Nav Links without them disappearing all at once.
function expandButton1() {
	const x = document.getElementById("toggleProj1");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function expandButton2() {
	const x = document.getElementById("toggleProj2");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function expandButton3() {
	const x = document.getElementById("toggleProj3");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

// Beginning of Modal JS <- Delete JS Modal Content after grading
// Get the modal
const modal = document.getElementById('myModal');
const btn = document.getElementById("modalBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = () => { //Opens modal when button is clicked
	modal.style.display = "block";
}

span.onclick = () => { //Allows the user to cloce the modal by clicking the x
	modal.style.display = "none";
}

window.onclick = event => { //This allows the user to close modal by clicking outside it
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
// Ending of Modal JS

//Beginning of the EventListener
document.getElementById("dateBtn").addEventListener("click", displayDate);

function displayDate() {
	document.getElementById("demoDate").innerHTML = Date();
}
//End of the EventListener