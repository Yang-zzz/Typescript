export type 이름테스트 = string;

//typeScript 타입변수 숨기는 문법 Namespace
namespace 네임스페이스 {
  export type Name = string | number;
}

namespace 네임스페이스2 {
  export type Name = string | number;
}
// 타입이름이 (Name) 중복되어도 사용가능하다.

//숨겨두었기 때문에 아래와 같이 접근해야 한다.
let 테스트변수: 네임스페이스.Name;

// 숙제1
export type Car숙제 = {
  Wheel: number;
  modal: string;
};

export interface Bike숙제 {
  Wheel: 2;
  modal: string;
}

// 숙제2
export type ObjFunction = (a?: object) => void;

// 숙제3
namespace DogString {
  export type Dog = string;
}
namespace DogObj {
  export interface Dog { name: string };
}

let dog1: DogString.Dog = "강아지";
let dog2: DogObj.Dog = { name: "아무거나" };
