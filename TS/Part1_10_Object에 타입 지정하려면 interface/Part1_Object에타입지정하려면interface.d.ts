interface Square {
    color: string;
    width: number;
}
declare let 네모: {
    color: string;
    width: number;
};
interface Student {
    name: string;
}
interface Student {
    score: number;
}
interface Teacher extends Student {
    age: number;
}
declare let 학생: Student;
declare let 선생: Teacher;
type Animal3 = {
    name: string;
};
type Cat = {
    age: number;
} & Animal3;
interface Gajun {
    brand: string;
    serialNumber: number;
    modal: string[];
}
interface Mart {
    product: string;
    price: number;
}
declare let 장바구니3: MartPlus[];
interface MartPlus extends Mart {
    card: boolean;
}
interface Product {
    brand: string;
    serialNumber: number;
    model: string[];
}
declare let 상품: Product;
interface 상품 {
    product: string;
    price: number;
}
declare let 장바구니: 상품[];
interface 상품2 extends 상품 {
    card: boolean;
}
declare let 장바구니2: 상품2[];
interface 플마 {
    plus: (a: number, b: number) => number;
    minus: (a: number, b: number) => number;
}
declare let 계산기: 플마;
