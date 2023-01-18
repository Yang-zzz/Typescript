//숙제1
function test이름1(x) {
    if (x) {
        console.log("안녕하세요" + x);
    }
    else {
    }
    console.log("왜입력안해요");
}
test이름1("양지성");
//숙제2
function count(x) {
    return x.toString().length;
}
count(123);
//숙제3
function 결혼가능하냐(x, y, z) {
    var score = 0;
    score += x;
    if (y === true) {
        score += 500;
    }
    if (z === '상') {
        score += 100;
    }
    if (score >= 600) {
        return '결혼가능';
    }
}
console.log(결혼가능하냐(100, true, '상'));
