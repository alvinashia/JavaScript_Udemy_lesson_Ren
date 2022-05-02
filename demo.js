//題目在這裡~~~
// https://yuhsien.notion.site/JS-Practice-a692c4dc450c476a8a7d9f8fe997deda

//simaple_1--------------------------------------

// function printMany() {
//     for( let i=1; i<=100;i++){

//         console.log(i)
//     }
// ;
// }
// printMany();

//simaple_2---------------------------------------

// function printMany3(){
//     for(let i=1; i<=88;i+=3){
//         console.log(i);
//     }
// }

// printMany3();

// function printMany3(){

//     let i=1;
//     while(i<=88){
//         console.log(i);
//         i+=3
//     }
// }

//simaple_3---------------------------------------

// function star(n){
//     let result = "";
//     for(let i=0; i<n;i++){
//         result += "*";
//     }
//     return result
// }
// console.log(star(5));


//simaple_4---------------------------------------

// function starReturn(n){
//     let result=""
//     for(let i=0; i<n; i++){
//         result += "*"
//     }

//     return result
// }

// console.log(starReturn(4));

//simple_5-----------------------------------------

// function isUpperCase(str){

// if(str.length == 0){
//     return false;
// }

//  if(str[0] == str[0].toUpperCase()){
//         return true;
//  }
//  else{
//      return false;
//  }
// }
// console.log(isUpperCase("ABCD"));
// console.log(isUpperCase("aBCD"));
// console.log(isUpperCase(""));


//simple_6-----------------------------------------

// function isAllUpperCase(str){
// if(str.length == 0){
//     return false
// }
//     let upperCase = true;
//     for( let i=0; i< str.length;i++){
//         if(str[i] != str[i].toUpperCase()){
//             upperCase = false;
//         }
//     }
//             return upperCase;
// }

// console.log(isAllUpperCase("ABCD"));
// console.log(isAllUpperCase(""));
// console.log(isAllUpperCase("ABCDfdgs"));



function position(str){
    let result = [];
    //宣告一個空的陣列叫做result
    let isFound = false;
    //預設是找不到下面判斷式的東西
    for (let i = 0; i<str.length;i++){
        if(str[i] == str[i].toUpperCase()){
            result.push(str[i] + " " +[i]);
            // return str[i] + " " +[i];
            isFound = true;
        }
    }

    return isFound? result : -1;
    //這邊是比較簡化的寫法 如果有找到就是回傳result，沒有找到就是回傳-1

    // if(isFound){    
    //     return result;
    // }
    // else{
    //     return -1; 
    // }  
    //意思是當上面都沒有的話就會return -1
}
console.log(position("AbcD"));
console.log(position("abcd"));


for (let i = 0; i<5;i++){
    console.log(i, 'say hey');
    if(i == 3)
        continue;
    console.log(i,'say hi');
}