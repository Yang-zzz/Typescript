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
type Newobj = {
    color: string;
    size: number;
    readonly position: number[];
};
type Result = {
    color: string;
    size: number;
    readonly position: number[];
};
declare let note: Result;
type Check = {
    name: string;
    phone: number;
    email: string;
};
declare const testt: Check;
type Check2 = {
    name: string;
    phone: number;
    email: string;
    adult: boolean;
};
type Adultt = {
    adult: boolean;
};
type Newtype2 = Check2 & Adultt;
declare const testt2: Newtype2;
