// Decision making it is used

//if, ifelse, ifelseif, nestedif

// used to execute a block of statements if specific condition is true

// console.log("Starting program....");
// let num = 20;
// if(num>18){
//     console.log(`Numer is smaller than ${num}`);
// }
// console.log("Working on remaining part....");

// ==== If Else =====
// used to execute a block of statements if specific condition is true and also a block of statements if condition is false

// console.log("Starting program....");
// let num = 20;
// // console.log(num<18);
// if(num<18){
//     console.log(`Numer is smaller than ${num}`);
// }else{
//     console.log("Invalid statement");
// }
// console.log("Working on remaining part....");

// ==== If Else If ====
// multiple conditions can be added to get different. results

// Problem Statement: Find the grade of student by input their marks.

// let stdname = prompt("Enter student name"); 
// let marks = prompt('Enter your marks');

// if(marks>=90 && marks<=100){
//     alert(`${stdname} got A+ Grade`);
// }
// else if(marks>=80 && marks<=90){
//     alert(`${stdname} got A Grade`);
// }
// else if(marks>=70 && marks<=80){
//     alert(`${stdname} got B Grade`);
// }
// else if(marks>=60 && marks<=70){
//     alert(`${stdname} got C Grade`);
// }
// else if(marks>=50 && marks<=60){
//     alert(`${stdname} got D Grade`);
// }
// else if(marks>=40 && marks<=50){
//     alert(`${stdname} got E Grade`);
// }
// else if(marks<40 && marks>=0){
//     alert(`${stdname} Faild!`);
// }else{
//     alert("Invalid Input");
// }


// Problem statement: Find the vowels and constants alphabets in english. 

// let inp = prompt('Enter alphabet: ');

// if(inp=='A'||inp=='a'||inp=='e'||inp=='E'||inp=='i'||inp=='I'||inp=='o'||inp=='O'||inp=='u'||inp=='U'){
//     alert('This alphabet is vowel');
// }else{
//     alert("This alphabet is constant");
// }











// Problem statement: Write a program for bike license issuence. If user's age is greater than 18 or equal to 18 then he is eligible else not eligible for license
// let age = prompt("Enter your age: ");
// if(age>=18){
//     alert("You are eligible for license")
// }else{
//     alert("You are not eligible for license")
// }

// Problem statement: 
// write a program to find odd or even numbers from given user input.
// let numb = prompt("Enter your number: ");
// if(numb%2==0){
//     alert("Number is even");
// }else{
//     alert("Number is Odd");
// }

// Problem statement: 
// write a program to find multiple of 5. If number is multiple of 5 then it is true else false.
// numb = prompt("Enter your number");

// if(numb%5==0){
//     alert("Number is mulltiple of 5");
// }else{
//     alert("Number is not mulltiple of 5");
// }

// Problem statement: 
// write a program to find the leap year.
// let year = prompt("Enter year: ");

// if(year%4==0){
//     alert(`${year} is leap year`);
// }else{
//     alert(`${year} is not a leap year`);
// }



// Write down a program which will take salary of employee from user. if 
// salary is below 50,000 there will be no tax on it but if above 50,000 apply 
// 7% income tax on it and if salary is above 100,000 apply 12% Tax on it 

let salary = parseInt(prompt("Enter employee salary: "));
let tax = 0;
let finalSalary = 0;
if(salary>50000){
    tax = salary * 7/100;
}else if(salary>100000){
    tax = salary * 12/100;
}else{
    tax = 0;
}
finalSalary = salary - tax;
alert(`Final Salary after deducting tax: ${finalSalary}`);



