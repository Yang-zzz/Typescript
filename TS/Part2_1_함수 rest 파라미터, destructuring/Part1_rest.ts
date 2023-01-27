// 레스트 파라미터 기법
function 레스트(...a: number[]) {
  console.log(a);
}

레스트(1, 5, 2, 5);

// 스프레드 오퍼레이트 기법 객채,배열을 분해
let arr = [1, 2, 3];
let arr2 = [4, 3];
let arr3 = [...arr, ...arr2];

//destructuring 기법

let [변수1, 변수2] = ["안녕", 100];

// let {student : student, age : age} = {student: true, age: 20}; // 왼쪽 오른쪽 똑같이 맞춰야 함.
let { student, age } = { student: true, age: 20 }; // 위아래 똑같은거

//ex 객체 안에 있던 자료를 파라미터로 넣고 싶을 때, 함수 파라미터에 distructuring 가능
let 오브젝트 = { student: true, age: 20 };

function 테스트({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}

테스트({ student, age });

// 숙제 1 <- 다시해보기
// function 최댓값() {}
// console.log(최댓값(4,6,3,2));

// 숙제 2 <- 답은 맞지만, 답안과 다르다 다시해보자!
function 숙제함수({
  user,
  comment,
  admin,
}: {
  user: string;
  comment: number[];
  admin: boolean;
}) {
  console.log(user, comment, admin);
}

숙제함수({ user: "kim", comment: [3, 5, 4], admin: false });

// 숙제 3 
type 어레이 = (number | string | boolean)[];

function 숙제함수2([a, b, c]:어레이) {
  console.log(a, b, c);
}

숙제함수2([40, "wine", false]);
