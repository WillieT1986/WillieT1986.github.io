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

//Beginning of the EventListener
document.getElementById("dateBtn").addEventListener("click", displayDate);

function displayDate() {
	document.getElementById("demoDate").innerHTML = Date();
}
//End of the EventListener