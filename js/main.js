"use strict";

let num = 266219;
let num2 = 266219;
let arrList = [];
let tmpMass = [];
let iter = 0;
let number = 1;
let number2 = 1;
let numberTmp = 1;
let tmp;

/* first method */

function calc(num) {

    for (let i = 0; i < 6; i++) {
        
        let tmp = num % 10;
        arrList.push(tmp);
        num = Math.floor((num / 10));
       
    } 

    arrList.reverse();

    for (let i = 0; i < arrList.length; i++) {

        number *=  arrList[i];

    }

    number **=  3;
    console.log('number: ', number);

    numberTmp = number;
    console.log('numberTmp: ', numberTmp);

    while ( numberTmp !== 0 ) {
        
      numberTmp = Math.round(numberTmp / 10);
      iter++;

    }

    var rezult = number;

    for (let i = 0; i < iter - 2; i++) {
      
      rezult = Math.floor(rezult / 10);
      
    }

    console.log('rezult: ', rezult);
    
}


/* second method */

function calc2(num) {

    num2 = String(num);

    arrList = num2.split(""); 

    for (let i = 0; i < arrList.length; i++) {
        
         number2 *= arrList[i];
        
    }

    console.log('number2: ', number2);
    
    number2 **= 3;
    console.log('number2: ', number2);

    number = String(number);
    arrList = number.split("");
    arrList.reverse();
    
    for (let i = 0; i < 2; i++) {
        
        tmpMass[i] = arrList.pop();  

    }

    let rezult2 = tmpMass.join('');
    console.log('rezult2: ', rezult2);
   
}


calc(num);
calc2(num);