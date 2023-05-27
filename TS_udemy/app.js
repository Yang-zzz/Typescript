var person1 = {
    name: "Maxin",
    age: 30,
};
var person2 = {
    name: "Maxin",
    age: 30,
    hobies: ["sport", "Cooking"],
    role: [2, "author"],
};
console.log(person2.name);
// 타입스크립트 튜플타입 예제
person2.role.push("admin");
person2.role.push(54);
console.log("25번째 줄" + person2.role);
// person2.role[1] = 10;
// person2.role[2] = 10;
/**
 * role key value의 타입은 [number, string] 튜플 타입으로 0번째와 1번째 인덱스에는 각각 해당하는 타입의 데이터만 들어올 수 있다. 하지만 push 메서드를 통해 주입된 데이터는 오류를 띄지 않는다.
 */
// 타입스크립트의 타입추론 기능 예제
for (var _i = 0, _a = person2.hobies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
    console.log(hobby.toUpperCase());
    // console.log(hobby.map())
}
/**
 * TypeScript는 person2 객체 안에 있는 hobies key를 배열타입을 추론하였으며,
 * hobies배열 안에 있는 인자들 또한 string 타입을 추론하고 있음. 때문에 문자열에 사용할 수 있는 toUpperCase()가 적용되었으며,
 * map()메서드는 사용할 수 없기 때문에 오류를 띄어주고 있음.
 *
 * */
