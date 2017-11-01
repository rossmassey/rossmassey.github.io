var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if( mySrc === 'images/cat.jpg') {
        myImage.setAttribute('src', 'images/cat2.jpg');
    } else {
        myImage.setAttribute('src', 'images/cat.jpg');
    }
};

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Hello, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('sname');
    myHeading.innerHTML = 'Hello, ' + storedName;
}

myButton.onClick = function () {
    setUserName();
};

