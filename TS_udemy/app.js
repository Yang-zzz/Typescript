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
// person2.role[0] = 10 // o
// person2.role[1] = 'YangZ' // o
// person2.role[1] = 10; // x
// person2.role[2] = 10; // x
/**
 * person2.role key value의 타입은 [number, string] tupple type으로 길이가 2이며 0번째와 1번째 인덱스에는 number, string 데이터만 적용될 수 있다.
 * 하지만 push 메서드를 통해 주입된 'admin'과 54는 적용 가능하다. tupple type에 벗어나지 않았기 때문에 예외적으로 가능하다.
 * 18,19 Lines 처럼 role key value에 직접 접근하여 데이터를 조작을 시도 하였으나, tupple type에 벗어난다는 typeScrip의 에러를 받을 수 있었다.
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
