// // let express=  require('express')
// // let mongoose= require('mongoose')
// // const User = require('./model/user')
// //  let cors=  require('cors')
// //   let bcrypt=   require('bcrypt')
// //  let jwt=   require('jsonwebtoken')
// // let app= express()
// // app.use(cors())
// // app.use(express.json())
// // mongoose.connect('mongodb://localhost:27017/fsd10Auth').then(()=>{
// //     console.log('db');
// // }).catch((err)=>{
// //     console.log(err);
// // })

// // app.get('/',()=>{
// // })
// // app.post('/create', async(req,res)=>{
// //     // console.log(req.body);
// //     let {email,name,passWord}=req.body
// //     let userData=req.body
// //      let user=  await User.findOne({email})
// //      if(user){
// //        return res.send('user jinda hai')
// //      }
// //      else{
// //         // res.send('hehehe')
// //          let updatepassWord=    await  bcrypt.hash(userData.passWord,10)
// //          console.log(updatepassWord); 
// //         // let dbUser= new User({...req.body})
// //         let dbUser=   new User({
// //             name:userData.name,
// //             email:userData.email,
// //             passWord:updatepassWord
// //            })
// //          await  dbUser.save()
// //         return res.send('account create ho gya heheh')
        

// //      }




// // })


// // app.post('/login',async(req,res)=>{

// //     let {email,passWord}=req.body
        
// //     let loginData=      await User.findOne({email})
// //     if(!loginData){
// //         res.send('pahle apna account creart kro ')
// //     }
// //     else{
// //            let validPass=     await bcrypt.compare(passWord,loginData.passWord)

// //            if(!validPass){

// //             res.send('Invalid password')

// //            }
// //            else{
// //             let token=   jwt.sign({email:loginData.email},'JFGBERGBUREIGHIERU')
// //             console.log(token,'???');
            
// //             res.send('login ho gyaa ')
// //            }
// //     }

// // })


// // app.post('/login', async(req,res)=>{
// //     let userLogin=req.body
// //     // console.log(userLogin,"kyu nih mil rhe");
// //         let user=  await  User.findOne({email:userLogin.email})
// //         console.log(user,'dekhooo');
        
// //         if(user){
// //            let validPass=     await bcrypt.compare(userLogin.passWord,user.passWord)
// //            if(validPass){
// //         let token=     jwt.sign({ email:user.email},'JDHFGIUERRGRFIWRRG')
// // console.log(token);

// //             res.send('login done')
// //            }
// //            else{
// //             res.send('Invalid passWord sahi se yaad kro badam khaooo')
// //            }

// //             // res.send('abhi login karaye hai ruke zara')
// //         }
// //         else{
// //             res.send('sahi se yaad kro aapne account nhi create kiya...')
// //         }


// // })

// // app.listen(7000,()=>{
// //     console.log('server running on port no 7000');
// // })



const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
let cors=require('cors')
app.use(cors())
const fs = require('fs');

const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}


// Set up storage engine for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // Directory to store uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Set file size limit to 5MB
  }).single('file');

app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred
        return res.status(500).json({ message: `Multer Error: ${err.message}` });
      } else if (err) {
        // Other unknown errors
        return res.status(500).json({ message: `Unknown Error: ${err.message}` });
      }
      else{
        res.status(200).send('File uploaded successfully');

      }
    });
  });
  

// Middleware for static files
app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
