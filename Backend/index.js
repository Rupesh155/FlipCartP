// // console.log('hello');

// //    let joke= require('give-me-a-joke')
// //    joke.getRandomDadJoke((data)=>{
// //     console.log(data);
// //    })
                                
// let express=   require('express')
// let app=  express()                                           
//        // app.use((req,res,next)=>{
    
// //     //    res.send('nhi jane denge') 

// //     next()

// // })


 // // app.use((req,res)=>{
// //     res.send('mai to bilkiul nhi jane dunga hewheheh')

// // })      
// let arr=[1,2,3,4,5,6,7,1,2,3,56,67,12,3,4,667,1,2,3,45,612,3,5]
// app.set('view engine', 'ejs')
// app.get('/:data',(req,res)=>{
//     console.log(req.params);
//     let {data}=req.params
//     // let data=req.params.data

//      let newData= arr.filter((a)=>{
//         return a===data

//     })
//     console.log(newData,"check kro mujhe heheh");
//     res.render('index',{newData})

// })
// // app.get('/:d',(req,res)=>{
// //     console.log(req.params);
// //     // res.send(req.params.data)
// //     res.send(req.params.d)
// // })

// app.get('/search',(req,res)=>{
//     let {firstName,lastName}=req.query 
//     console.log( req.query);
//     // res.send(`hello   ${'hello'}`)
//     // console.log(`hello     hiii`);
//     res.send(`kaun sa ka hai ?${firstName} unka lastname kya hai ? ${lastName}`)
// })       

// app.get('/about',(req,res)=>{    
//     res.send('idher dekhooooooooo')
    
// })
                                                        
// app.listen(2000,()=>{
//     console.log('server running on port no  2000');

// })


// let express=  require('express')                      
// let app=  express()


// app.use(express.urlencoded({extended:true}))
// app.use(express.json())
// app.set('view engine', 'ejs')

// let arr=[1,2,3,34,5,1,2,3,4,5,1,2,234,5,1,2,334,45,56,7,88,1]
// app.get('/',(req,res)=>{
//     console.log(req.params)

//    let newData=[1,2,3,45,5]
//     res.render('index',{newData})
// })

// app.get('/user'  ,(req,res)=>{
//        let user='hello'
//     res.send('hyw')

// })
// app.post('/user',(req,res)=>{
//     console.log(req.body,"hehe");
//     res.send('mil gyaaaa heheheh')

// })
// app.get('/search',(req,res)=>{

//     // localhost:4000/search?firstName=rahul && lastName=kumar
//     console.log(req.query);
//     res.send(`fn name: ${req.query.fn}  lastName: ${req.query.lastName}`)
// })
// app.get('/:data',(req,res)=>{
//     console.log(req.params);
//     res.send(req.params.data)

// })

// app.get('/about',(req,res)=>{
//     res.send('about')

// })

// app.listen(4000,()=>{
//     console.log('server chal gyaa');

// })



let express=  require('express')
let app=  express()
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
let comments = [
    {
        id:0,
        username:"Sam",
        comment:"chitkara is a nice university 0"
    },
    {
        id:1,
        username:"g2",
        comment:"chitkara is a nice university 1"
    },
    {
        id:2,
        username:"vohra",
        comment:"chitkara is a nice university 2"
    }
]

app.get('/blog',(req,res)=>{

    res.render('index',{comments})


})
app.get('/blog/new',(req,res)=>{
    res.render('form')

    


})

app.post('/blog',(req,res)=>{
    // console.log(req.body,"heheh");
    let {username,comment}=req.body
    comments.push({username,comment,id:comments.length})
    // res.render('index')
    res.redirect('/blog')


})
app.get('/blog/:id',(req,res)=>{

    let {id}=req.params
   let newArr=  comments.find((a,b,c)=>{
        return a.id==id

    })
    console.log(newArr,"neww");
    console.log(id,"idd");
    res.render('show',{newArr})

})   
app.listen(5000,()=>{
    console.log('server running on port no 5000');
})



