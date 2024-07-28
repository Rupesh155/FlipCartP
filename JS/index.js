
// console.log(a);
// var a=20


// console.log(a);
// let a=20
// let a
// console.log(a);
// a=5


// console.log(b);
// let b=40


// let c
// console.log(c);
// c=20


// add()
// function add(){
//     console.log('hey!');
// }
// add()
// let add=()=>{
//     console.log('hey!! idher dekhoo');

// }
// let arr=[1,2,3,4,5,6,6,6]

// let kyaaayega= arr.find((a)=>{
//     return a==6
// })
// console.log(kyaaayega);


// let sum=   arr.reduce((a,b,c,d)=>{
//     return a+b

// })
// console.log(sum);
//   let filteredddvalueee=  arr.filter((a,b,c)=>{
//     return a>4

// })
// console.log(filteredddvalueee);
//  let newA= arr.map((a,b,c)=>{
//     // console.log(a);
//     return a
    
// })
// console.log(newA);
// let newA=   arr.forEach((a,b,c)=>{
//     // console.log(c);
//     return a
// })
// console.log(newA);


// array.forEach(element => {
    
// });

// for(let i in arr){
//     console.log(i);
// }
// for(let i of arr){
//     console.log(i);
// }


// function step1(fn){
//     console.log(fn,'hehehe');
//     setTimeout(()=>{
//         console.log('photo selectedddd');
//         fn()
//     },5000)
// }
// function step2(fn){
//     setTimeout(()=>{
//         console.log('filtreddddddd');
//         fn()
//     },5000)
// }
// function step3(fn){
//     setTimeout(()=>{
//         console.log('captionssssssss ');
//         fn()
//     },3000)
// }

// function step4(){
//     setTimeout(()=>{
//         console.log('postt ho gyiiiiiii');
//     },2000)

// }

// Promise



//  let promise=   new Promise((res, rej)=>{
//     let reason='barish'
//     if(reason==='barish'){
//         rej('errr')
//     }
//     else{
//         res('resolve')
//     }

// })
// promise.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })


// console.log(promise,"hellooo");









// step1( ()=>{
//     step2(()=>{
//         step3(()=>{
//             step4()
//         })
//     })
// })





// step3()
// step4()
// step1()
// step2()





let step1=   function(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('photo select ho gyii')

        },4000)

    })

}

let step2=   function(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('filtrereddddddddd')

        },4000)
    })

}

step1().then((data)=>{
    console.log(data);
    return step2().
    then((filtreeddd)=>{
        console.log(filtreeddd);
        

    })

})

//  async function magic(){
//    let data=  await step1()
//    console.log(data);
//   let data1=   await step2()
//   console.log(data1);

// }
// magic()


























