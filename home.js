function f1() {
	//function to make the text bold using DOM method
	document.getElementById("textarea1").style.fontWeight = "bold";
}

function f2() {
	//function to make the text italic using DOM method
	document.getElementById("textarea1").style.fontStyle = "italic";
}

function f3() {
	//function to make the text alignment left using DOM method
	document.getElementById("textarea1").style.textAlign = "left";
}

function f4() {
	
	document.getElementById("textarea1").style.textAlign = "center";
}

function f5() {
	
	document.getElementById("textarea1").style.textAlign = "right";
}

function f6() {

	document.getElementById("textarea1").style.textTransform = "uppercase";
}

function f7() {
	
	document.getElementById("textarea1").style.textTransform = "lowercase";
}

function f8() {
	
	document.getElementById("textarea1").style.textTransform = "capitalize";
}

function f9() {
	
	document.getElementById("textarea1").style.fontWeight = "normal";
	document.getElementById("textarea1").style.textAlign = "left";
	document.getElementById("textarea1").style.fontStyle = "normal";
	document.getElementById("textarea1").style.textTransform = "capitalize";
	document.getElementById("textarea1").value = " ";
}
