const express = require('express')
const orderRouter = express.Router();
const orderController = require('../controller/orderController');

orderRouter.post('/createOrder', orderController.createOrder)

orderRouter.put('/updateOrder/:id', orderController.editOrder)

orderRouter.delete('/deleteOrder/:id', orderController.deleteOrder)

orderRouter.get('/getAllOrder', orderController.getAllOrder)

module.exports = orderRouter;