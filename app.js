//chapter 21-25
//q1                                        //MUHAMMMAD MANSOOR SABIR 

// var firstname=prompt("enter your first name ")
// var Secondname=prompt("enter your second name ","ali,umair")
// var fullName=firstname+" "+Secondname;
// alert('Welcome '+ fullName)

//q2
// var phone=prompt("enter your favourite phone ")
// var len=phone.length;

// alert("lenght of string is" + "=" + len)

//q3
// var letter="pakistani"
// var ind=letter.indexOf('n')
// alert(ind)                                  //two methods for finding strings

// for(i=0;i<letter.length;i++){
//     if(letter.slice(i,i+1)=='n'){
//         alert(i);
//     }
// }

//q4
// var letter= "hello world"
// var ind = letter.lastIndexOf('l')
// alert(ind)

//q5
// var letter="pakistani"
// var char=letter.charAt(3)
// alert("character at 3 is : "+char)

//q6
// var firstname=prompt("enter your first name ")
// var Secondname=prompt("enter your second name ","ali,umair")
// var fullName=firstname.concat(" "+Secondname)
// alert('Welcome '+ fullName)

//q7
// var letter= "hyderabad"
// var replace=letter.replace('hyder','islam')
// alert(replace)

// for(i=0;i<letter.length;i++){                                            //two methods for replacing 
//     if(letter.slice(i,i+5)=="hyder"){                    
//         letter=letter.slice(0,i)+"islam"+letter.slice(i+5)
//         alert(letter)
//     }
// }

//q8
// var letter="sami and ali are best friends.they play circket and football together"
// var letter=letter.replace(/and/g,"&")               //g for global.
// alert(letter)

//q9
// var str="472"
// var num=parseInt(str)
// document.write("value :" +str+"<br>")
// document.write(" type of : "+typeof str+"<br>")
// document.write("value :" +num+"<br>")
// document.write(" type of : "+typeof num)

//q10
// var letter=prompt("enter dry fruit name");
// var letter=letter.toUpperCase();
// alert(letter)

//q11
// var letter="javascript"
// var l=letter.slice(0,1)
// var f=letter.slice(1)
// l=l.toUpperCase()
// f=f.toLowerCase()
// var lf=l+f;
// alert(lf)

//q12
// var num=36.35;
// var str=num.toString()
// var sr=str.split('.').join('')
// alert(sr)


//q13
// var user=prompt("enter username")
// for(i=0;i<user.length;i++){
//     if(user.charCodeAt(i)==33 || user.charCodeAt(i)==44 || user.charCodeAt(i)==46 || user.charCodeAt(i)==64){
//         alert("enter a valid username")
//         break;
//     }
// }

// 
//q14
// var A=['cake','applepie','cookie','chips','patties']
// var search=prompt("enter the element to search")
//     search=search.toLowerCase();

// for(i=0;i<A.length;i++){
//     if(search===A[i]){
//         document.write(search+" is available at index "+ i +" in bakery")       //case sensitive.
//         var flag="yes";
//     }
// }
// if(flag!="yes"){
//     document.write(search +" is not available")
// }




// //q15
// var pass=prompt("enter your password");
// var flag=0
// var banner=0
// var num=0;
// var chk=0;
// for(i=0;i<pass.length;i++){
//     if(pass.charCodeAt(0)>=48 && pass.charCodeAt(0) <=57){
//         alert("cant begin with a number")
//         chk=12;
//         break;
//     }
//     else if(pass.length<=6){    
//         alert("lenght is small")
//         num=1;
//         break;                                                                           //password validation code
//     }
// }
// for(i=0;i<pass.length;i++){
//     if(pass.charCodeAt(i)>=65 && pass.charCodeAt(i)<=90){
//         flag++;
        
//     }
//     else if(pass.charCodeAt(i)>=97 && pass.charCodeAt(i)<=122){
//         banner++;    
       
