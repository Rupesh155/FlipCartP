let express=  require('express')
let mongoose= require('mongoose')
const User = require('./model/user')
  let bcrypt=   require('bcrypt')
 let jwt=   require('jsonwebtoken')
let app= express()
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/fsd10Auth').then(()=>{
    console.log('db');
}).catch((err)=>{
    console.log(err);
})

app.get('/',()=>{
})
app.post('/create', async(req,res)=>{
    // console.log(req.body);
    let {email,name,passWord}=req.body
    let userData=req.body
     let user=  await User.findOne({email})
     if(user){
       return res.send('user jinda hai')
     }
     else{
        // res.send('hehehe')
         let updatepassWord=    await  bcrypt.hash(userData.passWord,10)
         console.log(updatepassWord); 
        // let dbUser= new User({...req.body})
        let dbUser=   new User({
            name:userData.name,
            email:userData.email,
            passWord:updatepassWord
           })
         await  dbUser.save()
        return res.send('account create ho gya heheh')
        

     }



})

app.post('/login', async(req,res)=>{
    let userLogin=req.body
    // console.log(userLogin,"kyu nih mil rhe");
        let user=  await  User.findOne({email:userLogin.email})
        console.log(user,'dekhooo');
        
        if(user){
           let validPass=     await bcrypt.compare(userLogin.passWord,user.passWord)
           if(validPass){
        let token=     jwt.sign({ email:user.email},'JDHFGIUERRGRFIWRRG')
console.log(token);

            res.send('login done')
           }
           else{
            res.send('Invalid passWord sahi se yaad kro badam khaooo')
           }

            // res.send('abhi login karaye hai ruke zara')
        }
        else{
            res.send('sahi se yaad kro aapne account nhi create kiya...')
        }


})

app.listen(7000,()=>{
    console.log('server running on port no 7000');
})