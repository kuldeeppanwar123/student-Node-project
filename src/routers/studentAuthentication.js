import express from 'express';
import { loginStudent, showAllStudents, signupStudent } from '../controllers/studentAuthController.js';
import { emailValidation, passwordValidation, validation } from '../middlewares/studentAuthMiddleware.js';

const authRouter = express.Router();

authRouter.post('/login', emailValidation,passwordValidation, loginStudent)
authRouter.post('/signup', validation, signupStudent)
authRouter.get("/showAll",showAllStudents)

export default authRouter;