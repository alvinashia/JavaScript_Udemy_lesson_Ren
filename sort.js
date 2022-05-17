// let fruits = ['Grapes','Apple','Banana'];
// fruits.sort();
// console.log(fruits);

// let luckies = [15,1,2,16,99,17,3]
// console.log(luckies.sort());

// let luckies = [15,1,2,16,99,17,3]
// luckies.sort((a,b)=> {
// return a-b;
// })

// console.log(luckies)

let fruits = ['Grapes','Apple','watermelon'];
fruits.sort((a,b) => {
    return  a.length - b.length; 
});

console.log(fruits);