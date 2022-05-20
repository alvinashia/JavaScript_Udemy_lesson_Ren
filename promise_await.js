function getData(name){
    if(name == 'Wilson'){
        return new Promise((resolve,reject) => {
            setTimeout(() =>{
          resolve({name:'Wilson Ren', age:Math.floor(Math.random() * 30) });
            }, 2000);
            });
        } else{
            return new Promise((resolve,reject) => {
            setTimeout(() => {
                    reject(new Error('Not allowed to acccess data.'));
                },2000);
            });
        }
    }  

    function getMovies(age) {
    if( age < 12){
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
            resolve({text: "cartoon"});
        },1500);
    });
    } else if(age < 18){
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
            resolve({text: "teen movies"});
        },1500);
    });
    } else {
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                reject(new Error("not allowed. Too old."));
            },1500);
        })
        }
    }
    
    getData("Wilson")
    .then((obj) =>{
        console.log(obj);
        return getMovies(obj.age);
    }).then((meg) =>{
        console.log(meg.text)
    })
    .catch((e) => {
        console.log(e)
    });

    //async await try catch

    async function showMovie(){
        try{
            const obj = await getData("Wilson");
            //要等到獲得data(wilson)，才會把結果放在obj裡面，然後才能夠把結果放在getmovie之中
            const movie = await getMovies(obj.age);
            console.log(movie.text);
        } catch (e){
            console.log(e);
        }
    }

    showMovie();