
















// lowest value in a list of arguments
function m_hi(){
    document.getElementById('hi_m').innerHTML = Math.max(0, 150, 30, 20, -8, -200);
}


// lowest value in a list of arguments
function m_lo(){
    document.getElementById('lo_m').innerHTML = Math.min(0, 150, 30, 20, -8, -200);
}


// absolute (positive) value of a integer
function m_ab(){
    document.getElementById('ab_m').innerHTML = Math.abs(-4.6);
}


// floor
function m_floor(){
    document.getElementById('floor').innerHTML = Math.floor(4.6);
}


// floor
function m_floor(){
    document.getElementById('floor').innerHTML = Math.floor(4.6);
}

// ceil
function m_ceil(){
    document.getElementById('ceil').innerHTML = Math.ceil(4.6);
}

// round
function m_round(){
    document.getElementById('round').innerHTML = Math.round(4.6);
}


// value of PI
function m_pi(){
    document.getElementById('pi').innerHTML = Math.PI;
}


// sorts an array in descending order
function reverseSortArray(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort()
    fruits.reverse()

    document.getElementById('reso_a').innerHTML = fruits;
}


// sorts an array alphabetically
function reverseArray(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    document.getElementById('reverse_a').innerHTML = fruits.reverse();
}


// sorts an array alphabetically
function sortArray(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    document.getElementById('sort_a').innerHTML = fruits.sort();
}


// Merging Three Arrays
function con3Array(){
    const arr1 = ["Cecilie", "Lone"];
    const arr2 = ["Emil", "Tobias", "Linus"];
    const arr3 = ["Robin", "Morgan"];
    const myChildren = arr1.concat(arr2, arr3);

    document.getElementById('c3_a').innerHTML = myChildren;
}

// length of the array
function lenArray(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    document.getElementById('l_a').innerHTML = fruits.length;
}

// convert array to string
function arrToString(){
    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    document.getElementById('ar_s').innerHTML = fruits.toString();
}


// is an integer
function is2_Int(){
    document.getElementById('i2_i').innerHTML = Number.isInteger(10.5);
}

// is an integer
function is_Int(){
    document.getElementById('i1_i').innerHTML = Number.isInteger(10);
}

// converts variables to numbers
function var6Convert(){
    document.getElementById('v6_c').innerHTML = Number("john");

}
// converts variables to numbers
function var5Convert(){
    document.getElementById('v5_c').innerHTML = Number("10,20");

}
// converts variables to numbers
function var4Convert(){
    document.getElementById('v4_c').innerHTML = Number("10.33");

}

// converts variables to numbers
function var3Convert(){
    document.getElementById('v3_c').innerHTML = Number("10");

}

// converts variables to numbers
function var1Convert(){
    document.getElementById('v1_c').innerHTML = Number(true);

}

// converts variables to numbers
function var2Convert(){
    document.getElementById('v2_c').innerHTML = Number(false);

}

// string divition
function divString(){
    let num1, num2, num3;
    num1 = "100";
    num2 = "10";
    num3 = num1 / num2;

    document.getElementById('dv_s').innerHTML = 'Divition of "100" and "10" is ' + num3;

}

// string multiplication
function mulString(){
    let num1, num2, num3;
    num1 = "100";
    num2 = "10";
    num3 = num1 * num2;

    document.getElementById('ml_s').innerHTML = 'Multiplication of "100" and "10" is ' + num3;

}

// string substraction
function subString(){
    let num1, num2, num3;
    num1 = "100";
    num2 = "10";
    num3 = num1 - num2;

    document.getElementById('sb_s').innerHTML = 'Substraction of "100" and "10" is ' + num3;

}

// string substraction
function addString(){
    let num1, num2, num3;
    num1 = "100";
    num2 = "10";
    num3 = num1 + num2;

    document.getElementById('ad_s').innerHTML = 'Addition of "100" and "10" is ' + num3;

}

