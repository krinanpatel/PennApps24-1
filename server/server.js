import express from "express";
import cors from "cors";
import session from "express-session";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import passport from "passport";
import path from "path";

const PORT = 4000;
const __dirname = path.resolve();
const app = express();
const corsOptions = { origin: `http://localhost:3000`, credentials: true};

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'fillersecret',
    resave: true,
    saveUninitialized: true,
    cookie: {
        // sameSite: "none",
        // secure: true,
        maxAge: 24*60*60*1000
    }
}))
app.use(passport.initialize());
app.use(passport.session());


app.get("/api/home", (req, res) => {
    res.json({message: "Hello World"});
})

app.listen(PORT, (req,res) => {
    console.log("server started on port " + PORT);
})