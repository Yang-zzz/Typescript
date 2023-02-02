type Animal = string | number | undefined;
declare let 동물: Animal;
type Animal2 = {
    name: string;
    age: number;
};
declare let 동물2: Animal2;
type Girfriend = {
    readonly name: string;
};
declare const 여친: Girfriend;
type Name = string;
type Age = number;
type Person = Name | Age;
type PositionX = {
    x: number;
};
type Positiony = {
    y: number;
};
type NewType = PositionX & Positiony;
declare let position: NewType;
type Number1 = string | number;
type Number2 = string | number;
type NewNumber = Number1 & Number2;
type Result = {
    color: string;
    size: number;
    readonly position: number[];
};
declare let note: Result;
