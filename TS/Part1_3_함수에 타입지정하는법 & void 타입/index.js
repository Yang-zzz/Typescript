var 회원 = 123; // 유니온타입 타입2개이상 합친 새로운 타입만들기
회원 = 123;
var test회원들2 = [1, "2", 3];
var test오브젝트 = { a: "123" };
var 이름test; // 타입쉴드 해제
이름test = 123;
이름test = true;
var 이름2test; // 모든 자료유형 허용 any 보다 안전함
이름2test = 123;
이름2test = {};
// 이름2test - 2 // 불가능, 타입 엄격하게 지켜야함.
var test나이;
// test 나이 + 1;
var 나이 = 1;
// test 나이 - 1;
// 숙제
var user = "kim";
var age2 = undefined;
var married = false;
var 철수 = [user, age, married];
// 숙제
var 학교 = {
    score: [100, 97, 84],
    teacher: "phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
