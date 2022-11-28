<<<<<<< HEAD
import express, { Application } from "express";
import userRoutes from "../routes/user";
import cors from "cors";

import db from "../db/connection";
=======
import  express, {Application}  from 'express';
>>>>>>> 2a6e1682e49db3f63a666719011f04397ae264c7

export class Server {

    private app: Application;
    private port: string;
<<<<<<< HEAD
    private apiPaths = {
        users: "/api/users"
    }

    constructor() {
=======

    constructor(){
>>>>>>> 2a6e1682e49db3f63a666719011f04397ae264c7

        this.app = express();
        this.port = process.env.PORT || '8000'; // If there's a mistake with port 8080 it will use the 8000

<<<<<<< HEAD
        // Initial methods:
        this.dbConection(); 
        this.middlewares();
        this.routes();
    }

    async dbConection(){
        try {
            await db.authenticate();
            console.log("Database online");
            
            
        } catch (error) {
            throw new Error;
        }

    }

    middlewares() {
        // CORS
        this.app.use( cors() ); 

        // Read of body
        this.app.use(express.json() ); //Express will parse the json

        //Public file
        this.app.use(express.static("public"));
    }

    routes() {
        this.app.use(this.apiPaths.users, userRoutes)
    }

    listen() {
        this.app.listen(this.port, (this.port, () => {
            console.log('Server running on port: ' + this.port);

        }))
=======

    }

    listen () {
        this.app.listen(this.port, ( this.port, () => {
            console.log('Server running on port' + this.port);
            
        }) )
>>>>>>> 2a6e1682e49db3f63a666719011f04397ae264c7
    }
}