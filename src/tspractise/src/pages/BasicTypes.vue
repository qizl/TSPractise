<template>
    <div class="note">
        <div>
            <b>输出：</b>
            <p @click="isDone = !isDone" style="cursor: pointer;">boolean: {{ isDone }}</p>
            <p>decLiteral: {{ decLiteral }}</p>
            <p>hexLiteral: {{ hexLiteral }}</p>
            <p>binaryLiteral: {{ binaryLiteral }}</p>
            <p>octalLiteral: {{ octalLiteral }}</p>
            <p>string: {{ name }}</p>
            <p>sentence: {{ sentence }}</p>
            <p>list: {{ list }}</p>
            <p>list: {{ list1 }}</p>
            <p>tuple: {{ tuple }}, item0: {{ tuple[0] }}, item1: {{ tuple[1] }}</p>
            <p>enum: {{ color }}, Colors 0: {{ Colors[0] }}, string value: {{ colorStr }}</p>
            <p>any: {{ notSure }}</p>
        </div>

        <div>
            <b>代码：</b>
            <pre>
import { ref } from &#x27;vue&#x27;

// let isDone: boolean = true;
// let isDone = ref(true)
let isDone = ref&lt;boolean&gt;(true)
let decLiteral: number = 1
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
let name: string = &quot;bob&quot;;
name = &quot;smith&quot;;

let age: number = 37;
let sentence: string = &#x60;Hello, my name is ${name}. I&#x27;ll be ${age + 1} years old next month.&#x60;;

let list: number[] = [1, 2, 3, 4, 5];
let list1: Array&lt;number&gt; = [1, 2, 3, 4, 5];

let tuple: [string, number]
tuple = [&quot;2022&quot;, 1314]
// tuple = [2022, &quot;1314&quot;]

enum Colors { Red, Green, Blue }
let color: Colors = Colors.Red
let colorStr: string = Colors[0]

let notSure: any = 1
notSure = &quot;maybe a string instead&quot;;
notSure = false; // okay, definitely a boolean

let listNotSure: any[] = [1, true, &quot;free&quot;];
listNotSure[1] = 100;

// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

// never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
return error(&quot;Something failed&quot;);
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
while (true) {
}
}

// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
/*
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create(&quot;string&quot;); // Error
create(false); // Error
create(undefined); // Error
*/

// 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。
TypeScript会假设你，程序员，已经进行了必须的检查。
let someValue: any = &quot;this is a string&quot;;
let strLength: number = (&lt;string&gt;someValue).length;

strLength = (someValue as string).length
        </pre>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// let isDone: boolean = true;
// let isDone = ref(true)
let isDone = ref<boolean>(true)
let decLiteral: number = 1
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
let name: string = "bob";
name = "smith";

let age: number = 37;
let sentence: string = `Hello, my name is ${name}. I'll be ${age + 1} years old next month.`;

let list: number[] = [1, 2, 3, 4, 5];
let list1: Array<number> = [1, 2, 3, 4, 5];

let tuple: [string, number]
tuple = ["2022", 1314]
// tuple = [2022, "1314"]

enum Colors { Red, Green, Blue }
let color: Colors = Colors.Red
let colorStr: string = Colors[0]

let notSure: any = 1
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

let listNotSure: any[] = [1, true, "free"];
listNotSure[1] = 100;

// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

// never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
/*
    declare function create(o: object | null): void;

    create({ prop: 0 }); // OK
    create(null); // OK

    create(42); // Error
    create("string"); // Error
    create(false); // Error
    create(undefined); // Error
*/

// 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

strLength = (someValue as string).length
</script>