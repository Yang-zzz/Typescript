// DOM 에서도 '제목' 이라는 변수도 명확하지 않기 때문에 narrowing 해줘야 함.

// '제목' 변수가 null 아닐 때 라는 narrowing 을 사용해서 타입을 명확히 할 수 있기 때문에
// 방법1
let 제목 = document.querySelector("#title");
if (제목 != null) {
  제목.innerHTML = "반가워요";
}

// 방법2
// if(제목 instanceof Element) {
//     제목.innerHTML = '반가워요';
// }
// as로 사기치기

//방법3
let 제목2 = document.querySelector("#title") as Element;
제목2.innerHTML = "반가워요";

// 방법4
if (제목?.innerHTML != undefined) {
  제목.innerHTML = "반가워요";
}
// '제목'이 innerHTML이 있으면 출력 해주고, 없으면 undefined를 나타냄.
// 이를 옵셔널 체이닝 이라고 함.

// 방법5 tsconfig 에서 strickNullCheck 옵션을 주석 처리한다.
let 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
  링크.href = "https://kakao.com";
}
// Narrowing 을 명확히 해야함.

let 버튼 = document.querySelector("#button");
버튼?.addEventListener("click", function () {});

// 숙제1
let 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
  이미지.src = "new.jpg";
}

// 숙제2
let 링크2 = document.querySelectorAll(".naver");
링크2.forEach((a) => {
  if (a instanceof HTMLAnchorElement) {
    a.href = "https://kakao.com";
  }
});
