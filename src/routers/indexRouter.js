import express from 'express'
import authRouter from './studentAuthentication.js';
import crudRouter from './studentCrudRouter.js';
const router = express.Router();

router.use("/students",crudRouter);
router.use("/auth",authRouter);

export default router;