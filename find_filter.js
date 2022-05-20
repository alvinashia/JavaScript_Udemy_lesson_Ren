const languages = [
    {name:'Python',rating:9.5,popularity:9.7,trending:'super hot'},
    {name:'Java',rating:8.6,popularity:8.2,trending:'same'},
    {name:'Python',rating:6.6,popularity:7.7,trending:'super hot'},
    {name:'Python',rating:2.5,popularity:4.7,trending:'super hot'},
    {name:'Python',rating:8.5,popularity:8.1,trending:'super hot'},
]

let result = languages.filter(lang =>{
    return lang.rating >7.5;
})

console.log(result);