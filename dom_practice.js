// querySelector(); querySelectorAll();

// let secondh1 =document.querySelector('h1.second')
// console.log(secondh1);

// 上面那個是指定選擇 h1 有 second class的去做抓取，querySelector()只會return第一個滿足這個條件的人


// let second =document.querySelectorAll('.second')
// console.log(second.length);

//想要抓取全部就是用querySelectorAll

// ---------------------------------------------------------------------------------

//fucntion declaration

// function sayHi(){
//     console.log('hi!');
// }

// arrow function expression syntax
// let sayHi = (name) =>{
//     console.log('hi!'+ name);
// };

// sayHi("wilson");

//this keyword

// let Wilson = {
//     name:'Wilson ren',
//     greeting(){
//         console.log("Hi,my name is " + this.name +".");
//     }
//     walk:()=>{
//         console.log("Wilson is walking on the street.");
//     }
// }

// Wilson.greeting();
// Wilson.walk();



// let luckyNumber = [12, 22 ,33 ,512, 34]
// console.log(luckyNumber.length);


let luckyNumber =  [12, 22 ,33 ,512, 34];
luckyNumber.forEach(function checkNum(n){
    if(n>20){
        console.log(n);
    }
})

let luckyNumber =  [12, 22 ,33 ,512, 34];
for(let i = 0; i< luckyNumber.length; i++){
    if(luckyNumber[i]>20){
        console.log(luckyNumber[i]);
    }
}

//forEach function takes one parameter-function