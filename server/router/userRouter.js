const express = require('express');
const userRouter = express.Router();
const userController = require('../controller/userController');
const userMiddleWare = require('../middleware/userMiddleware')

userRouter.post('/register', userController.creatUser)

userRouter.post('/login', userController.loginUser);

userRouter.get('/getAllUsers',userMiddleWare.verifyToken ,userController.getAllUsers);
// userRouter.get('/getAllUsers' ,userController.getAllUsers);

userRouter.get('/getOneUser', userController.getOneUser);

userRouter.delete('/:id',userMiddleWare.verifyTokenFromAdmin  ,userController.deleteUser);

userRouter.put('/:id', userController.editUser);

// userRouter.post('/logout', userController.logout)

module.exports = userRouter;