const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const User = require('./models/User');

const app = express();
app.use(cors())
app.use(express.json())

 mongoose.connect('mongodb+srv://ahmed:ahmed1234@cluster0.qiohzrz.mongodb.net/')

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try { 
      const UserInfo=await User.create({username: username,email:email ,password: password})
      res.json(UserInfo)
    } catch (error) {
        res.status(404).json(error.message)
    }
   
   

})
app.listen(4000, () => {
    console.log('App listening on port 4000!');
});

// mongodb+srv://ahmed:ahmed1234@cluster0.qiohzrz.mongodb.net/