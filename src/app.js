import express from "express";
import morgan from "morgan";
//import Userroute from "./routes/user.routes";
import {Userroute} from "./routes/rutas.routes"; 


const app = express()

app.use(morgan('dev'));

app.set("port",4700);

app.use(Userroute);


export default app

