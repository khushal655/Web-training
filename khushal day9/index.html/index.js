// // console.log("-----Welcome in JS-----");
// // function reverseNumber(num) {
// //     const reversedNum = parseInt(num.toString().split('').reverse().join(''), 10);
    
// //     return reversedNum;
// // }
// // const number = 54;
// // const reversed = reverseNumber(number);
// // console.log(reversed); 
// const data = [
//     {
//        "image": {
//             "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
//             "mobile": "./assets/images/image-waffle-mobile.jpg",
//             "tablet": "./assets/images/image-waffle-tablet.jpg",
//             "desktop": "./assets/images/image-waffle-desktop.jpg"
//        },
//        "name": "Waffle with Berries",
//        "category": "Waffle",
//        "price": 6.50
//     },
//     {
//         "image": {
//             "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
//             "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
//             "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
//             "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
//         },
//         "name": "Vanilla Bean Crème Brûlée",
//         "category": "Crème Brûlée",
//         "price": 7.00
//      },
//      {
//         "image": {
//             "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
//             "mobile": "./assets/images/image-macaron-mobile.jpg",
//             "tablet": "./assets/images/image-macaron-tablet.jpg",
//             "desktop": "./assets/images/image-macaron-desktop.jpg"
//         },
//         "name": "Macaron Mix of Five",
//         "category": "Macaron",
//         "price": 8.00
//      },
//      {
//         "image": {
//             "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
//             "mobile": "./assets/images/image-tiramisu-mobile.jpg",
//             "tablet": "./assets/images/image-tiramisu-tablet.jpg",
//             "desktop": "./assets/images/image-tiramisu-desktop.jpg"
//         },
//         "name": "Classic Tiramisu",
//         "category": "Tiramisu",
//         "price": 5.50
//      },
//      {
//         "image": {
//             "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
//             "mobile": "./assets/images/image-baklava-mobile.jpg",
//             "tablet": "./assets/images/image-baklava-tablet.jpg",
//             "desktop": "./assets/images/image-baklava-desktop.jpg"
//         },
//         "name": "Pistachio Baklava",
//         "category": "Baklava",
//         "price": 4.00
//      },
//      {
//         "image": {
//             "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
//             "mobile": "./assets/images/image-meringue-mobile.jpg",
//             "tablet": "./assets/images/image-meringue-tablet.jpg",
//             "desktop": "./assets/images/image-meringue-desktop.jpg"
//         },
//         "name": "Lemon Meringue Pie",
//         "category": "Pie",
//         "price": 5.00
//      },
//      {
//         "image": {
//             "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
//             "mobile": "./assets/images/image-cake-mobile.jpg",
//             "tablet": "./assets/images/image-cake-tablet.jpg",
//             "desktop": "./assets/images/image-cake-desktop.jpg"
//         },
//         "name": "Red Velvet Cake",
//         "category": "Cake",
//         "price": 4.50
//      },
//      {
//         "image": {
//             "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
//             "mobile": "./assets/images/image-brownie-mobile.jpg",
//             "tablet": "./assets/images/image-brownie-tablet.jpg",
//             "desktop": "./assets/images/image-brownie-desktop.jpg"
//         },
//         "name": "Salted Caramel Brownie",
//         "category": "Brownie",
//         "price": 4.50
//      },
//      {
//         "image": {
//             "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
//             "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
//             "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
//             "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
//         },
//         "name": "Vanilla Panna Cotta",
//         "category": "Panna Cotta",
//         "price": 6.50
//      }
// ];

// // const name1 = data[0].name;
// // console.log("name", name1);

// // const name2 = data[0].category;
// // console.log("category", name2);

// // const name3 = data[0].price;
// // console.log("price", name3);

// const ele = document.getElementById("container")
// console.log(ele)

// for(let i = 0; i < data.length; i++) {
//     const name1 = data[i].name;
//     const category = data[i].category;
//     const price = data[i].price;

//      const htmlData = <div class name {
        
//      }
    

//     ele.innerHTML += `<h1>${name1}</h1>`
//     ele.innerHTML += `<h4>${category}</h4>`
//     ele.innerHTML += `<h4>${price}</h4>`
// }
// // for(let i = 0; i < data.length; i++) {
// //     const name2 = data[i].category;
// // console.log(name2);
// // }
// // for(let i = 0; i < data.length; i++) {
// //     const name3 = data[i].price;
// // console.log(name3);
// // }


// named functions

function sum(a, b) {
    const sum = a + b;
    return sum;
}
const sumOfNo = sum(5, 8);
const sumOfNo2 = sum(99, 45);
console.log(sumOfNo, sumOfNo2);

// arrow function:

const sub(a, b) {
    const sub = a - b;
    
}


(function () {
    console.log("Hello Beta")
}) ();