var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if( mySrc === 'images/cat.jpg') {
        myImage.setAttribute('src', 'images/cat2.jpg');
    } else {
        myImage.setAttribute('src', 'images/cat.jpg');
    }
};

var myHeading = document.querySelector('h2');

function setUserName() {
    var myName = document.getElementById('textBox');
    myHeading.innerHTML = 'Hello, ' + myName.value;
}

