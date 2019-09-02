window.onscroll = function() {scrollshow()};
function scrollshow(){
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("scroll").style.display = "block";
	} 
	else {
		document.getElementById("scroll").style.display = "none";
	}
}
function scrollup(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
function copyright(){
	alert("This image is copyrighted material. Copyright © 2019 Ashwin Thomas. All Rights Reserved.");
}