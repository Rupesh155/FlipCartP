let express=  require('express')
let mongoose=  require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/flipCart').then(()=>{
    console.log('db...');
}).catch((err)=>{
    console.log(err);
})
let app=  express()
app.get('/',(req,res)=>{
    res.send('hello')
})
app.listen(5000,()=>{
    console.log('server running on port no 5000');
})