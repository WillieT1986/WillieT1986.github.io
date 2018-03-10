// Nav Toggle Button
function toggleNavLiLinks() {
	const x = document.getElementById("navLiLink1");
	const y = document.getElementById("navLiLink2");
	if (x.style.display === "none" && y.style.display === "none") {
		x.style.display = "block";
		y.style.display = "block";
	} else {
		x.style.display = "none";
		y.style.display = "none";
	}
}

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
	var x = document.getElementById("toggleProj1");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function expandButton2() {
	var x = document.getElementById("toggleProj2");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function expandButton3() {
	var x = document.getElementById("toggleProj3");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

// Beginning of Modal JS <- Delete JS Modal Content after grading
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
// Ending of Modal JS