// string substraction
function add1String(){
    let num1, num2, num3;
    num1 = 100;
    num2 = "10";
    num3 = num1 + num2;

    document.getElementById('ad1_s').innerHTML = 'Addition of 100 and "10" is ' + num3;

}


// position of the first occurrence of a string in a string
function showString(){
    var text = document.getElementById('sh_s').innerHTML;

    document.getElementById('sh_s').innerHTML = text.indexOf('bad');

}

// Replacing all the matching String Content 
function allreplaceString(){
    var text = document.getElementById('a_re_s').innerHTML;

    document.getElementById('a_re_s').innerHTML = text.replaceAll('bad', 'good')

}

// Replacing String Content 
function replaceString(){
    var text = document.getElementById('re_s').innerHTML;

    document.getElementById('re_s').innerHTML = text.replace('bad', 'good')

}


// The trim() Method
function trimString(){
    var text = '      Hello World!      ';

    document.getElementById('tr_s').innerHTML = text.trim();

}


// Convert string to upper case
function upcaseString(){
    var text = document.getElementById('u_s').innerHTML;

    document.getElementById('u_s').innerHTML = text.toUpperCase();

}

// Convert string to lower case
function lowcaseString(){
    var text = document.getElementById('lo_s').innerHTML;

    document.getElementById('lo_s').innerHTML = text.toLowerCase();

}


// length of a string 
function lengthString(){
    var text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    document.getElementById('l_s').innerHTML = 'Length of the string is: ' + text.length;

}


// specified character's ascii value in a string
function asString(){
    var text = "HELLO WORLD";

    document.getElementById('a_s').innerHTML = 'ASCII value of the Character at index 6 (' + text.charAt(6) + '): ' + text.charCodeAt(6);

}

// specified position in a string 
function speinString(){
    var text = "HELLO WORLD";

    document.getElementById('s_s').innerHTML = 'Character at index 6: ' + text.charAt(6);

}

// addition of two number
function add(){
    let num1, num2, num3;
    num1 = 10;
    num2 = 5;
    num3 = num1 + num2;

    document.getElementById('add_t').innerHTML = 'Addition of ' + num1 + ' + ' + num2 + ' is ' + num3;

}

// substraction of two number
function sub(){
    let num1, num2, num3;
    num1 = 10;
    num2 = 5;
    num3 = num1 - num2;

    document.getElementById('sub_t').innerHTML = 'Substraction of ' + num1 + ' - ' + num2 + ' is ' + num3;

}

// multiplication of two number
function mul(){
    let num1, num2, num3;
    num1 = 10;
    num2 = 5;
    num3 = num1 * num2;

    document.getElementById('mul_t').innerHTML = 'Multiplication of ' + num1 + ' * ' + num2 + ' is ' + num3;

}

// divition of two number
function div(){
    let num1, num2, num3;
    num1 = 10;
    num2 = 5;
    num3 = num1 / num2;

    document.getElementById('div_t').innerHTML = 'Divition of ' + num1 + ' / ' + num2 + ' is ' + num3;

}

// alert
function fAlert(){
    alert('Hello')
}

// my name
const person = {firstName:"Tasif", lastName:"Hossan", age:20, eyeColor:"black"};

function myName(){
    document.getElementById('m_n').innerHTML = 'My Name is ' + person.firstName + " " + person.lastName;
}


// display/hide
function displayText(){

    document.getElementById('text_h').style.display = 'block';
}
function hideText(){

    document.getElementById('text_h').style.display = 'none';
}

// color change
function colorChange(){

    document.getElementById('c_c').style.color = 'blue';
}


// bulb on/off
function bulbOn(){

    document.getElementById('bulb').src ='images/on.gif' ;
}
function bulbOff(){

    document.getElementById('bulb').src ='images/off.gif' ;
}

// show date
function showDate(){

    document.getElementById('s_d').innerHTML = Date();
}

// text change
function textChange(){

    document.getElementById('t_text').innerHTML = 'Fusce viverra sem vel tortor convallis';
}



let num1=7;
let num2=5;
let result = num1 + num2;

function calculation(){
    document.getElementById('value').innerHTML = result;
}