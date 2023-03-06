var BoongCar = /** @class */ (function () {
    function BoongCar(a) {
        this.price = 1000;
        this.model = a;
    }
    return BoongCar;
}());
var 붕붕이 = new BoongCar("morning");
// BoongCar class 로 부터 생선된 객체(object)가 model과 price 속성을 가지고 있는지 타입으로 확인하기 위해선 interface + implement 키워드를 사용해야 한다.
// BoongCar class 는 CarTpye interface 속성을 가지고 있나? 라는 뜻과 같다.
// implements 는 타입지정문법이 아니다. 잊지말자! 체크용도!
