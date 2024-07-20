
const express = require('express');
const router = express.Router();
const User = require('../model/user');
let bcrypt=  require('bcrypt')
   let jwt=    require('jsonwebtoken')
router.post('/login', async(req,res)=>{
    const userInfo=req.body
    let userData
    try{

         userData= await User.findOne({email:userInfo.email})
    }
    catch(err){
        console.log(err,"err")

    }
    if(!userData){
        res.status(401).send({msg:"signUp kiya tune ???"})
    }
     const validPassword=  await bcrypt.compare(userInfo.passWord,userData.passWord).catch((err)=>{
        console.log(err,"err while matching passoword")
        res.status(500).send({msg:"Internal server err"})
     })
     if(!validPassword){
        res.send({msg:"Invalid password"})
     }
     else{
            let data=   JSON.stringify(userData.email)
           let token=  jwt.sign(data,'EFBWUYFBUWBFUWVYFBUWEF')
           res.send({
        token,    userData
           })

     }
})

module.exports=router