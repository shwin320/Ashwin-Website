function scrollup(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
function copyright(){
	alert("This image is copyrighted material. Copyright © 2020 Ashwin Thomas. All Rights Reserved.");
}
var navh = document.getElementById("nhome");
var nava = document.getElementById("nabout");
var navach = document.getElementById("nachieve");
var navw = document.getElementById("nwork");
var foc = "none";
var nfoc = "none";
var darkNav = function(dark){
	if(dark.matches){
		foc = "white";
		nfoc = "#929496";
	}else{
		foc = "black";
		nfoc = "#5f6368";
	}	
};
var darkImgAll = function(dark){
	var home = document.getElementById("hbutton");
	var email = document.getElementById("ebutton");
	if(dark.matches){
		home.setAttribute("src", "https://cdn.jsdelivr.net/gh/shwin320/Ashwin-Website@d4548ff/Home (Dark).svg");
		email.setAttribute("src", "https://cdn.jsdelivr.net/gh/shwin320/Ashwin-Website@d4548ff/Email (Dark).svg");
	}else{
		home.setAttribute("src", "https://cdn.jsdelivr.net/gh/shwin320/Ashwin-Website@d4548ff/Home.svg");
		email.setAttribute("src", "https://cdn.jsdelivr.net/gh/shwin320/Ashwin-Website@d4548ff/Email.svg");
	}	
};
var darkImgAch = function(dark){
	var PJAS = document.getElementById("pjas");
	var PEAP = document.getElementById("peap");
	var PTA = document.getElementById("pta");
	var STA = document.getElementById("mcsta");
	if(dark.matches){
		PJAS.setAttribute("src", "https://cdn.jsdelivr.net/gh/shwin320/Ashwin-Website@d4548ff/PJAS (dark).jpg");
		PEAP.setAttribute("src", "https://cdn.jsdelivr.net/gh/shwin320/Ashwin-Website@d4548ff/Peap (Dark).jpg");
		PTA.setAttribute("src", "https://cdn.jsdelivr.net/gh/shwin320/Ashwin-Website@d4548ff/PTA (dark).jpg");
		STA.setAttribute("src", "https://cdn.jsdelivr.net/gh/shwin320/Ashwin-Website@b501fe0/MCSTA (dark).png");
	}else{
		PJAS.setAttribute("src", "https://cdn.jsdelivr.net/gh/shwin320/Ashwin-Website@d4548ff/PJAS.jpg");
		PEAP.setAttribute("src", "https://cdn.jsdelivr.net/gh/shwin320/Ashwin-Website@d4548ff/Peap.jpg");
		PTA.setAttribute("src", "https://cdn.jsdelivr.net/gh/shwin320/Ashwin-Website@d4548ff/PTA.jpg");
		STA.setAttribute("src", "https://cdn.jsdelivr.net/gh/shwin320/Ashwin-Website@b501fe0/MCSTA.png");
	}
};
var darkImgWork = function(dark){
	var Port = document.getElementById("eport");
	if(dark.matches){
		Port.setAttribute("src", "https://cdn.jsdelivr.net/gh/shwin320/Ashwin-Website@d4548ff/Ashwin's ePortfolio (Black).jpg");
	}else{
		Port.setAttribute("src", "https://cdn.jsdelivr.net/gh/shwin320/Ashwin-Website@d4548ff/Ashwin's ePortfolio.jpg");
	}
};
var dark = window.matchMedia("(prefers-color-scheme: dark)");
darkNav(dark);
dark.addListener(darkNav);
darkImgAll(dark);
dark.addListener(darkImgAll);
var underhome = function(){
	var home = document.getElementById("home");
	home.style.width = "48.422px";
	navh.style.color = foc;
};
var underabout = function(){
	var about = document.getElementById("about");
	about.style.width = "77.625px";
	nava.style.color = foc;
};
var underachieve = function(){
	var achieve = document.getElementById("achieve");
	achieve.style.width = "113.422px";
	navach.style.color = foc;
};
var underwork = function(){
	var work = document.getElementById("work");
	work.style.width = "69.875px";
	navw.style.color = foc;
};
var nunderhome = function(){
	var home = document.getElementById("home");
	home.style.width = "0px";
	navh.style.color = nfoc;
};
var nunderabout = function(){
	var about = document.getElementById("about");
	about.style.width = "0px";
	nava.style.color = nfoc;
};
var nunderachieve = function(){
	var achieve = document.getElementById("achieve");
	achieve.style.width = "0px";
	navach.style.color = nfoc;
};
var nunderwork = function(){
	var work = document.getElementById("work");
	work.style.width = "0px";
	navw.style.color = nfoc;
};
