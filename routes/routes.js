const express = require('express')
const router = express.Router()
const api_name = require('./routes_methods')
const ticker_api = require('./ticket_routes')

router.get('/users',api_name.allUsers)
router.get('/login',api_name.login)
router.patch('/update/:id',api_name.update)
router.get('/user/:id',api_name.getUser)
router.post('/signup',api_name.post)
router.post('/admin/signup',api_name.post)
router.post('/createticket',ticker_api.ticket_method)
router.get('/tickets/:userid',ticker_api.gettickets)
router.get('/tickets/:userid/:status',ticker_api.get_tickets_status)


module.exports = router