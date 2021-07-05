"use strict";


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
break;
case'no':
alert('obviously incorrect answer -_- ');
console.log('incorrect');
break;
default:
    alert('pleas answer whith yes or no only')

}




