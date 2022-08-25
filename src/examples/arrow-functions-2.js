// ES5

var helloES5 = function(){
    console.log("hello from es5")
}

// function helloES5(){
//     console.log("hello from es5")
// }

// ES6

// let helloES6 =()=>{
//     console.log("hello from es6")
// }

let helloES6 =()=> console.log("hello from es6");

helloES5();
helloES6();

let multiplyES5 = function(x,y){
    return x*y;
}

let multiplyES6 =(x,y)=>{
    return x*y;
}

// let multiplyES6 =(x,y)=> x*y;


console.log(multiplyES5(3,5)) 
console.log(multiplyES6(3,5)) 

let getProductES5 = function(id,name){
    return {
        id:id,
        name:name,
    }
}

let getProductES6 = (id,name)=> ({
    id:id,
    name:name 
})

console.log(getProductES5(1,"iphonex"))
console.log(getProductES6(1,"iphonex"))

const phones= [
    {name:"iphone 8",price:8000},
    {name:"iphone x",price:6000},
    {name:"iphone xr",price:3000},
    {name:"iphone se",price:1000},
]

let priceES5 = phones.map(function(phone){
    return phone.price;
}) 

let priceES6 = phones.map(phone => phone.price);

console.log(priceES5)
console.log(priceES6)

let filterES5 = phones.filter(function(phone){
    return phone.price>= 5000;
})

let filterES6 = phones.filter(phone => phone.price>=5000);

console.log(filterES5)
console.log(filterES6)