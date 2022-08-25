"use strict";

// ES5
var helloES5 = function helloES5() {
  console.log("hello from es5");
}; // function helloES5(){
//     console.log("hello from es5")
// }
// ES6
// let helloES6 =()=>{
//     console.log("hello from es6")
// }


var helloES6 = function helloES6() {
  return console.log("hello from es6");
};

helloES5();
helloES6();

var multiplyES5 = function multiplyES5(x, y) {
  return x * y;
};

var multiplyES6 = function multiplyES6(x, y) {
  return x * y;
}; // let multiplyES6 =(x,y)=> x*y;


console.log(multiplyES5(3, 5));
console.log(multiplyES6(3, 5));

var getProductES5 = function getProductES5(id, name) {
  return {
    id: id,
    name: name
  };
};

var getProductES6 = function getProductES6(id, name) {
  return {
    id: id,
    name: name
  };
};

console.log(getProductES5(1, "iphonex"));
console.log(getProductES6(1, "iphonex"));
var phones = [{
  name: "iphone 8",
  price: 8000
}, {
  name: "iphone x",
  price: 6000
}, {
  name: "iphone xr",
  price: 3000
}, {
  name: "iphone se",
  price: 1000
}];
var priceES5 = phones.map(function (phone) {
  return phone.price;
});
var priceES6 = phones.map(function (phone) {
  return phone.price;
});
console.log(priceES5);
console.log(priceES6);
var filterES5 = phones.filter(function (phone) {
  return phone.price >= 5000;
});
var filterES6 = phones.filter(function (phone) {
  return phone.price >= 5000;
});
console.log(filterES5);
console.log(filterES6);
