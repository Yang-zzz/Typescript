// class Person2 {
//     // data = 0; // 필드값, 직접 값을 넣게 되면 자식들은 해당 데이터를 사용할 수 있게 된다.
//     name : string;
//     constructor(a:string) {
//         this.name = a;
//     }

//     함수 () {
//         console.log('안녕' + a);
//     }
// }

// let 사람1 = new Person2('kim');
// let 사람2 = new Person2('park');
// console.log(사람2);

// 숙제1
class Car {
  model: string;
  price: number;
  constructor(a: string, b: number) {
    this.model = a;
    this.price = b;
  }
  tax(): number {
    let result = this.price / 10;
    return result;
  }
}

let car1 = new Car("소나타", 3000);
console.log(car1);
console.log(car1.tax());

// 숙제2
class Word {
  str;
  num;

  constructor(...param: (number | string)[]) {
    let 숫자들: number[] = [];
    let 문자들: string[] = [];

    param.forEach((i) => {
      if (typeof i === "string") {
        문자들.push(i);
      } else {
        숫자들.push(i);
      }
    });
    this.num = 숫자들;
    this.str = 문자들;
  }
}

let obj = new Word("kim", 3, 5, "park");
console.log(obj.num);
console.log(obj.str);
