function 테스트함수4 () :never {
  // throw new Error() 에러를 던지고 함수는 끝나지 않는다.
  while (true) {} 
}

// never type 조건 1. return 값이 없어야함, 2. 앤드포인트가 없어야 함.
// never 는 void 로 대체할 수 있기 때문에 잘 쓰지 않는다. 그런데 써야 하는 이유는 타입코드를 이상하게 짤 경우 나타날 수 있음. (이해만 하면 된다.)

// 등장하는 경우
function 테스트함수5 (parameter :string) {
  if(typeof parameter == 'string') {
    console.log(parameter)
  } else {
    console.log(parameter)
  }
}

// 등장 하는 경우
let 테스트함수6 = function(){
  throw new Error()
}