//     }
// }
// if((flag==0 || banner==0) && chk==0){
//     alert("your password must include both upper and lower alphabets")
// }
// else if(pass.length>6 && num==0 && chk==0){
//     alert('pass has met the requirement')
// }


//q16
// var university = "University of Karachi";
// university = university.split("");
// university = university.join("<br>");
// document.write(university + "<br>");


// q17
// var input = prompt("Enter a phrase: ");
// document.write("User input: " + input + "<br>");
// document.write("Last character of input: " + input.charAt(input.length - 1) +"<br>");


// q18
// var text = "The quick brown fox jumps over the lazy dog";
// var word = "the";
// var regex = /the/gi;
// var countNum = text.match(regex).length;
// document.write("Text: " + text + "<br>");
// document.write("There are " + countNum + " occurence(s) of word '" + word + "'<br>");


//                          chapter 26-30
//q1 :

// var userNumber = +prompt("Enter your positive number");
// var round = Math.round(userNumber);
// var floor = Math.floor(userNumber);
// var ceil = Math.ceil(userNumber);
// if (userNumber > 0) {
//     document.write("Number "+ userNumber + "<br>" + "round of value " + round + "<br>"+ "floor value of the number "+ floor + "<br>" +"ceil value of the number "+ ceil);
// } else{
// alert("Invalid number ")

// }


 //q2 :
// var userNumber = +prompt("Enter your positive number");
// var round = Math.round(userNumber);
// var floor = Math.floor(userNumber);
// var ceil = Math.ceil(userNumber);
// if (userNumber < 0) {
//     document.write("Number "+ userNumber + "<br>" + "round of value " + round + "<br>"+ "floor value of the number "+ floor + "<br>" +"ceil value of the number "+ ceil);
// } else{
// alert("Invalid number ")

// }

//q3 :
// var num1 = -4 ;
// var num2 = 5;
// var absNum1 = Math.abs(num1);
// var absNum2 = Math.abs(num2);
// document.write("The absolute value of -4 is " + absNum1 + " The absolute value of 5 is " + absNum2);

//q4:
// var randomNumber = (Math.random()*6)  ;
// var ceilNum = Math.ceil(randomNumber);
// var randomNumber1 = (Math.random()*6)  ;
// var ceilNum1 = Math.ceil(randomNumber1);
// document.write("Random device value " + ceilNum + "<br> " +" Random device value " + ceilNum1);

//q5 :
// var head = (Math.random() * 2) + 1;
// var tails = (Math.random()* 2 )+ 1;
// var headfloor = Math.floor(head);
// var tailsfloor = Math.floor(tails);
// document.write(headfloor + " Random coin values Head "+ "<br>");
// document.write(tailsfloor + " Random coin values Tails ");


//q6 :
// var min = 1;
// var max = 100;
// var x= Math.floor(Math.random() *(max-min+1)+min) ;
// document.write("random number between 1 and 100 = "+ x);


//q7 :
//  var weight = prompt("Enter your weight");
//  var convert = parseInt(weight);
//  document.write("The weight of user is " + convert);

//q8 :
// var secretNum = +prompt("Enter the secret number between 1 to 10");
// if (secretNum === 8) {
// alert("Congrautalion your Task is right");
// } else {
//     alert( "Try again ");
// } 


                        //chapters 31-34
//q1
// var date = new Date();
// document.write(date + "<br>");


//q2
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var date = new Date();
// var current_month = months[date.getMonth()];
// document.write("Current month: " + current_month + "<br>");


//q3
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var date = new Date();
// var current_day = days[date.getDay()];
// document.write("Today is " + current_day + "<br>");


//q4
// var date = new Date();
// var current_day = date.getDay();
// if (current_day === 0 || current_day === 6) {
//     document.write("It's Fun day<br>");
// }


// q5
// var date = new Date();
// var day = date.getDate();
// if (day < 15) {
//     document.write("First fifteen days of the month<br>");
// }
// else {
//     document.write("Last days of the month<br>");
// }


