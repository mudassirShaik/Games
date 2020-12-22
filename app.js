var displayMsg = function (){
    console.log('Hello');
}

var calcSqure = function(number){
    return number*number;
}
var mkDouble = function(n){
    return n*2;
}
console.log(calcSqure(3));
console.log(mkDouble(calcSqure(3)));

var cal_sqr = require('./squre')
cal_sqr(552);
