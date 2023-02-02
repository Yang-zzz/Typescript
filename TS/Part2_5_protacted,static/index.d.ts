declare class TestUser {
    protected x: number;
}
declare class NewUser extends TestUser {
    doThis(): void;
}
declare class TestUser2 {
    static x: number;
    y: number;
}
declare let 테스트자식: TestUser2;
declare class TestUser3 {
    static skill: string;
    intro: string;
}
declare let 테스트철수: TestUser3;
declare class 숙제User {
    private static x;
    static y: number;
    protected z: number;
}
declare class 숙제User2 {
    private static x;
    static y: number;
    static addOne(a: number): void;
    static printX(): void;
}
declare class Square {
    width: number;
    height: number;
    color: string;
    constructor(width: number, height: number, color: string);
    draw(): void;
}
declare let test네모: Square;
