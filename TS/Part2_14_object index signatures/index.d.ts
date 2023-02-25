interface StringOnly {
    [key: string]: string;
    [key: number]: string;
}
declare let testuser: StringOnly;
interface MyType {
    "font-size": MyType | number;
}
declare let css: MyType;
interface testCar {
    [key: string]: string | number;
}
declare let testobj: testCar;
interface Size {
    "font-size": number;
    [key: string]: number | Size;
}
declare let testobj2: {
    "font-size": number;
    secondary: {
        "font-size": number;
        third: {
            "font-size": number;
        };
    };
};
