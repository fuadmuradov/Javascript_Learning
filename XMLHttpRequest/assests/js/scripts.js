// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function(){
//     if(this.readyState===4){
//         let request = document.getElementById("request");
//          request.innerHTML = this.response

//     }
// }


// xhr.open("GET", "https://jsonplaceholder.typicode.com/todos")
// xhr.send();

// fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json().then(res=>{
//   //console.log(res);
//     res.forEach((data) => {
//         let card = document.createElement("div");
//         let cardbody = document.createElement("div")
//         let h5 = document.createElement("h5")
//         let h6 = document.createElement("h6")
//         let p = document.createElement("p")
//         card.className = "card col-lg-3"
//        // card.style.width = "18rem"
//         cardbody.className = "card-body"
//         h5.className = "card-title"
//         h6.className = "card-subtitle mb-2 text-muted"
//         p.className = "card-text"
//         h5.innerText = `${data.name}, username: ${data.username}`;
//         h6.innerText = data.email
//         p.innerHTML = `City: ${data.address.city}<br>Street: ${data.address.street}`;

//         cardbody.append(h5,h6,p);
//         card.append(cardbody);
//         document.querySelector(".row").append(card);
//     });



// })
// .catch(err=>{
//     console.log(err)
// })
// )


// let result = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(result)

// const promise = new Promise((resolve, reject) => {
//     // setTimeout(()=>{
//     //     resolve("promise has been succesfully finished")
//     // }, 5000);

//     setTimeout(()=>{
//         reject("promise failed")
//     },5000);
// })

// promise
// .then((res)=>{
//     console.log(res)
// })
// .catch(err=>{
//     console.log(err)
// })

// const p1 = "hey"
// const p2 ="Hello World"
// const p3 = 9876;

// Promise.all([p1,p2,p3])
// .then(promises=>{
//     console.log(promises);
// })
// .catch(err=>{
//     console.log(err);
// })

 async function fetchPosts() {
let result = await fetch("https://jsonplaceholder.typicode.com/posts")
let response = await result.json();
response.forEach((element)=>{
    console.log(element)
})
}