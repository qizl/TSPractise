<template>
    <div></div>
</template>

<script setup lang="ts">
// 接口初探
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

interface LabelledValue {
    label: string;
}
function printLabel1(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}
let myObj1 = { size: 10, label: "Size 11 Object" };
printLabel1(myObj1);

// 可选属性
interface SquareConfig {
    color?: string;
    width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: "black" });
console.log(JSON.stringify(mySquare));

// 只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!
a = ro as number[];

//  readonly vs const
// 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 做为变量使用的话用 const，若做为属性则使用readonly。

// 额外的属性检查
interface SquareConfig1 {
    color?: string;
    width?: number;
}
function createSquare1(config: SquareConfig1): { color: string; area: number } {
    // ...
    return { color: 'red', area: 100 }
}
// let mySquare1 = createSquare1({ colour: "red", width: 100 });
let mySquare1 = createSquare1({ width: 100, opacity: 0.5 } as SquareConfig1);

interface SquareConfig2 {
    color?: string;
    width?: number;
    [propName: string]: any;
}
function createSquare2(config: SquareConfig2): { color: string; area: number } {
    // ...
    return { color: 'red', area: 100 }
}
let squareOptions = { colour: "red", width: 100 };
let mySquare2 = createSquare2(squareOptions);

// 函数类型
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

let mySearch1: SearchFunc;
mySearch1 = function (src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}

let mySearch2: SearchFunc;
mySearch2 = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
}

// 可索引的类型
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

// 类类型
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) {
        this.currentTime = new Date()
    }
}

</script>