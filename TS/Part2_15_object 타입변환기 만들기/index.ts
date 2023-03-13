let obj1 = { name: "kim", age: 20 };
Object.keys(obj1);

// 파라미터로 들어가는 객체의 키값을 array 로 묶어줌. ->  ['name','age']
// 위와 유사한 연산자 keyof

interface Person2 {
  age: number;
  name: string;
}

// Person2 객체가 가지고 있는 키값을 가져와 유니온타입을 생성함. -> 'age' | 'name'
type PersonKeys = keyof Person2;
let aa: PersonKeys = "age";

// index signature
interface Person3 {
  [key: string]: number;
}

type PersonKeys2 = keyof Person3;

// 나아가기 : 타입을 전부 string 바꾸고 싶을때..
type testCar2 = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};

type TypeChanger<MyType> = {
  [key in keyof MyType]: string;
};

type 새로운타입 = TypeChanger<testCar2>;
