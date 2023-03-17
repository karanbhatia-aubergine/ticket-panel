const express = require('express')
const bcrypt = require('bcrypt')
const Ticket_Data = require('../models/ticket_model')
var ticketCode = require('ticket-code')
var codeLength = 15 // optional (default 10)
var checksumSeed = 5 // required

const ticket = ticketCode.generate(checksumSeed,codeLength)

date =  Date.now().toString()

const ticket_method = async(req,res)=>{
    try{   
        user_id = req.body.userid,
        department= req.body.department,
        Subject = req.body.Subject,
        category = req.body.category,
        type = req.body.type,
        username = req.body.username,
        Priority = req.body.Priority,
        description = req.body.description

        const data = new Ticket_Data({
                    ticket:ticket,
                    date:date,
                    userid : user_id,
                    username:username,
                    name:req.body.name,
                    department:department,
                    Subject:Subject,
                    category:category,
                    type: type,
                    Priority:Priority,
                    status:req.body.status,
                    description:description,
                    assign:"Not Assign Currently"
                }
            
        );
        // console.log(data)
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
    }
    catch(error){
        res.status(400).json({ message: error.message });
    }

}

//Get ticket by ID Method

const gettickets =  async (req, res) => {
    try {
        const data = await Ticket_Data.find({userid:req.params.userid});
        res.json(data)

    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
};

//Get ticket status by ID Method

const get_tickets_status =  async (req, res) => {
    const data = await Ticket_Data.find({
        $and: [{
            userid:req.params.userid,
            status:req.params.status
        }]
        });

    // console.log(data)
    try {
        
        res.json(data)

    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
};


const ticker_api = {
    ticket_method : ticket_method,
    gettickets:gettickets,
    get_tickets_status:get_tickets_status

}

module.exports = ticker_api;