// testing some little functions here and there.

var test = 3
var test2 = 6

function addTogether(x, y) {
    console.log(x + y)
}

addTogether(test, test2);

function oddOrEven(n) {
    let result;
    if ( n % 2 === 0) {
        result = "Even"
    }

    else {
        result = "Odd"
    }
    return result
}

console.log(oddOrEven(4));

var myArray = [1, 2, 3, 4]

function addToArray(x) {
    myArray.push(x)
    console.log(myArray)
    return myArray
}

addToArray(5);
console.log(myArray);