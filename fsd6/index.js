// console.log('hello ');
// let fs=  require('fs')
// write file
// fs.writeFileSync('index.txt','chotabheem hello')
// let data1='hello'

// fs.writeFile('index.txt','hello',(err)=>{
//     if(err)
//     throw err
// console.log('sab theek hai');
// })

// read file
// let data=  fs.readFileSync('index.txt')


// fs.readFile('index.txt',(err,data)=>{
//     if(err)
//     throw err
// console.log(data.toString());

// })
// console.log(data.toString());
// // delet
// fs.unlinkSync('index.txt')

// fs.appendFileSync('index.txt','chutkii')

// console.log(fs);

// let data= require('./home')
// data.sum(5,5)
// console.log(data.user)
let express= require('express')
 let app=  express()
 app.set('view engine','ejs')
//  app.use((req,res,next)=>{
//     res.send('hellooo ja ke dikhaoo')
//     next()
//  })
//  app.use((req,res)=>{
//     res.send
//     ('hello mai bhi hu')
//  })

let arr=[1,2,3,4,2,34,2,4,2,4,2,4,2,42,4,6,7,3,6,5]
app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/search',(req,res)=>{
    console.log(req.query,"j");
    res.send('heheheh')

})
// REST api
app.get('/user',(req,res)=>{
    res.send('hehehe')
})
app.post('/user',(req,res)=>{
    res.send('hehehe')
})
// Dynamic routing
app.get('/:data',(req,res)=>{
    console.log(req.params);   
    res.send(req.params.data)
})
// app.get('*',(req,res)=>{
//     res.send('<h1>  page not Found</h1>')

// })
 app.listen(4000,()=>{
    console.log('server runig on port on 4000');
 })
//  console.log(app);

// const http=require('http')
//  const server= http.createServer((req,res)=>{
//     res.end('hello is my server created by me!!')
// });
// server.listen(4000,'127.0.0.1',()=>{
//     console.log('server running port no. 4000')
// })
//    btoa xb