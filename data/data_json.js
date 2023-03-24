// const json_Data = require('../models/json_data')
// const hr_category = ["Leave balance","Leave policy","Payroll","Provident Fund(PF)","Keka Issues",
//                     "Sodexo Food Coupon","Health Insurance/Plum","Offer letter,appointment letter,appraisal letter or any other letters",
//                     "Referral Application Status","Learning and Training development-Course purchase",
//                     "Issue with HDFC bank account","Other(Please specify in Description)"                        
// ]

// const hardware_category = ["Laptop Bootup","laptop Charger Not Working","Laptop battery life","Add RAM to machine",
//                             "New Monitor Request","New Keyboard/Mouse Request","Mobile phone issue","Mobile Data Cable issue","Hard disk failure",
//                             "Other issue"
//                                 ]

// const machine_type = ["HP","Dell","Lenovo","Apple Mac Mini","Apple Macbook Pro","Other"]
// const type = ["HR","Hardware"]

// const myData = new json_Data({
//     HR: hr_category,
//     Hardware: hardware_category,
//     Machine_Type:machine_type,
//     Type:type

//   });
  
//   myData.save();
const json_Data = require('../models/json_data');
const hr_category = ["Leave balance","Leave policy","Payroll","Provident Fund(PF)","Keka Issues",
                    "Sodexo Food Coupon","Health Insurance/Plum","Offer letter,appointment letter,appraisal letter or any other letters",
                    "Referral Application Status","Learning and Training development-Course purchase",
                    "Issue with HDFC bank account","Other(Please specify in Description)"                        
]

const hardware_category = ["Laptop Bootup","laptop Charger Not Working","Laptop battery life","Add RAM to machine",
                            "New Monitor Request","New Keyboard/Mouse Request","Mobile phone issue","Mobile Data Cable issue","Hard disk failure",
                            "Other issue"
                                ]

const machine_type = ["HP","Dell","Lenovo","Apple Mac Mini","Apple Macbook Pro","Other"]
const type = ["HR","Hardware"]

const myData = new json_Data({
    HR: hr_category,
    Hardware: hardware_category,
    Machine_Type:machine_type,
    Type:type
});

myData.save()
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });
