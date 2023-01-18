let 회원: number | string = 123; // 유니온타입 타입2개이상 합친 새로운 타입만들기
회원 = 123;

let test회원들2: (number | string)[] = [1, "2", 3];
let test오브젝트: { a: number | string } = { a: "123" };

let 이름test: any; // 타입쉴드 해제
이름test = 123;
이름test = true;

let 이름2test: unknown; // 모든 자료유형 허용 any 보다 안전함
이름2test = 123;
이름2test = {};
// 이름2test - 2 // 불가능, 타입 엄격하게 지켜야함.

let test나이 :string | number;
// test 나이 + 1;

let 나이 :unknown = 1;
// test 나이 - 1;

// 숙제
let user: string = "kim";
let age2: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | (undefined | number) | boolean)[] = [user, age, married];

// 숙제
let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];