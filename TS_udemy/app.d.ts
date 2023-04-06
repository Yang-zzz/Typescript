declare const person1: {
    name: string;
    age: number;
};
declare const person2: {
    name: string;
    age: number;
    hobies: string[];
};
/**
 * TypeScript는 person2 객체 안에 있는 hobies key를 배열타입을 추론하였으며,
 * hobies배열 안에 있는 인자들 또한 string 타입을 추론하고 있음. 때문에 문자열에 사용할 수 있는 toUpperCase()가 적용되었으며,
 * map()메서드는 사용할 수 없기 때문에 오류를 띄어주고 있음.
 *
 * */ 
