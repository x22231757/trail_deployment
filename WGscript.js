// Automatic slide show
let slideIndex = 0;
showSlides();

function showSlides() {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	setTimeout(showSlides, 5000); // Change image every n seconds
}


//Subscription pop up after set time
my_popup = document.getElementById("my-popup");
const overlay = document.querySelector(".overlay");

function showPopUp() {
	my_popup.style.display = "block";
	overlay.classList.remove("hidden");
}
setTimeout(showPopUp, 5000);

function ClosePopUp() {
	my_popup.style.display = "none";
	overlay.classList.add("hidden");
}

//Email Validation for pop up
function ValidateEmail(email) {
	var emailval = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (email.value.match(emailval)) {
		ThankYouMessage(email)
		return true;
	} else {
		alert("The email address you entered is invalid");
		document.contactusform.email.focus();
		return false;
	}
}

//Thank you message for pop up 
function ThankYouMessage(email) {
	document.getElementById("section_2").style.display = "none";
	document.getElementById("section_3").style.display = "none";
	document.getElementById("section_4").style.display = "block";
	document.getElementById("thank_you_paragraph").innerHTML += " " + email.value + ".";
}