


let div= document.querySelector('div')
let img= document.querySelector('img')

// fetch('https://dummyjson.com/recipes').then((res)=>{
//     // console.log(res,"heheh");
//     return res.json()

// }).then((data)=>{
//     console.log(data.recipes[0].image,'dikhh gyayay');
//   let h1=   document.createElement('h1')
// //   let img=   document.createElement('img')

//   h1.innerText=data.recipes[0].name
//   img.setAttribute('src',data.recipes[0].image)
// div.appendChild(img)  
//     // data.recipes.map((a)=>{  
//     //     console.log(a);       

//     // })
// })
// .catch((err)=>{
//     console.log(err);

// })


// let inp=   document.querySelector('input')
// let btn=   document.querySelector('button')

// btn.addEventListener('click',()=>{
//     let city=inp.value
//     let ApiKey='9f6290d6cda9a36a63755fadee71f83d'
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`).
// then((res)=>{
//     return res.json()

// }).then((data)=>{
//     console.log(data,"datataa");

// })

// })

// Api

fetch('https://dummyjson.com/recipes').then((res)=>{
    return res.json()
    // console.log(res);

}).then((data)=>{
    console.log(data.recipes[0].name,"hehe");

})
.catch((err)=>{
    console.log(err,"errr");

})










