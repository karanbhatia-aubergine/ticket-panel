const express = require('express')
const bcrypt = require('bcrypt')
const Data = require('../models/model')
// const router = express.Router()


//POST Method
const post =  async(req, res) => {
    function isEmail(email) {
        var emailFormat = /^[a-zA-Z0-9_.+-]+@auberginesolutions+\.[a-zA-Z0-9-.]+$/;
        if (email !== '' && email.match(emailFormat)) { return email; }
        return f
    };

    if(req.path == "/signup"){
        access = "normal user"
    }else if (req.path == "/admin/signup"){
        access = "admin"
    }
    
    // console.log(req.path)
    // console.log(access)
    try {
        const email = isEmail(req.body.email);
        const hashPass = await bcrypt.hash(req.body.password, 10);
        const username = req.body.username
        const role = req.body.role
        const check_username = await Data.findOne({"username":`${username}`})
        const check_email = await Data.findOne({"email":`${email}`})
        // console.log(check_username)

        if (email == null) {
            return res.status(201).json({
              message: 'Invalid E-mail address',
            });
        };

        if (check_username != null){
            return res.status(201).json({
                message: `Username is already used by other user`,
              });
        }
        if (check_email != null){
            return res.status(201).json({
                message: `Email is already used by other user`,
              });
        }

        const data = new Data({
            username: username,
            email: email,
            password: hashPass,
            role: role,
            access:access
        });

        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//Get all users
const allUsers =  async (req, res) => {
    try {
        const data = await Data.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
};

//Get by ID Method
const getUser =  async (req, res) => {
    try {
        const data = await Data.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
};

//Update by ID Method
const update =  async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Data.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}


//Get by login by username
const login = async (req,res) => {
    const data_username = await Data.findOne({"username":`${req.body.username}`})
    // console.log(data_username)
    // console.log(req.body.password)
    const hashPass = await bcrypt.compare(req.body.password,data_username.password);
    // console.log(hashPass)

    if (data_username != req.body.username && hashPass != true){
        return res.status(201).json({
            message: `invalid password or username`,
          });
    }
    try {
        const data = await Data.findOne({"username":`${req.body.username}`});
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const api_name = {
    post : post,
    allUsers:allUsers,
    getUser:getUser,
    update:update,
    login:login

}

module.exports = api_name;