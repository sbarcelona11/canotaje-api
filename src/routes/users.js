import express from 'express';
const userRouter = express.Router();
import {login, register} from '../controllers/users.js';

userRouter.post('/login', login)
userRouter.post('/register', register)

export default userRouter;