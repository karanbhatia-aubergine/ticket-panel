const bcrypt = require('bcrypt')
const Ticket_Data = require('../models/ticket_model')
const Technical_Data = require('../models/technical_support_model') 

//get data by department 
const get_data_by_department = async (req,res)=>{
    // department:req.params.department
    var dep = req.params.department.replace(/ /g, '-');
    console.log(dep)
    const data = await Ticket_Data.find({department:dep})
    
    // console.log(data)
    try {
        
        res.json(data)

    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
};


//Update assigner by ticket 
const update_assigner =  async (req, res) => {
    console.log(req.body)

    try {
        const ticket = req.params.ticket;
        const assign = req.body;
        const options = { new: true };

        const result = await Ticket_Data.findOneAndUpdate(
            ticket, assign, options
        )
        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//Create technical support technician details
const create_technical_support = async(req,res) =>{
    function isEmail(email) {
        var emailFormat = /^[a-zA-Z0-9_.+-]+@auberginesolutions+\.[a-zA-Z0-9-.]+$/;
        if (email !== '' && email.match(emailFormat)) { return email; }
        return 
    };
    try{
    const hashPass = await bcrypt.hash(req.body.technician_password, 10);
    
    const data = new Technical_Data({
        supporter_name : req.body.supporter_name,
        technician_password:hashPass,
        contact_No : req.body.contact_No,
        department : req.params.department,
        photo : req.body.photo,
        email : isEmail(req.body.email),
        operation_team : req.body.operation_team
    })
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
    }catch(error){
        res.status(400).json({ message: error.message });
    }
}

//Get technician  by Deparments

const get_technician_by_department =  async (req, res) => {
    const data = await Technical_Data.find({
            department:req.params.department,
        });

    // console.log(data)
    try {
        
        res.json(data)

    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
};




const operation_api = {
    get_data_by_department : get_data_by_department,
    update_assigner:update_assigner,
    create_technical_support:create_technical_support,
    get_technician_by_department:get_technician_by_department

}
module.exports = operation_api;