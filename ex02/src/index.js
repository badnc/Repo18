function* myGenerator() {

    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();

}
function* insideGenerator1() {

    for ( var i = 1; i < 6; i++)
    var x = yield i;
    
}
function* insideGenerator2() {

     for ( var i = 10; i < 16; i++)
    var x = yield i;
    
}
function* insideGenerator3() {

     for ( var i = 6; i < 10; i++)
    var x = yield i;

}
var iterator = myGenerator();
var fifteenArray = [];
for (var i = 0; i < 16; i++) {
    var n = iterator.next();
    fifteenArray[i] = n.value + (n.done ? '!' : '#');
}

console.log(fifteenArray.join(', '));  

module.exports = { fifteenArray, myGenerator };