declare function 함수테스트(a: unknown[]): unknown;
declare let a: unknown;
declare function 함수테스트2<MyType>(a: MyType[]): MyType;
declare let a2: number;
declare let b: string;
declare function 함수테스트3<MyType extends number>(x: MyType): number;
declare let a3: number;
interface LengthCheck {
    length: number;
}
declare function 함수테스트4<MyType extends LengthCheck>(x: MyType): number;
declare let a4: number;
