// console.log("-----Welcome in JS-----");
// i = 0; i < 1000; i++;

// console.log(i);



// const counter = document.getElementById("counter");

// let count = 0;
// function incrementValue() {

//     count++;
//     counter.textContent = count;
// }
// const camel = document.getElementById("camel");

// let can = 0;
// function decrementValue() {

//     count--;
//     counter.textContent = count;
// }





// const b = 9;
// try {
//     const a = 5;
// const b = 10;
// console.log("----value of a---- :",a);
//     a = 6;
// co?nsole.log("----value of a---- :",a);

// }catch (error) {
//     console.log("----error---- :",error);
//     console.log("----value of b---- :",b);
// }


// function myPromiseFun(res, rej) {
//     let delay = 100000000;
//     while (delay--);
//     rej ("Hello World")
// }
// const myPromise = new Promise(myPromiseFun);
// console.log(myPromise);


const myPromise = new Promise(solve);
function solve(res, rej) {
    
    // code ...
    let n=100000;
    while(n--);
    res("Hello World");
}
// console.log(myPromise);
// myPromise.then((value) => {
    console.log("------A-----");
    console.log(myPromise);
    console.log("------B-----");


