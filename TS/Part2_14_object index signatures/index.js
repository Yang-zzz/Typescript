// index singnature 쓰면, object 타입지정 한번에 가능
// object 타입 지정 한번에
// [key: string] == 모든 string type 속성
// [key: number] == 모든 number type 속성
var testuser = {
    name: "kim",
    age: "20",
    locarion: "seoul",
    0: "kim",
    1: "20",
    2: "seoul",
};
var css = {
    "font-size": {
        "font-size": {
            "font-size": 14,
        },
    },
};
var testobj = {
    model: "k5",
    brand: "kia",
    price: 6000,
    year: 2030,
    date: "6월",
    percent: "5%",
    dealer: "김차장",
};
var testobj2 = {
    test: 10,
    secondary: {
        "font-size": 12,
        third: {
            "font-size": 14,
        },
    },
};
