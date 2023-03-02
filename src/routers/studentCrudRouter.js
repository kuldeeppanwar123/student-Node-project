import express from "express";
import { deleteStudent, getStudent, insertStudent, updateStudent } from "../controllers/studentCrudController.js";


const crudRouter = express.Router();

crudRouter.get("/",getStudent);
crudRouter.post("/",insertStudent);
crudRouter.delete("/:id",deleteStudent);
crudRouter.put("/:id",updateStudent);

export default crudRouter;