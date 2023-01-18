// let 이름 :string = '양지성';
// let 나이 :number = 30;
// let 본적 :string = '인천';
// let 결혼했니 :null = null;
// let 결혼했니2 :undefined = undefined;
let 회원들: string[] = ["kim", "park"]; // 다른 것도 넣고 싶을 땐 유니온을 사용함
let 회원들2: { member: string; member2: string } = {
  member: "kim",
  member2: "park",
};
let 회원들3 = "park";

let 라이크송: { singer: string; song: string } = {
  singer: "이센스",
  song: "비행",
};

let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};