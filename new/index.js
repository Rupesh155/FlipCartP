// console.log('heheheheheh');
 
let express=  require('express')
let app=  express()

app.use((req,res,next)=>{
    // res.send('nhi jane dunga')
    next()

})
app.use((req,res,next)=>{
    // res.send('mai to bilkul nhi jane dunga')
    next()

})

app.get('/',(req,res)=>{
    res.send('hello this is yur server')
})
app.get('/home',(req,res)=>{
    res.send('helloooooooo')
})

app.listen(4000,()=>{
    console.log('server running on port no 4000');
})