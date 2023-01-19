function 테스트함수(a: string | undefined) {
  if (a && typeof a === "string") {
  }
}

// a 가 언디파인드면 실행x, string 이면 실행

type Fish = { swim: string };
type Bird = { fly: string };

function 테스트함수2(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim;
  }
}

// test오브젝트2 instanceof 부모class

//예제
let 날짜 = new Date();
if (날짜 instanceof Date) {
}

// 예제
type Car2 = {
  wheel: "4개";
  color: string;
};
type Bike = {
  wheel: "2개";
  color: string;
};

function 테스트함수3(x: Car2 | Bike) {
  if (x.wheel === "4개") {
    console.log(x.color);
  } else {
    console.log(x.color);
  }
}
