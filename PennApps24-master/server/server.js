import 'dotenv/config';
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
        maxAge: 24*60*60*1000
    }
}))
app.use(passport.initialize());
app.use(passport.session());

// console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("mongoDB connected successfully")
}).catch(err => {
    console.log(err);
})

import User from "./models/userModel.js";
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.post("/api/newUser", (req, res) => {
    console.log("new user!")
    console.log(req.body);
    const email = req.body.email;
    const fName = req.body.firstName;
    const lName = req.body.lastName;
    const number = req.body.mobileNumber;

    const newUser = new User({
        username: email,
        number: number,
        firstName: fName,
        lastName: lName
    })

    User.register(newUser, req.body.password, function(err, user) {
        if(err) {
            console.log(err);
            console.log("couldn't register")
            res.redirect("/");
        } else {
            passport.authenticate("local")(req, res, function() {
                res.redirect("/news");
            })
        }
    })
})

app.post("/api/login", passport.authenticate('local', {failureMessage: true}), (req, res) => {
    console.log("successful authentication/login")
    console.log(req.user)
    res.send(req.user);
})


app.get("/api/home", (req, res) => {
    res.json({message: "Hello World"});
})

app.listen(PORT, (req,res) => {
    console.log("server started on port " + PORT);
})