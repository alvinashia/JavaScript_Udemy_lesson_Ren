// let Wilson= {
//     name: "Wilson Ren",
//     walk(){
//         console.log('Wilson is walk on the street.');
//     }
// }

// Wilson.walk();

// window.alert('hi~~~I am Wilson')
// window.prompt("安安安你好")


// function sayHi(){
//     console.log('Hi');
// }

// let myInterval = setInterval(sayHi,1500);

// function stop(){
//     clearInterval(myInterval);
// } 

// setInterval(sayHi, 1500);
//1000代表一秒，0.5秒的話就是5000=
// 像是這邊設計是1500就是每1.5秒跑一次的意思


// let Liz ={
//     name:'Liz Wang',
//     talk(){
//         console.log("Wilson is my husband.");
//     }
// }


// let Wilson = {
//     name: "Wilson Ren",
//     spouse: Liz,
//     walk(){
//         console.log("I am walking on the street.");
//     }
// }

// Wilson.spouse.talk()


// 一個物件可以成為另外一個物件的屬性，上面就是Liz成為了 Wilson 的其中一個屬性


// console.log("hi");
// console.error("this is red color.");
// console.warn('warninggggg');

// let body = document.querySelector('body')
// console.log(body.children); //return HTMLCollection
// console.log(body.childNodes);//return NodeList

// let myP = document.querySelector('p.second');
// console.log(myP.parentElement.parentElement);


// let h1 = document.querySelector('h1.myH1');
// h1.innerText = 'My name is Harry';


//e代表 click event
// window.addEventListener('click',e => {
//     console.log(e);
// })

// target,preventDefault
// let h1 = document.querySelector('h1');
// h1.addEventListener('click', e => {
//     console.log(e.target.parentElement);
// })

// let button = document.querySelector('button');
// button.addEventListener('click', e =>{
//     e.preventDefault();
// })

// let button = document.querySelector('button');
// // console.log(button.style);
// // button.style.backgroundColor = 'black'
// // button.style.color = 'white'
// button.style = 'background-color:black; color:white;'


// let a = document.querySelector('div.a')
// let b = document.querySelector('div.b')

// a.addEventListener('click', () => {
//     alert(" a's event listern's callback is running.");
// })

// b.addEventListener('click', e => {
//     e.stopPropagation()
//     alert(" b's event listern's callback is running.");
// })

// console.log(localStorage);
// console.log(sessionStorage);

// localStorage.setItem('name','Wilson')
// //要看到東西必須要log
// console.log(localStorage);

let friends = ['Josh','Mike','Doug']
localStorage.setItem('friends',JSON.stringify(friends))

let myFriends = JSON.parse(localStorage.getItem('friends'));
