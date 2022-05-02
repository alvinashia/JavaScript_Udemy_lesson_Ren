// practice 9
//每層都寫個log能比較知道在做什麼

// function findAllSmall(arr,n){
//     let answer=[];
//     for(let i=0; i<arr.length;i++){
//         if(arr[i]<n)
//         answer.push(arr[i]);
//         // console.log('answer:',answer);
//     }
//     return answer;

// }


// console.log(findAllSmall([1, 2, 3], 10));
// console.log(findAllSmall([1, 2, 3], 2));
// console.log(findAllSmall([1, 3, 5, 4, 2], 4));


// function sum(arr){
//     let total = 0;
//     for(let i = 0; i<arr.length; i++){
//         total += arr[i]
//     }
//     return total;
// }


// console.log(sum([1, 2, 3]));
// console.log(sum([-1, 1, 2, -2, 3, -3]));
// console.log(sum([]));
// console.log(sum([-10, -20, -30]));

//LV2--------------------------------------------------------------

// function stars(n){
//     for(let i = 1; i <= n; i++){
//         let line = "";
//         console.log('try',line);
//         for(let j = 0; j <i; j++){
//             line +="*"
//         }
//         //J的執行次數會由i決定，如果i=1，則這個for loop就會執行一次，如果是4次就會加4顆星星到empty line中
//         console.log(line);
//     }

// }

// stars(1);
// stars(4);

// function makeStars(n){
//     let result="*"
//     for(let i = 2; i <= n; i++){
//         let s = '\n';
//         for(let j = 0; j < i ;j++){
//             s +="*"
//         }
//         result += s;
//     }
//     console.log(result);
// }
// makeStars(5)


function stars2(n){
    console.log("Increasing...");
    for(let i = 1; i <= n; i++){
        // console.log("i = ", i);
        let line = "";
        for(let j = 0; j < i; j++){
            // console.log("j = ", j);
            line += "*";
        }
        console.log(line);
    }

    console.log("Decreasing...");
    for(let i = n - 1 ; i > 0; i--){
        let line = "";
        console.log('---');
        for(let j = 0; j < i; j++){
            line += "*";
            console.log('line = ', line);
        }
        console.log('---');
        console.log('Finally, line = ', line);
    }
}

console.log("Execute starts");
stars2(5);

//i限制了j的高度，所以每次J回傳的値的次數,會隨著i的數字減少而跟著減少
//最後顯示的結果只會是j最後跑完所有次數的結果（雖然前面有跑1234，但最後只有4會被print出來）