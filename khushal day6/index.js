// console.log("-----Welcome in JS-----");


// // Variables: var; let; const:
// document.write("Hello World");


// let a = 5;
// console.log(a)
// var b = 5;
// console.log(b)
// const c = 10;
// console.log(c)
// a = 9;
// b = 5;
// // c = 9;
// a = "abc";
// console.log(a);
// if (a === 5) {
//     console.log("hello world im if condition");
// } else {
//     console.log("else condition");
// }
// 9 * 1 = 9
// 9 * 2 = 18
// 9 * 3 = 27
// 9 * 4 = 36
// 9 * 5 = 45
// 9 * 6 = 54
// 9 * 7 = 63
// const userinput = 3;

// for (let i = 1; i < 11; i++) {
//     const tableRow = userinput + " * " + i + " = " + userinput * i;
//     console.log(tableRow);
// }

// const userinput = 5;

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         (i % 5 === 0){
//             console.log("----value-----:", i);
//         }
//     }
// }
//print even numbers 
// for(let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log("-----Even numbers----:", i);
//     }
// }
// for(let i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log("-----Odd numbers----:", i);
//     }
// }
//while loop:
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i = i + 4;

// }
// let i = 0;
// while (i < 1000) {
//     console.log(i);
//     i = i + 2;

// }
// let i = 0;
// while (i < 1000) {
//     if(i % 3 === 0);{
//     console.log(i);
//     i = i + 3;
//     }

// }
// let i = 1000;
// while (i > 0) {
//     console.log(i);
//     i--;
//     }

let ans = 0;
for(let i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            // 
            ans = ans + i;
        }
    }
    console.log(ans);