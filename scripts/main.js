document.querySelector('h2').onclick = function() {
	alert('9.9/10 or FUCKING AMAZING/FANTASTIC');
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/1.png') {
		myImage.setAttribute('src','images/2.png');
	} else {
		myImage.setAttribute('src','images/1.png');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name.');
	if(!myName) {
		setUserName();
	} 	else {
		localStorage.setItem('name', myName);
		myHeading.innerHTML = 'An actually GOOD school life manga, trust me, ' + myName;
}
}

if(!localStorage.getItem('name')) {
	setUserName();
} 	else {
	let storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'An actually GOOD school life manga, trust me, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}