"use strict";

let score = 0

let name = prompt ('whts your name')
console.log(name)

alert ('hello and welcome '+name + ', thank you for taking this guess game')
alert ('Please answer yes or no only')

let favcolor=prompt ( 'black is my favorite color ')

favcolor=favcolor.toLowerCase()

switch(favcolor){
case'yes':
alert ('incorrect answer ');
console .log('incorrect');

break;
case'no':
alert('thats correct');
console .log('correct');
score++;
break;
default:
    alert('pleas answer whit yes or no only')

}

let favsport=prompt ( 'soccer is my favorite sport')

favsport=favsport.toLowerCase()

switch(favsport){
case'yes':
alert ('thats correct');
console.log('correct');
score++;
break;
case'no':
alert('incorrect answer');
console.log('incorrect');
break;
default:
    alert('pleas answer whith yes or no only')

}

let uni=prompt ( 'I graduated from University of Jordan')

uni=uni.toLowerCase()

switch(uni){
case'yes':
alert ('thats correct');
console.log('correct');
score++;
break;
case'no':
alert('incorrect answer');
console.log('incorrect');
break;
default:
    alert('pleas answer whith yes or no only')

}

let favtv=prompt ( 'my favorite tv show is Friends')

favtv=favtv.toLowerCase()

switch(favtv){
case'yes':
alert ('yup thats correct, and it should be your favorite too :P ');
console.log('correct');
score++;
break;
case'no':
alert('obviously incorrect answer -_- ');
console.log('incorrect');
break;
default:
    alert('pleas answer whith yes or no only')

}

alert('you have 4 attempts for the next question')
for (let i = 0; i < 4; i++) {

    var num = prompt("guess a number between 1 to 10")
 if (num > 3) {

    alert("too high");

}
else if (num < 3) {

    alert("too low");

}

else if (num = 3) {
    alert ('correct');
    score++;
    break;
}    

}
if (num!=3) {
   alert('the correct answer is 3') 
}
alert('you have 6 attempts for the next question')

let suit = ['tie', 'shirt', 'jacket', 'pants']


for (let j = 0; j < 6; j++) {
    var suitpices = prompt('the suit have 4 pices, name one of them')

    suitpices=suitpices.toLowerCase()

   if (suitpices == suit[0]||suitpices == suit[1]||suitpices == suit[2]||suitpices == suit[3]) {
        alert("thants correct");
        score++;

        break;
    }
    else{
        alert("incorrect answer try again");
    }
}
if (suitpices == !suit[0]||suitpices == !suit[1]||suitpices == !suit[2]||suitpices == !suit[3]) {
    alert("the right answers are tie, shirt, jacket and pants");
}

alert('your score is ' + score + ' /6')