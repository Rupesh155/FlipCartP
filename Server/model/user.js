// User - User ka data store karne ke liye
// Product - Products ka data store karne ke liye
// Category - Product categories ka data store karne ke liye
// Order - Orders ka data store karne ke liye
// Cart - User cart ka data store karne ke liye
// Review - Product reviews ka data store karne ke liye
let mongoose=    require('mongoose')
let userSchema=   new mongoose.Schema({
     name:{
         type:String,
         require:true
     },
     email:{
         type:String,
         require:true
     },
     passWord:{
         type :String,
         require:true
     },
     role:{
         type :String,
         enum:['user','admin'],
         default:"user"
     }
   })

 let  User=  mongoose.model('User', userSchema)
    module.exports=User
