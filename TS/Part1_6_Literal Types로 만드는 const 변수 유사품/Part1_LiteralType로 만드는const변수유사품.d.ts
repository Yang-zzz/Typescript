declare let 이름2: "kim";
declare let 접니다: "대머리" | "솔로";
declare function 가위바위보(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[];
type 가바보 = "가위" | "바위" | "보";
type 가바보배열 = ("가위" | "바위" | "보")[];
declare function 가위바위보2(a: 가바보): 가바보배열;
declare const 변수 = "kim";
declare var 자료: {
    readonly name: "kim";
};
declare function 내함수(a: "kim"): void;
