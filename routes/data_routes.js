const json_Data = require('../models/json_data')

const insert_json_data = async (req, res) => {

    try {

        const hr_category = ["Leave balance", "Leave policy", "Payroll", "Provident Fund(PF)", "Keka Issues",
            "Sodexo Food Coupon", "Health Insurance/Plum", "Offer letter,appointment letter,appraisal letter or any other letters",
            "Referral Application Status", "Learning and Training development-Course purchase",
            "Issue with HDFC bank account", "Other(Please specify in Description)"
        ]

        const hardware_category = ["Laptop Bootup", "laptop Charger Not Working", "Laptop battery life", "Add RAM to machine",
            "New Monitor Request", "New Keyboard/Mouse Request", "Mobile phone issue", "Mobile Data Cable issue", "Hard disk failure",
            "Other issue"
        ]

        const machine_type = ["HP", "Dell", "Lenovo", "Apple Mac Mini", "Apple Macbook Pro", "Other"]
        const type = ["HR", "Hardware"]
        const data = await json_Data.find({"HR":[]});
        if (data ==undefined){
            const myData = new json_Data({
                HR: hr_category,
                Hardware: hardware_category,
                Machine_Type: machine_type,
                Type: type
            });
            const dataToSave = await myData.save();
            res.status(200).json(dataToSave);
        }else{
            res.status(200).json({message:"data already in it"})
        }
        
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }

}


//Get all users
const all_data =  async (req, res) => {
    try {
        const data = await json_Data.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const dataroute={
    insert_json_data:insert_json_data,
    all_data:all_data
}
module.exports = dataroute;