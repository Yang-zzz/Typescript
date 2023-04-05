function add(n1: number, n2: number, n3: boolean) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("inocrrect input!");
  }
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;

const result2 = add(number1, number2, printResult);
console.log(result2);


/**
 * Part1 
 * add 함수에 들어오는 매개변수들이 if문을 통하여 매개변수의 타입을 확인하고 boolean값을 통해 Error 메세지를 알린다. 이와 같은 방식은 javascript의 동적인 동작방식을 활용하여 runtime 환경에서 오류를 확인할 수 있다.
 * == Dynamic type
 * 
 * TypeScript의 경우에는 개발(코드를 작성하는)과정에서 컴파일하는 과정에 해당 타입의 오류를 띄어 알 수 있도록 도와준다.
 * == Static type
 * 
 * */ 

