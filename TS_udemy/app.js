var person1 = {
    name: "Maxin",
    age: 30
};
// person1 객체는 타입을 명시적으로 작성한 객체
var person2 = {
    name: "Maxin",
    age: 30,
    hobies: ['sport', 'Cooking'],
};
console.log(person2.name);
// person2 객체는 key의 타입을 추론하였음.
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
