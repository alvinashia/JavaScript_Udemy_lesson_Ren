function checkBiggest(...numbers){
    // console.log(numbers);
    let biggest = -Infinity;
    //變數等於負的無限大，初始值
    for(let i = 0 ; i < numbers.length; i++){
        if(numbers[i] > biggest ){
            biggest  = numbers[i];
            // console.log(biggest);
        }
        
        
    }
    return  biggest;
}
    console.log(checkBiggest(-2,100,6,7,10,15));

console.log(Math.max(-2,6,3,1,17,100,65))