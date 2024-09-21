// // // console.log('hello');

// // //    let joke= require('give-me-a-joke')
// // //    joke.getRandomDadJoke((data)=>{
// // //     console.log(data);
// // //    })
                                
// // let express=   require('express')
// // let app=  express()                                           
// //        // app.use((req,res,next)=>{
    
// // //     //    res.send('nhi jane denge') 

// // //     next()

// // // })


//  // // app.use((req,res)=>{
// // //     res.send('mai to bilkiul nhi jane dunga hewheheh')

// // // })      
// // let arr=[1,2,3,4,5,6,7,1,2,3,56,67,12,3,4,667,1,2,3,45,612,3,5]
// // app.set('view engine', 'ejs')
// // app.get('/:data',(req,res)=>{
// //     console.log(req.params);
// //     let {data}=req.params
// //     // let data=req.params.data

// //      let newData= arr.filter((a)=>{
// //         return a===data

// //     })
// //     console.log(newData,"check kro mujhe heheh");
// //     res.render('index',{newData})

// // })
// // // app.get('/:d',(req,res)=>{
// // //     console.log(req.params);
// // //     // res.send(req.params.data)
// // //     res.send(req.params.d)
// // // })

// // app.get('/search',(req,res)=>{
// //     let {firstName,lastName}=req.query 
// //     console.log( req.query);
// //     // res.send(`hello   ${'hello'}`)
// //     // console.log(`hello     hiii`);
// //     res.send(`kaun sa ka hai ?${firstName} unka lastname kya hai ? ${lastName}`)
// // })       

// // app.get('/about',(req,res)=>{    
// //     res.send('idher dekhooooooooo')
    
// // })
                                                        
// // app.listen(2000,()=>{
// //     console.log('server running on port no  2000');

// // })


// // let express=  require('express')                      
// // let app=  express()


// // app.use(express.urlencoded({extended:true}))
// // app.use(express.json())
// // app.set('view engine', 'ejs')

// // let arr=[1,2,3,34,5,1,2,3,4,5,1,2,234,5,1,2,334,45,56,7,88,1]
// // app.get('/',(req,res)=>{
// //     console.log(req.params)

// //    let newData=[1,2,3,45,5]
// //     res.render('index',{newData})
// // })

// // app.get('/user'  ,(req,res)=>{
// //        let user='hello'
// //     res.send('hyw')

// // })
// // app.post('/user',(req,res)=>{
// //     console.log(req.body,"hehe");
// //     res.send('mil gyaaaa heheheh')

// // })
// // app.get('/search',(req,res)=>{

// //     // localhost:4000/search?firstName=rahul && lastName=kumar
// //     console.log(req.query);
// //     res.send(`fn name: ${req.query.fn}  lastName: ${req.query.lastName}`)
// // })
// // app.get('/:data',(req,res)=>{
// //     console.log(req.params);
// //     res.send(req.params.data)

// // })

// // app.get('/about',(req,res)=>{
// //     res.send('about')

// // })

// // app.listen(4000,()=>{
// //     console.log('server chal gyaa');

// // })



// let express=  require('express')
// let app=  express()
// app.set('view engine','ejs')
// app.use(express.static('public'))
// app.use(express.urlencoded({extended:true}))

// let methodOverride = require('method-override');

// app.use(methodOverride('_method'));
// app.get('/',(req,res)=>{
 
// })

// let comments = [
//     {
//         id:0,
//         username:"Sam",
//         comment:"chitkara is a nice university 0"
//     },
//     {
//         id:1,
//         username:"g2",
//         comment:"chitkara is a nice university 1"
//     },
//     {
//         id:2,
//         username:"vohra",
//         comment:"chitkara is a nice university 2"
//     }
// ]

// app.get('/blog',(req,res)=>{

//     res.render('index',{comments})


// })
// app.get('/blog/new',(req,res)=>{
//     res.render('form')
// })
// app.post('/blog',(req,res)=>{
//     // console.log(req.body,"heheh");
//     let {username,comment}=req.body
//     comments.push({username,comment,id:comments.length})
//     // res.render('index')
//     res.redirect('/blog')


// })
// app.get('/blog/:id',(req,res)=>{

//     let {id}=req.params
//    let newArr=  comments.find((a)=>{
//         return a.id==id

//     })
//     console.log(newArr,"neww");
//     console.log(id,"idd");
//     res.render('show',{newArr})

// }) 

// app.get('/blog/:id/edit',(req,res)=>{
//     let {id}=req.params
//    let editData=  comments.find((a)=>{
//         return a.id==id

//     })
//     console.log(editData,"hehehe");
//     res.render('edit',{editData})
// }) 

// app.patch('/blog/:id/edit',(req,res)=>{
//     let {id}=req.params
//     let {username,comment}=req.body
//    let oldData=  comments.find((a)=>{
//         return a.id==id

