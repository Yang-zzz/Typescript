// index singnature 쓰면, object 타입지정 한번에 가능
// object 타입 지정 한번에

interface StringOnly {
  [key: string]: string;
  [key: number]: string;
}

let testuser: StringOnly = {
  name: "kim",
  age: "20",
  locarion: "seoul",

  0: "kim",
  1: "20",
  2: "seoul",
};

// 이런 자료의 타입 지정은 어떻게 하는가?

// interface MyType {
//   "font-size": {
//     "font-size": {
//       "font-size": number;
//     };
//   };
// }

// recursive 하게 타입 만드는법
interface MyType {
  "font-size": MyType | number;
}

let css: MyType = {
  "font-size": {
    "font-size": {
      "font-size": 14,
    },
  },
};

// 숙제1
interface testCar {
  [key: string]: string | number;
}

let testobj: testCar = {
  model: "k5",
  brand: "kia",
  price: 6000,
  year: 2030,
  date: "6월",
  percent: "5%",
  dealer: "김차장",
};

// 숙제2
interface Size {
  "font-size": number;
  [key: string]: number | Size;
}

let testobj2 = {
  "font-size": 10,
  secondary: {
    "font-size": 12,
    third: {
      "font-size": 14,
    },
  },
};
