var myText = 'Geiciane Barham';

var myArray = myText.split("");

var loopTimer;

function frameLooper() {

if(myArray.length > 0) {

document.getElementById("type-text").innerHTML += myArray.shift();

} else {

clearTimeout(loopTimer);

return false;

}

loopTimer = setTimeout('frameLooper()',70);

}

frameLooper();

// 

var myText2 = 'Web Developer';

var myArray2 = myText2.split("");

var loopTimer2;

function frameLooper2() {

if(myArray2.length > 0) {

document.getElementById("type2").innerHTML += myArray2.shift();

} else {

clearTimeout(loopTimer2);

return false;

}

loopTimer2 = setTimeout('frameLooper2()',170);

}

// frameLooper2();

setInterval(frameLooper2,2000);