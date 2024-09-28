// let input = document.querySelector('input');
// let btn = document.querySelector('button');
// let list = document.getElementById('list');

// function fetchData(searchText) {
//   axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
//   .then(function(response) {
//     manipulateDOM(response.data);
//   })
// }

// function manipulateDOM(data) {
//   while(list.firstChild) {
//     // list.firstChild.remove();
//   }

//   for (let d of data) {
//     if (d.show.image) {
//       let img = document.createElement('img');
//       img.setAttribute('src', d.show.image.original);
//       list.appendChild(img);
//     }  
//   }
// }

// btn.addEventListener('click', function() {
//   let searchText = input.value;
//   let data = fetchData(searchText);
// })



// document.querySelector('h1').style.color='red'

// console.log($);

// document.querySelector('h1').innerText
// $('h1').css({
//     color:"red",
//     // backgroundColor:"gold"
    
// })
// console.log($('h1').text('hiiiii'));

//  let inp= document.querySelector('input')


// console.log($('input').attr('type','number'));
// console.log($('input').attr('type'));



// $('button').click(()=>{
    // console.log('hehehe');
    // $('h1').fadeToggle()
    // $('h1').animate({left:"250px"})

// })
//  inp.getAttribute('type')

// console.log($('#h1'));
// spread operators

// let arr=[1,2,3,4,5,56]
// console.log(num.concat(arr));
// let num=[4,5,3,4,24,3,...arr]
// let obj={
//     id:2,
//     lastName:'hello'
// }
// let std={
//     id:1,
//     name:'hehehe',
//     ...obj
// }
// console.log(num,'hehehe');

// function sum(a,b,...num){
//     console.log(num,"hjeheh");

// }

// sum(5,5,5,5,7,3,56,3,45,6)


// let a=5
// let arr=[hehe]+5
// let arr=[1,2,3,4,54,6,7,8,895,7]
// let [a,b,c,s,f,e]=arr

// console.log(a);


// let obj={
//     id:1,
//     name:'hey'
    
// }
// obj.id
// console.log(obj.id);
// let {id,name}=obj
// by de export
// import {sum,user} from './home.js'
// // console.log(sum(5,5,),user,"hehe");
// sum(6,5)


// function outer(){
//     let user='hello'
//     function inner(){
//         console.log(user);
//     }
//     // inner()
//     return inner
// }
// let a=  outer()
// a()




// console.log('hello');
// let str = "HelloWorld!";
// console.log(str.indexOf("World")); // Output: 5
// console.log(str.indexOf("h")); // Output: -1
// let str = "Hello, World!";
// console.log(str.includes("World")); // Output: true
// console.log(str.includes("world")); // Output: false
// // Extracts a part of a string and returns it as a new string without modifying the original string.
// let str = "Hello, World!";
// console.log(str.slice(0, 5)); // Output: "Hello"
// // console.log(str.slice(7));    // Output: "World!"
// let str = "Hello, World!";
// let newStr = str.replace("World", "Universe");
// console.log(newStr); // Output: "Hello, Universe!"



// let str = "   Hello, World!   ";
// console.log(str.trim()); // Output: "Hello, World!"

// let str = "The rain in SPAIN stays mainly in the plain";
// let result = str.match(/ain/g);
// console.log(result); // Output: ["ain", "ain", "ain"]
// let str = "Hello!";
// console.log(str.repeat(3)); // Output: "Hello!Hello!Hello!"




// let obj={
//     id:1,
//     name:'hello'
// }
// console.log(obj.toString());


// let arr=[1,3,4,5,6]
// let str='hello'

// localStorage.setItem('data','hellooooo')
// let a= localStorage.getItem('data','hellooooo')
// console.log(a);

// let arr=[1,2,3,4,5,6,7,1]

// let a= arr.find((a)=>{
//     // console.log();
//     return a==1

// })
// console.log(a);




// arr.map(()=>{

// })






// // script.js
// document.addEventListener('DOMContentLoaded', () => {
//     const upload = document.getElementById('upload');
//     const canvas = document.getElementById('canvas');
//     const ctx = canvas.getContext('2d');
//     const grayscaleBtn = document.getElementById('grayscale');
//     const invertBtn = document.getElementById('invert');
//     const cropBtn = document.getElementById('crop');

//     let image = new Image();
//     let startX, startY, endX, endY;

//     upload.addEventListener('change', (event) => {
//         const file = event.target.files[0];
//         const reader = new FileReader();
//         reader.onload = (e) => {
//             image.src = e.target.result;
//         };
//         reader.readAsDataURL(file);
//     });

//     image.onload = () => {
//         canvas.width = image.width;
//         canvas.height = image.height;
//         ctx.drawImage(image, 0, 0);
//     };

//     grayscaleBtn.addEventListener('click', () => {
//         let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//         let data = imageData.data;
//         for (let i = 0; i < data.length; i += 4) {
//             let avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
//             data[i] = avg;       // Red
//             data[i + 1] = avg;   // Green
//             data[i + 2] = avg;   // Blue
//         }
//         ctx.putImageData(imageData, 0, 0);
//     });

