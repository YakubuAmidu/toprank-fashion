import path from "path";
import express from "express";
import dotenv from 'dotenv';
import morgan from "morgan";
import cookieParser from "cookie-parser";

import connectedDB from './config/db.js';

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get("/test", (req, res) => {
    res.send("Hello world...😃");
})

app.listen(port, () => {
console.log(`Server running on port ${port}...😊`)
connectedDB();
});
