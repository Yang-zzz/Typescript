var 회원 = 123; // 유니온타입 타입2개이상 합친 새로운 타입만들기
회원 = 123;
var 회원들2 = [1, "2", 3];
var 오브젝트 = { a: "123" };
var 이름; // 타입쉴드 해제
이름 = 123;
이름 = true;
var 이름2; // 모든 자료유형 허용 any 보다 안전함
이름2 = 123;
// 이름2 = {};
// 이름2 - 2 // 불가능, 타입 엄격하게 지켜야함.
// let 나이 :string | number;
// 나이 + 1;
// let 나이 :unknown = 1;
// 나이 - 1;
//숙제
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
//숙제
var 학교 = {
    score: [100, 97, 84],
    teacher: "phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
