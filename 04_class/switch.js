// write down a program which will take input from user from three choice rock, paper & Scissor... make win or loss based on game scenerio

// let arr = ["rock", "paper", "scissor"];

// let computer = arr[Math.floor(Math.random() * arr.length)];

// console.log(computer);


//==== nested If =====

// Check number if positive and after it check it is even or odd

let num = prompt('enter your number');
if(num>0){
    if(num%2==0){
        alert('number is positive & Even');
    }else{
        alert('number is positive but Odd');
    }
}else{
    alert('number is not positive or zero');
}