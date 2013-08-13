var showExperience
var showExperties
var showContactMe

function mainHandler(){
	showExperience = document.getElementById("Experience");
	showExperties = document.getElementById("Experties");
	showContactMe = document.getElementById("ContactMe");
	hideAllSections();
	
	
	document.getElementById("liExperties").onclick = function(){
		menuClicked("experties");
	};
	document.getElementById("liExperience").onclick = function(){
		menuClicked("experience");
	}
	document.getElementById("liContactMe").onclick = function(){
		menuClicked("contactme");
	}
}

function menuClicked(section){
	hideAllSections()
	if(section == "experties"){
		showExperties.style.display = "block";
		
	}else if(section == "experience"){
		showExperience.style.display = "block";
	}else if(section == "contactme"){
		showContactMe.style.display = "block";
	}
	
}

function hideAllSections(){
	showExperience.style.display = "none";
	showExperties.style.display = "none";
	showContactMe.style.display = "none";
}

function adjustStyle(){
		var width=0;
	if(window.innerHeight){
		width = window.innerWidth;
	}else if (document.documentElement && document.documentElement.clientHeight) {
        width = document.documentElement.clientWidth;
    }else if (document.body) {
        width = document.body.clientWidth;
    }
    
    if(width<600){
    	document.getElementById("erezCSS").setAttribute("href", "narrow.css");
    } else {
    	document.getElementById("erezCSS").setAttribute("href", "main.css");
    }
}
window.onresize = function(){
	adjustStyle();
};

window.onload = function(){
	adjustStyle();
	mainHandler();
			
};

