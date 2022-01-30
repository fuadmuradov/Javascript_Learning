// var text = prompt("Enter your name")

// console.log(text)

// '' && console.log("first")
// 5 && console.log("second")
// 5==true || 6 && console.log("third")
// 8 || '' && console.log("fourth")

// function test(a){
//     console.log("fuad deyir ki : " + a)
// }

// test("ha ha aaaaahaa")

// function sum(a=0, b){
//     return a+b
// }

// console.log(sum(1))

// function argNumbers(){
// let argArr = Array.from(arguments)
// return argArr
// }

// console.log(argNumbers(1,2,3,4,5,6,7))

// let arrowfunc = (a, b, c) => {
//     return a+b+c
// }

// console.log(arrowfunc(1,2,3))




//********************************************************* */
//lambda Expression

// let func2 = a => {console.log(a)}

// console.log(func2(12))  
 

// let func5 = age =>({age});
// console.log(func5(15))

//***************************************** */
// Delegate Functions

// function ProcessWithArray(arr, callbackf){
//     let myarray = [];
//     for (let i = 0; i < arr.length; i++) {  
//             myarray.push(callbackf(arr[i]));
   
//     }

//     return myarray;
// }


// function NumberAddWithFive(number){
//     return number + 5;
// }

// function NumberMultipyWithThree(number){
//     return number * 3;
// }

// function NumberDivitedWithNine(number){
//     return number / 9;
// }


// console.log(ProcessWithArray([9, 18, 27, 36, 45], NumberAddWithFive));

// console.log(ProcessWithArray([9, 18, 27, 36, 45], NumberDivitedWithNine));  

// console.log(ProcessWithArray([9, 18, 27, 36, 45], NumberMultipyWithThree));





//********************************* */



// // // console.log(function multiplyadd(a,b,c){
// // //     return a*b*c
// // // }(5,10,3));

// let arr = [1,3,6,7,11,15,23,29];
// console.log(arr);

// arr.forEach((element, index) => {
//     arr[index] = arr[index]*5   
// });

// console.log(arr)

//  let newarr = arr.map((element, index, array) => {
// return array[index] + 5
// });

// console.log(newarr)

// let arrreduce = arr.reduce((total, num) =>{
//  return total += num;
// }, 100);

// console.log(arrreduce)

// let bool = arr.every((element, index, array) => {
//     return element >= 1;
// })
// console.log(bool)

// bool = arr.some((element, index, array) => {
//     return element == 11
// })

// console.log(bool)

// let strarr = ["Fuad", "Murad", "Huseyn", "Orxan", "Nurlan", "Murad", "Tural"];

//console.log(strarr.includes("Murad"));

// console.log(strarr.find(element => {
//     return element == "Tural"
// }));

// let bool1 = strarr.indexOf("Tural");
// console.log(bool1)

// function Arg(){
//     let argarr = Array.from(arguments)
//     return argarr
// }

// console.log(Arg([1,2,3,4,5,6,7,8]))


// let str = " This a javascript class for we use create extraordinary web page"

// console.log(str.substring(12,15))
// console.log(str.substr(12,15))


