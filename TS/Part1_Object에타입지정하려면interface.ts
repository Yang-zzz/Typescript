interface Square {
  color: string;
  width: number;
}
// interface는 type 키워드와는 조금 다름. type은 중복선언 x

let 네모 = { color: "red", width: 100 }; // 타입 지정 알아서 된다.

interface Student {
  name: string;
}
interface Student {
  score: number;
}
// 인터페이스는 중복선언이 가능함.

interface Teacher extends Student {
  age: number;
}

let 학생: Student = { name: "kim", score: 10 };
let 선생: Teacher = { name: "kim", age: 20, score: 10 };
// 인터페이스를 쓸때 장점 : extends로 복사 가능!

type Animal3 = { name: string };
type Cat = { age: number } & Animal3;
//타입 에일리어스로 가능 // & 은 복사의 뜻은 아니고 두 타입 전부 만족하는 타입이라는 뜻

//숙제1
interface 기기 {
  brand: string;
  serialNumber: number;
  model: string[];
}
let 상품: 기기 = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

//숙제2
interface 상품 {
  product: string;
  price: number;
}

// let 장바구니: 상품[] = [
//   { product: "청소기", price: 7000 },
//   { product: "삼다수", price: 800 },
// ];

// 숙제3
interface 상품2 extends 상품 {
  card: boolean;
}

let 장바구니: 상품2[] = [
  { product: "청소기", price: 7000, card: false },
  { product: "삼다수", price: 800, card: false },
];


// 숙제4
interface 계산기 {
  plus : (a:number, b: number) => number,
  minus : (a:number, b: number) => number
}