//     })
//     oldData.username=username
//     oldData.comment=comment
//     res.redirect('/blog')   
// })

// app.delete('/blog/:id',(req,res)=>{
//     let {id}=req.params
//    let bachhuaData=  comments.filter((a)=>{
//         return a.id!=id
//     })
//     comments=bachhuaData
//     res.redirect('/blog')
//     // res.send('delet ho jayega bhorosha rakhooo')

// })

// // app.get('/user',(req,res)=>{
// //     res.send('heheheh')

// // })
// // app.post('/user',(req,res)=>{
// //     res.send('heheheh')

// // })
// app.listen(5000,()=>{
//     console.log('server running on port no 5000');
// })



// let express= require('express')
// let app= express()
// app.set('view engine','ejs')
// app.use(express.static('public'))
// app.use(express.urlencoded({extended:true}))
// let comments = [
//     {
//         id:0,
//         username:"Sam",
//         comment:"chitkara is a nice university 0"
//     },
//     {
//         id:1,
//         username:"g2",
//         comment:"chitkara is a nice university 1"
//     },
//     {
//         id:2,
//         username:"vohra",
//         comment:"chitkara is a nice university 2"
//     }
// ]

// app.get('/',(req,res)=>{
//     res.render('home',{comments})

// })
// app.get('/form',(req,res)=>{
//     res.render('form10')

// })
// app.post('/user',(req,res)=>{
//     console.log(req.body);
//     // comments.push(req.body)
//     let {comment,username}=req.body
//     comments.push({username,comment,id:comments.length})
//     res.redirect('/')
//     // res.send('hehehe')

// })

// app.listen(4000,()=>{
//     console.log('server running on port no 4000');

// })


// // let e= require('express')
// // let mongoose= require('mongoose')
// // mongoose.connect('mongodb://127.0.0.1:27017/fsd10').then(()=>{
// //     console.log('heheh');

// // }).catch((err)=>{
// //     console.log(err);
    
// // })

// //  let app= e()

// //  app.get('/',(req,res)=>{
// //     res.send('hehehe')
// //  })
// //  app.listen(5000,()=>{
// //     console.log('server running on port no 5k');

// //  })




// //  let e= require('express')
// // let mongoose=  require('mongoose')
// // mongoose.connect('mongodb://127.0.0.1:27017/fsd1').then(()=>{
// //     console.log('db ');

// // }).catch((err)=>{
// //     console.log(err);
// // })

// //  let app=  e()


// //  app.get('/',(req,res)=>{
// //     res.send('hello')

// //  })

// //  app.listen(5000,()=>{
// //     console.log('server chal gyaa');

// //  })



// //  show dbs


// //  use  databasename

// //terminal
// // // 1. show databases or show dbs //displays all the dbs in your system
// // // 2. db //shows the db where you are currently working (test)
// // 3. use moviesDB //the database you want to work with right now 
// // 4. db.dropDatabase() //deletes the entire database from the system.
// // // 5. use moviesDB //create a new database
// // 6. db.createCollection('user') //creates collection
// // 7. db.collection.drop() //removes collection
// // //but this movies DB is not shown in the show dbs because it needs to have 
// // //some value in it before displaying.


// // //terminal

// // // //TO CREATE
// //insert 1 element
// // 1. db.movies.insertOne({name:'superman' , imdb:7.7});
// //insert many elements
// // 2.db.movies.insertMany([ {name:'m1', imdb:6},{name:'m2', imdb:7} ]);


// // // //TO READ
// // // //1. to find all the documents
// // db.movies.find();
// // // //2. to find with conditions
// // db.movies.find({imdb:5 , name:'superman'})
// // // //TO UPDATE
// // //1. to update 1 document
// // db.movies.updateOne({name:'superman'},{$set:{imdb:10}})
// // //2. to update many changes in 1 document
// // db.movies.updateOne({name:'superman'},{$set:{imdb:10,name:"samarth"}});
// //3. to update many documents at once
// db.movies.updateMany({imdb:7},{$set:{imdb:8,name:"sam"}})


// //TO DELETE
//1. to delete 1 document
// db.movies.deleteOne({name:'samarth'})
// //2. to delete many documents
// db.movies.deleteOne({})

let express=  require('express')
let mongoose=  require('mongoose')
let app=   express()
mongoose.connect('mongodb://localhost:27017/yourData').then(()=>{
    console.log('chal gyaa');

}).catch((err)=>{
    console.log(err);

})
     let userSchema=    mongoose.Schema({
        name:String,
        lastName:String,
        age:Number
     })
    let User=   mongoose.model('user',userSchema)
   let data=    new User({name:"yash",lastName:"gautam",age:16})
   data.save()
 app.listen(5000,()=>{
    console.log('server running on port no 5000');

 })





