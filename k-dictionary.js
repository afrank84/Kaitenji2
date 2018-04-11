
var myObj, x;
var emptyObj = {"kanji":"EmptyValue","name":"chicken","def":["EmptyValue","eats babies"]};



var monkey = {"kanji":"X","name":"monkey"};
myObj = {
    "name": "John",
    "age": 30,
    "cars": ["Ford", "BMW", "Fiat"]
};
x = myObj.name;
document.getElementById("demo").innerHTML = emptyObj.def[1] + monkey.name;