//     invertBtn.addEventListener('click', () => {
//         let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//         let data = imageData.data;
//         for (let i = 0; i < data.length; i += 4) {
//             data[i] = 255 - data[i];       // Red
//             data[i + 1] = 255 - data[i + 1]; // Green
//             data[i + 2] = 255 - data[i + 2]; // Blue
//         }
//         ctx.putImageData(imageData, 0, 0);
//     });

//     cropBtn.addEventListener('click', () => {
//         // Example of simple cropping functionality
//         // Adjust these coordinates as needed
//         startX = 50;
//         startY = 50;
//         endX = canvas.width - 50;
//         endY = canvas.height - 50;

//         let croppedImageData = ctx.getImageData(startX, startY, endX - startX, endY - startY);
//         canvas.width = endX - startX;
//         canvas.height = endY - startY;
//         ctx.putImageData(croppedImageData, 0, 0);
//     });
// });

//    let h2=   document.querySelector('h2')
//    h2.innerText='hello'
//    console.log(h2.innerText);
   

//    for(let i of h2){
//     i.style.color='red'

//    }
//    h2.style.color='red'
//    console.log(h2);



//  let div=   document.querySelector('div')

//     let h2=    document.createElement('h2')
//     let h3=    document.createElement('h3')


//     h2.innerText='hello'

//     div.append(h2,h3)
//     console.log(div,"dikh jaa...");


//   let a=    document.querySelector('a')
//   console.log(  a.getAttribute('href'));
//   a.setAttribute('href','http://flipkart.com')
  
// const arr = [
//     'https://images.unsplash.com/photo-1662330287683-6032da28889c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60', 
//     'https://images.unsplash.com/photo-1659535907680-0e219b46c01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60', 
//     'https://images.unsplash.com/photo-1660899599007-771f97039eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60',
//     'https://images.unsplash.com/photo-1662324580989-591a589c5e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60'
//   ]
  
//   const imageEl = document.querySelector('img');
  
//   let num = 0;
  
//   setInterval(function() {
//     imageEl.setAttribute('src', arr[num]);
//     num = (num + 1) % arr.length;
//     // num++
//   }, 2000);


//   let arrrr=['A','B']

   
//    function fun1(){
//     console.log('heheheh');
    
//    }
   

//    let btn=  document.querySelector('button')

//    btn.onclick=function(){
//     console.log('hello');
    
//    }

//  let btn=   document.querySelector('button')
//   let body=   document.querySelector('body')
//    let h2=   document.querySelector('h2')
// btn.addEventListener('click',function(){
//     // console.log('hello');
//     h2.innerText='hello'
//     body.style.backgroundColor='red'
    
// })


// let inp=   document.querySelector('input')

// inp.addEventListener('input',(e)=>{
//     // console.log('hehehehe');
//     console.log(e.target.value);
// })


    // let formE=    document.querySelector('form')
    // formE.addEventListener('submit',(e)=>{
    //     e.preventDefault()
    //     // console.log('helloooo');
    //     console.log(formE.elements[0].value);
    //     console.log(formE.elements[1].value);

    // })

//   let inp=     document.querySelector('input')
//   inp.value


//   let inp=   document.querySelector('input')
//   let btn=   document.querySelector('button')
//   let ul=   document.querySelector('ul')

//   btn.addEventListener('click',()=>{
//            let data=inp.value

//         let li=   document.createElement('li')
//         li.innerText=data

//         ul.append(li)
//         inp.value=''


//   })



// console.log(eval(5+5-5/45));


//  let inp=   document.querySelector('input')
//    let button = document.querySelectorAll('button')
//    for(let btn of button){
//     btn.addEventListener('click',(e)=>{
//         // console.log('heheheh');
//            let text=   e.target.innerText
//         //    console.log(text,"mil rha kya?/");
//         if(text==='C'){
//             inp.value=''

//         }
//         else if(text==='='){
//             inp.value=   eval(inp.value)
//         }
//         else{
//             inp.value=inp.value+text
//         }
           
            
        
//     })

//    }



// fetch('https://dummyjson.com/recipes').then((res)=>{
//     // console.log('s');
//     return res.json()
    

// }).then((data)=>{
//     console.log(data);
    

// })


//  async  function api(){
//     try{
//      let data=    await axios('https://dummyjson.com/recipes')
//      console.log(data);
     
//     } catch{
//         console.log('errrrrr');
        

//     }
   

// }
// api()

// let obj={
//     id:1,
//     name:"rahul",
//     age:21
// }
// localStorage.setItem('user',JSON.stringify(obj))

// let data= localStorage.getItem('user')
// console.log(data);




let form=  document.querySelector('#Signup')


form.addEventListener('submit',()=>{
    let name=  document.querySelector('#name').value

    let email=   document.querySelector('#email').value
     let passWord=  document.querySelector('#pass').value
     let data={
        name:name,
        email:email,
        pass:passWord
     }
     localStorage.setItem('user',JSON.stringify(data))


})

let loginForm=  document.querySelector('#login')

loginForm.addEventListener('click',(e)=>{
    e.preventDefault()
    let data=     JSON.parse(localStorage.getItem('user'))  
    console.log(data,"bhehe");
    

})























