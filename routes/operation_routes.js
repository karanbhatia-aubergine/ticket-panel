const Ticket_Data = require('../models/ticket_model')


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



const operation_api = {
    get_data_by_department : get_data_by_department,
    update_assigner:update_assigner

}
module.exports = operation_api;