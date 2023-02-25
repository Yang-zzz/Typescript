//방법1
var 제목 = document.querySelector("#title");
if (제목 != null) {
    제목.innerHTML = "반가워요";
}
//방법2
// if(제목 instanceof Element) {
//     제목.innerHTML = '반가워요';
// }
//방법3
var 제목2 = document.querySelector("#title");
제목2.innerHTML = "반가워요";
//방법4
if (제목 === null || 제목 === void 0 ? void 0 : 제목.innerHTML) {
    제목.innerHTML = "반가워요";
} //옵셔널 체이닝
var 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
    링크.href = "https://kakao.com";
}
var 버튼 = document.querySelector("#button");
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener("click", function () { });
var 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
    이미지.src = "new.jpg";
}
//# sourceMappingURL=index.js.map