//q6
// var date = new Date();
// var miliseconds = date.getTime();
// var minutes = miliseconds / 1000 / 60;
// document.write("Current Date: " + date + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970: " + miliseconds + "<br>");
// document.write("Elapsed minutes since January 1, 1970: " + minutes + "<br>");


//q7
// var date = new Date();
// var hours = date.getHours();
// if (hours < 12) {
//     document.write("It's AM<br>");
// }
// else {
//     document.write("It's PM<br>");
// }


//q8
// var date = new Date("December 31, 2020");
// document.write("Later date: " + date + "<br>");


//q9
// var ramadan_date = new Date("June 18, 2015");
// var ramadan_date = ramadan_date.getTime() / 1000 / 60 / 60 / 24;
// var date = new Date();
// var date_now = date.getTime() / 1000 / 60 / 60 / 24;
// var passed_days = Math.floor(date_now - ramadan_date);
// document.write(passed_days + " days have passed since 1st Ramadan, 2015<br>");


//q10
// var reference_date = new Date("December 05, 2015 22:50:16");
// var date = new Date("January 01, 2015");
// var reference_seconds = reference_date.getTime() / 1000 / 60;
// var date_seconds = date.getTime() / 1000 / 60;
// var total_time = Math.ceil(reference_seconds - date_seconds);
// document.write("On reference date " + reference_date + ",<br>");
// document.write(total_time + " seconds had passed since beginning of 2015<br>");\


//q11
// var date = new Date();
// var hour_ahead = new Date();
// hour_ahead.setHours(hour_ahead.getHours() - 1);
// document.write("current date: " + date + "<br>");
// document.write("1 hour ago, it was " + hour_ahead);


//q12
// var date = new Date();
// var date100 = new Date();
// date100.setFullYear(date100.getFullYear() - 1);
// alert("current date: " + date);
// alert("100 years back, it was " + date100);
// document.write("current date: " + date + "<br>");
// document.write("100 years back, it was " + date100 + "<br>");


//q13
// var age = +prompt("Enter your age: ");
// var date = new Date();
// var dob = date.getFullYear() - age;
// document.write("Your age is " + age + "<br>");
// document.write("Your birth year is " + dob + "<br>");


//q14
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var name = prompt("Enter Your Name: ");
// var date = new Date();
// var month = months[date.getMonth()];
// var units = Math.random() * 1000;
// var charges = Math.random() * 20;
// var bill = units * charges;
// var late = bill * 0.05;
// var late_bill = bill + late;
// document.write("<h1>K-Electric Bill</h1>");
// document.write("Customer Name: " + name + "<br>");
// document.write("Month: " + month + "<br>");
// document.write("Number of units: " + units.toFixed(2) + "<br>");
// document.write("Charges per unit: " + charges.toFixed(2) + "<br>");
// document.write("Net Amount Payable (within Due Date): " + bill.toFixed(2) + "<br>");
// document.write("Late payment surcharge: " + late.toFixed(2) + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + late_bill.toFixed(2) + "<br>");


                                          //chapters 35-38
//q1
// function dateTime () {
//     var date = new Date();
//     document.write(date + "<br>");
// }
// dateTime();


//q2
// function nameGreeter (fname, lname) {
//     document.write("Welcome " + fname + " " + lname + "<br>");
// }
// nameGreeter("Syed Talha", "Askari");


//q3
// function add (num1, num2) {
//     return num1 + num2;
// }
// var num1 = +prompt("Enter First Number: ");
// var num2 = +prompt("Enter Second Number: ");
// var sum = add(num1, num2);
// document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>");


//q4
// function calc (num1, num2, op) {
//     switch(op) {
//         case "+":
//             return num1 + num2;
//         case "-":
//             return num1 - num2;
//         case "*":
//             return num1 * num2;
//         case "/":
//             var div = num1 / num2;
//             return div.toFixed(2);
//         case "%":
//             return num1 % num2;
//         default:
//             return 0;
//     }
// }
// alert("Options:\n +. Addition\n -. Subtraction\n *. Multiplication\n /. Division\n %. Remainder");
// var num1 = +prompt("Enter First Number: ");
// var num2 = +prompt("Enter Second Number: ");
// var op = prompt("Enter Operator: ");
// var ans = calc(num1, num2, op);
// if (ans === 0) {
//     document.write("Invalid<br>");
// }
// else {
//     document.write(num1 + " " + op + " " + num2 + " " + " = " + ans + "<br>");
// }


