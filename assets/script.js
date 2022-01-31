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

//************************************* */

// Constructor 

// function Person(firstname, surname, age){
//     this.firstname = firstname;
//     this.surname = surname;
//     this.age = age;
//     this.getAge = function(){
//       return this.age;
//     }

//     this.getFullname = function(){
//         return `${this.firstname} ${this.surname}`
//     }
// }


// let person =new Person("Lala", "Guliyeva", 25);

// console.log(person)

// let namee =  person.getFullname()

// console.log(namee)

// let user = {
//     firstname: "Fuad",
//     lastname: "Muradov",
//     age: 22
// }

// console.log(Object.keys(user));
// console.log(Object.values(user));

// Object.defineProperty(user, "groupNo", {value: "F777", Writable: true});

//  let user2 = Object.assign({}, user);
//     let user3 = JSON.parse(JSON.stringify(user));
//     user.firstname = "Orxan"
//     console.log(user2);
//     user3.firstname = "Orxan"
//     console.log(user3);

// console.log(user)
// console.log(user2)

// function Student(groupNo, groupType){
//     this.groupType = groupType;
//     this.groupNo =  groupNo;
// } 

// Student.prototype = new Person()

// let stu = new Student("111", "F");
// stu.firstname = "Fuad"
// // Object.setPrototypeOf(stu, new Person("Fuad", "Muradov", 21));

// let stu2 = new Student("222", "M");
// stu2.firstname = "Murad"
// // Object.setPrototypeOf(stu2, new Person("Oxan", "Qarayev", 22))

// console.log(stu.firstname)
// console.log(stu2.firstname)

// class Person {
//     constructor(firstname, surname, age){
//         this.firstname = firstname;
//         this.surname = surname;
//         this.age = age;
//     }

//     getAge = function(){
//         return this.age;
//     }

//     getFullName = function() {
//         return `${this.firstname} ${this.surname}`
//     }

// }

// let person = new Person("Fuad", "Muradov", 21);

// console.log(person.firstname)
// console.log(person.getAge())
// console.log(person.getFullName())

// class Student extends Person {
//     constructor(firstname, surname, age, groupType, groupNo){
//         super(firstname, surname, age)
//         this.groupNo = groupNo
//         this.groupType = groupType
//     }
// }

// let stu = new Student("Muslum", "Aydinov", 23,"F", "123")

// console.log(stu.getAge())
// console.log(stu.groupType)

//************************************************** */
//Algorithms

// Array.prototype.customArrSort = function(){
//     let isSorted  = false;

//     while(!isSorted){
//             isSorted = true;

//         for (let i = 0; i < this.length; i++) {
//             if(this[i]>this[i+1]){
//                 let next = this[i+1];
//                 this[i+1] = this[i];
//                 this[i] = next;
//                 isSorted = false;
//             }
            
//         }


//     }
//     return this;
// }


// Array.prototype.customArrSort = function(){
// let isSorted = false;

// while(!isSorted){
// isSorted = true;

// for (let i = 0; i < this.length; i++) {
//     if(this[i+1]>this[i]){
//         let next = this[i];
//         this[i] = this[i+1];
//         this[i+1] = next;
//         isSorted = false;

//     }
    
// }

// }

//     return this;
// }
// console.log(arr);
// console.log(arr.customArrSort());

// let arr = [9,5,11,-3,12,1,-1];

//  let checker = function FindNumber(arr2, n){
//  havenumber = false;
//     for (let i = 0; i < arr2.length; i++) {
//         if (arr2[i]==n) {havenumber = true;
//         break;
//         }
//     }

//     return havenumber;
// }


// console.log(checker([6,2,7,2,7,5,9,1], 8))

// let arr3 = function EvenNumbers(array){
//     let arra = [];
//     for (let i = 0; i < array.length; i++) {
//        if(array[i] % 2 == 0) arra.push(array[i]); 
//     }

//     return arra;
// }

// console.log(arr3([1,2,3,4,5,6,7,8,9]));

