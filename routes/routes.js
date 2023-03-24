const express = require('express')
const router = express.Router()
const api_name = require('./routes_methods')
const ticker_api = require('./ticket_routes')
const operation_api = require('./operation_routes')
const dataroute = require('./data_routes')

//User site api
router.get('/users',api_name.allUsers)
router.get('/login',api_name.login)
router.patch('/update/:id',api_name.update)
router.get('/user/:id',api_name.getUser)
router.post('/signup',api_name.post)
router.post('/admin/signup',api_name.post)
router.post('/createticket',ticker_api.ticket_method)
router.get('/tickets/:userid',ticker_api.gettickets)
router.get('/tickets/:userid/:status',ticker_api.get_tickets_status)

//operation team api
router.get('/operation/tickets/:department',operation_api.get_data_by_department)
router.patch('/operation/tickets/:ticket',operation_api.update_assigner)
router.post('/operation/:department/add',operation_api.create_technical_support)
router.get('/operation/all/technician/:department',operation_api.get_technician_by_department)



// all json data
router.get('/insert/data',dataroute.insert_json_data)
router.get('/all/data',dataroute.all_data)




module.exports = router