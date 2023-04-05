function add(n1, n2, n3) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        throw new Error("inocrrect input!");
    }
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var result = add(number1, number2, printResult);
console.log(result);
