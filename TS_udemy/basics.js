function add(n1, n2, showResult, phrase) {
    // Part1
    //   if (typeof n1 !== "number" || typeof n2 !== "number") {
    //     throw new Error("inocrrect input!");
    //   }
    // Part2
    var result = n1 + n2;
    if (showResult) {
        // console.log(phrase + result); // 숫자형 값이 담긴 변수 + 문자열 == 문자열 + 숫자형 => Result is : 7.8
        console.log(phrase + n1 + n2); // 문자열 + 숫자형 == 문자열 => Result is : 52.8
    }
    else {
        return n1 + n2;
    }
}
// const number1 = 5;
var number1 = 5; // 명시적으로 작성하였지만 위 add함수에서 param에 타입을 명시하여 중복작성할 필요가 없다.
var number2 = 2.8;
// number2를 let으로 선언하여 이후 number2 값을 재할당 할 수 있기 때문에 number2에게 명시적으로 타입을 지정하지 않아도 number 타입으로 추론이 가능하다.
// number2 = '2.8' // 타입오류를 나타낸다.
var printResult = true;
var resultPhrase = "Result is : ";
add(number1, number2, printResult, resultPhrase);
/**
 * Part1
 * add 함수에 들어오는 매개변수들이 if문을 통하여 매개변수의 타입을 확인하고 boolean값을 통해 Error 메세지를 알린다. 이와 같은 방식은 javascript의 동적인 동작방식을 활용하여 runtime 환경에서 오류를 확인할 수 있다.
 * == Dynamic type
 *
 * TypeScript의 경우에는 개발(코드를 작성하는)과정에서 컴파일하는 과정에 해당 타입의 오류를 띄어 알 수 있도록 도와준다.
 * == Static type
 *
 * */
/**
 * Part2
 * TypeScript 는 명시적으로 해당 변수의 타입을 지정할 수 있으나 변수의 값이 할당되었다면, 해당 값의 타입을 추론할 수 있다.
 *
 * Javascript 는 변수에 할당된 값을 보고 변수의 타입을 추론할 수 있다.
 */
