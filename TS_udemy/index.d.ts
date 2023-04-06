declare function add(n1: number, n2: number, showResult: boolean, phrase: string): number | undefined;
declare const number1 = 5;
declare const number2 = 2.8;
declare const printResult = true;
declare const resultPhrase = "Result is : ";
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
 * TypeScript 는 명시적으로 해당 변수의 타입을 지정할 수 있다.
 * Javascript 는 변수에 할당된 값을 보고 변수의 타입을 추론할 수 있다.
 */
