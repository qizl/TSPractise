<template>
    <div></div>
</template>
<script setup lang="ts">
// 为函数定义类型
function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function (x: number, y: number): number { return x + y; };
console.log(add(12, 23))
console.log(myAdd(12, 23))

// 书写完整函数类型
let myAdd1: (x: number, y: number) => number = function (x: number, y: number): number { return x + y; };
console.log(myAdd1(12, 34))

// 可选参数和默认参数
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");  // works correctly now
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");  // ah, just right

function buildName1(firstName: string, lastName = "Smith") {
    // ...
}

// 剩余参数
function buildName2(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName)

// 重载
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: { suit: string; card: number; }[]): number;
function pickCard(x: number): { suit: string; card: number; };
function pickCard(x: any): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
</script>