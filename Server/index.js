

let mongoose = require('mongoose')
let express = require('express')
let app = express()
app.use(express.json())
let loginRoutes = require('./routes/login')
app.use(express.urlencoded({ extended: true }));
let userRoutes = require('./routes/user')
mongoose.connect('mongodb://127.0.0.1:27017/zomato').
    then(() => {
        console.log('db');

    }).catch((err) => {
        console.log(err);

    })

app.use('/api', userRoutes)
app.use('/api', loginRoutes)



//    localhost:4000/api/users

app.listen(4000, () => {
    console.log('server running on port 4000');

})
