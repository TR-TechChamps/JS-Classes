// Events: 

// let button = document.getElementById("sbtn");

// console.log(button);

function subfun(){
    let uname = document.getElementById("uname");
    alert(uname.value);
}

const sbtn = document.getElementById("sbtn");
// button.addEventListener("click",subfun)


// buttonnext.addEventListener('click',subfun);



const box= document.getElementById("box");

box.addEventListener("mousemove",function(){
    box.style.backgroundColor = "red";
})
box.addEventListener("mousedown",function(){
    box.style.backgroundColor = "yellow";
})


uname.addEventListener("keydown",function(event){
    console.log(event.target.value);
    box.style.backgroundColor = event.target.value;
})


const uform = document.getElementById("uform");
uform.addEventListener("submit",function(event){
    event.preventDefault();
    

    console.log("Form is submitting");
})