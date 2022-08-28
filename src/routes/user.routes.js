import { Router } from "express";
import * as UserControl from "../controllers/UserController";

export const Userroute = Router();

Userroute.get('/',UserControl.index);

Userroute.get('/user',UserControl.show);