//  let calculate = function calculator(a, b, cha){
//     switch(cha){
//         case '+':
//             return a+b;
//         case '-':
//             return a-b;
//         case '*':
//             return a*b;
//         case '/': 
//             return a/b;
//             default:
//                 return "i dont calculate what do you want"
//     }

//  }

// console.log(calculate(101,2,'#'));

// let str = "Lorem Ipsum set amer Dolar"
// let str2="";
// for (let i = str.length-1; i >= 0; i--) {
//      str2 += str[i]; 
    
// }

// console.log(str2)
// let myarr = str2.split(" ");
// myarr.forEach(num => {
//     console.log(num);   
// })
// let str3 = ""
// for (let i = myarr.length-1; i >= 0; i--){
//    str3 += myarr[i] + " ";
     
// }

// console.log(str3)


// class Calculator{

//     constructor(a, b, c, d, e){
//      this.a = a;
//     this.b = b;
//     this.c = c; 
//     this.d = d;
//     this.e = e;
//     }


//    plus = function () {
//        this.a += this.b;
//        console.log(this.a)

//    } 

       

//    minus = function () {
//     this.a -= this.c  
//     console.log(this.a)
//   }
//    multiply = function () {
//        this.a *= this.d
//        console.log(this.a)
//    }

//    divide = function () {
//       this.a /= this.e
//       console.log(this.a)
//    }
//    result = function(){
//     this.plus();
//     this.minus();
//     this.multiply();
//     this.divide();
//     return this.a;
// }
// }

// let calculate = new Calculator(50, 6, 30, 3, 2)

// console.log(calculate.result())

//*************** */

// let arr = [1,0,"", "okay", null]
// console.log(arr);



// let object_key = "username"

// let obj =
//  {
// Name: "Fuad",
// Surname: "Muradov",
// Age: 22,
// [object_key]: "mrd",

// getinfo: function(){  
//     return  `${this.Name} ${this.Surname}`
// }


// }

// console.log(object_key);



 //console.log(obj.getinfo());



// console.log(obj.username);

// let anonymtest = function(){
//     console.log("Orxan Qarayev")
// }

// anonymtest();


// let object = {
//     firstname: "Huseyn",
//     lastname: "Bagirov",
//     age: 25
// }

// console.log(Object.keys(object))
// console.log(Object.values(object))
// console.log(Object.entries(object)[0][0])

// Object.defineProperty(object, "groupNo", {value:"F225", writable: false})

// object.groupNo = "P223"

// console.log(object)



//************************************************ */
//Copy Object

// let object2 = object;

//  object2.firstname = "Meherrem"

//  console.log(object)
//  console.log(object2)

// let object2 = Object.assign({}, object)

// object2.firstname = "Meherrem"


//console.log(object2)

// let object3 = {...object}
// console.log(object3);

// let object4 =JSON.parse(JSON.stringify(object))
// console.log(object4.firstname)
//**************************** */
// Prototype(Inheritance)

// function Person(firstname, lastname, age){
// this.firstname = firstname,
// this.lastname = lastname,
// this.age = age
// }

// let person = new Person("Rufet", "Mezemov", 22);


// console.log(person)

// function Student(groupType, groupNo){
//     this.groupType = groupType,
//     this.groupNo = groupNo
// }


//Student.prototype = new Person("Uill", "Smitt", 22);

// let student = new Student("F", "225");

// Object.setPrototypeOf(student, new Person("Uill", "Smitt", 22));

// let student2 = new Student("S","21");

// console.log(student)
// console.log(student2)

//***************************** */

// class Person
// {
// constructor(firstname, lastname, age)
// {
//     this.firstname = firstname,
//     this.lastname = lastname,
//     this.age = age
// }

// getAge = function() {
//     return this.age;
// }

// getFullname = function() {
//     return `${this.firstname} ${this.lastname}`
// }

// }

// class Student extends Person
// {
//     constructor(groupType, groupNo,firstname,lastname, age)
//     {
//         super(firstname, lastname, age),
//         this.groupType = groupType,
//         this.groupNo = groupNo
//     }
// }

// let student = new Student("F","225", "Fuad", "Muradov", 22)

// console.log(student)
// console.log(student.getFullname());


