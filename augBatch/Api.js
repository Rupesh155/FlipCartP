
// fetch('https://dummyjson.com/recipes').then((res)=>{
//     // console.log(res,"hehehe");
//     return res.json()
    

// }).then((data)=>{
//     console.log(data,"hehe");
    

// })


// let city='bhopal'



// let btn=   document.querySelector('button')
// btn.addEventListener('click',()=>{
//  let inp=   document.querySelector('input')
//  let city=inp.value
// let h2=  document.querySelector('h2')
//     let apikey='9f6290d6cda9a36a63755fadee71f83d'
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`).
// then((res)=>{
//     return res.json()

// }).then((data)=>{
//     console.log(data);
//     h2.innerText=data.main.temp
    
// })

// })
  let div= document.querySelector('div')

fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies').
then((res)=>{
    return res.json()

}).then((data)=>{
    console.log(data,"heheh");
    data.map((val)=>{
     let h2=   document.createElement('h2')
     let h3=   document.createElement('h3')
     let p=   document.createElement('p')


     h2.innerText=val.Title
     h3.innerText=val.Runtime
     p.innerText=val.Year


     div.append(h2,h3,p)

    })
    // document.createElement('h2')
    

})