//q5
// function square(num) {
//     return num * num;
// }
// var num = +prompt("Enter Number: ");
// var sqr = square(num);
// document.write("Square of " + num + " is " + sqr + "<br>");


//q6
// function fact(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     else if (n < 0) {
//         return -1;
//     }
//     else  {
//         return n * fact(n - 1);
//     }
// }
// var n = +prompt("Enter Number: ");
// var f = fact(n);
// if (f === -1) {
//     document.write("Negative Number Factorials are not possible<br>");
// }
// else {
//     document.write("Factorial of " + n + " is " + f + "<br>");
// }


//q7
// function count(start, end) {
//     for (start; start <= end; start++) {
//         document.write(start + "<br>");
//     }
// }
// var start = +prompt("Enter starting number: ");
// var end = +prompt("Enter ending number: ");
// count(start, end);


// q8
// function calculateSquare(num) {
//     return num * num;
// }
// function calculateHypotenuse(base, perpendicular) {
//     return Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular)).toFixed(2);
// }
// var base = +prompt("Enter Base: ");
// var perpendicular = +prompt("Enter Perpendicular: ");
// document.write("Hypotenuse of Base: " + base + " and " + perpendicular + " is " + calculateHypotenuse(base, perpendicular) + "<br>");


//q9
// function area(width, height) {
//     return width * height;
// }
// var height = +prompt("Enter height: ");
// var A = area(43, height);
// document.write("Area of a triangle of width = 43 and height = " + height + " is " + A + "<br>");


//q10
// function palindrome(str) {
//     var revStr = str.split("").reverse().join("");
//     if (str === revStr) {
//         document.write("Given string \"" + str + "\" is a palindrome<br>");
//     }
//     else {
//         document.write("Given string \"" + str + "\" is not a palindrome<br>");
//     }
// }
// var str = prompt("Enter a phrase: ");
// palindrome(str);


//q11
// function title(str) {
//     str = str.split(" ");
//     for (var i = 0; i < str.length; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase();
//     }
//     str = str.join(" ");
//     return str;
// }
// var str = prompt("Enter a phrase: ");
// var title_str = title(str);
// document.write("EXAMPLE STRING : '" + str + "'<br>");
// document.write("EXPECTED OUTPUT : '" + title_str + "'<br>");


//q12
// function wordCount(str) {
//     str = str.split(" ");
//     var lStr = "";
//     for (var i = 0; i < str.length; i++) {
//         if (str[i].length > lStr.length) {
//             lStr = str[i];
//         }
//     }
//     return lStr;
// }
// var str = prompt("Enter a phrase: ");
// var word = wordCount(str);
// document.write("EXAMPLE STRING : '" + str + "'<br>");
// document.write("EXPECTED OUTPUT : '" + word + "'<br>");


//q13
// function letterCount(str, letter) {
//     var count = 0;
//     count = str.match(new RegExp(letter, "g")).length;
//     return count;
// }
// var str = prompt("Enter a phrase: ");
// var letter = prompt("Enter a letter to count: ");
// var count = letterCount(str, letter);
// document.write("Given string: " + str + "<br>");
// document.write("Letter: " + letter + "<br>");
// document.write("Total Occurences: " + count + "<br>");


// q14
// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     document.write("The circumference is " + circumference.toFixed(2) + "<br>");
// }
// function calcArea(radius) {
//     var area = Math.PI * radius * radius;
//     document.write("The area is " + area.toFixed(2) + "<br>");
// }
// var radius = +prompt("Enter radius of circle: ");
// calcCircumference(radius);
// calcArea(radius);