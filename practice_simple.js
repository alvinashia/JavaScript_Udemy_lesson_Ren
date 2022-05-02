// for(let i=1;i<=9;i++){
//     console.log(i);
// }

// let i=1;
// while(i<=9){
//     console.log(i);
//     i++
// }

// -------------------------------------


// function print(n){
//     for(let i=0;i<n;i++){
//         console.log(i);
//     }
// }

// print(5)

//假設n大於等於10回傳n個星星，假設n小於10則回傳1個星星

// function star(n){
//     if( n < 10)
//         return '*'
//     else{
//         let result=''
//         for(let i=0; i<n;i++){
//             result += "*"
//         } 
//         return result
//     }
// }
// console.log(star(6));
// console.log(star(15));

// function star(n){
//     let result=''
//     for(let i=0; i<n;i++){
//         result += "*"
//     }
//     return result
// }

// console.log(star(6));

function star(n){
    let result=''
    for(let i=0; i<n;i++){
        result += "*"
    }
    console.log(result);
    console.log('---');
    return '******'
}

let result_1=''
result_1=star(6)
console.log(result_1);
console.log('------');
console.log(star(6));

// function isUpperCase(str){
// if(str.length == 0){
//     return false;
// }

// if(str[0] == str[0].toUpperCase()){
//     return true;
// }     else{
//     return false;
// }

// }

// console.log(isUpperCase("abcd"));
// console.log(isUpperCase("Abcd"));


//當想要查詢第一個字母是否為大寫時也可以用以下寫法

// function isAllUpperCase(str){
//     if(str.length == 0){
//         return false
//     }
//     return str[0] == str[0].toUpperCase()
// }

// console.log(isAllUpperCase("aBxx"));
// console.log(isAllUpperCase("ABxx"));



// function findSmallCount(arr, n){
//     let counter = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < n){
//             counter++;
//         }
//         // return counter;
//     }
// }
// console.log(findSmallCount([1, 1, 2, 3, 4], 3));


function findSmallerTotal(arr,n){
    console.log('Get input arr = ', arr, ', n = ', n)
    let total = 0
    for(let i = 0; i<arr.length; i++){
        if(arr[i]<n){
            total += arr[i]
            console.log('total = ',total)
        }
    }
    return total
}

console.log('[1, 2, 3] = ',findSmallerTotal([1, 2, 3], 3));
//console的意思是顯示後面函式的値計算出來的結果

console.log('---');

console.log('[5, 6, 7] = ',findSmallerTotal([5, 6, 7], 3));