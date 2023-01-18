// interface는 type 키워드와는 조금 다름. type은 중복선언 불가능, 인터페이스 중복선언 가능
var 네모 = { color: "red", width: 100 }; // 타입 지정 알아서 된다.
var 학생 = { name: "kim", score: 10 };
var 선생 = { name: "kim", age: 20, score: 10 };
var 상품 = {
    brand: "Samsung",
    serialNumber: 1360,
    model: ["TV", "phone"],
};
var 장바구니 = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
];
var 장바구니2 = [
    { product: "청소기", price: 7000, card: false },
    { product: "삼다수", price: 800, card: false },
];
var 계산기 = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    }
};
