	
var inputBoxUpper = document.getElementById("upper");
inputBoxUpper.onkeyup = function(){
    document.getElementById("top").innerHTML = inputBoxUpper.value; }

var inputBoxLower = document.getElementById("lower");
inputBoxLower.onkeyup = function(){
    document.getElementById("bottom").innerHTML = inputBoxLower.value; }
	
function getdata() {
	// gets parameter
	var queryString = decodeURIComponent(window.location.search);
	// remove prefix
	queryString = queryString.substring(1);
	divtochange = "pic" + queryString;
	document.getElementById(divtochange).style.zIndex = "18";
}

document.getElementById("WhiteDiv").addEventListener("click", setWhite);
document.getElementById("BlackDiv").addEventListener("click", setBlack);
document.getElementById("RedDiv").addEventListener("click", setRed);
document.getElementById("BlueDiv").addEventListener("click", setBlue);
document.getElementById("WhiteDiv2").addEventListener("click", setWhite2);
document.getElementById("BlackDiv2").addEventListener("click", setBlack2);
document.getElementById("RedDiv2").addEventListener("click", setRed2);
document.getElementById("BlueDiv2").addEventListener("click", setBlue2);

function setWhite() {
	document.getElementById("top").style.color = "#fff";
}
function setBlack() {
	document.getElementById("top").style.color = "#000";
}
function setRed() {
	document.getElementById("top").style.color = "#ff0000";
}
function setBlue() {
	document.getElementById("top").style.color = "#0017ff";
}
function setWhite2() {
	document.getElementById("bottom").style.color = "#fff";
}
function setBlack2() {
	document.getElementById("bottom").style.color = "#000";
}
function setRed2() {
	document.getElementById("bottom").style.color = "#ff0000";
}
function setBlue2() {
	document.getElementById("bottom").style.color = "#0017ff";
}


document.getElementById("LargeDiv").addEventListener("click", setLarge);
document.getElementById("XLargeDiv").addEventListener("click", setXLargee);
document.getElementById("XXlargeDiv").addEventListener("click", setXXlarge);
document.getElementById("LargeDiv2").addEventListener("click", setLarge2);
document.getElementById("XLargeDiv2").addEventListener("click", setXLarge2)
document.getElementById("XXlargeDiv2").addEventListener("click", setXXlarge2);

function setLarge() {
		document.getElementById("top").style.fontSize = "large"'
}

function setXLarge() {
		document.getElementById("top").style.fontSize = "x-large";
}

function setXXlarge() {
		document.getElementById("top").style.fontSize = "xx-large";
}
function setLarge2() {
		document.getElementById("bottom").style.fontSize = "large";
}
function setXLarge2() {
		document.getElementById("bottom").style.fontSize = "x-large";
}
function setXXLarge2() {
		document.getElementById("bottom").style.fontSize = "xx-large";
}