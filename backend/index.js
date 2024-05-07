import express from 'express';
import { PORT } from './config.js';
import mongoose from 'mongoose';
import { MONGO_URL } from './config.js';
import booksRoute from './routes/booksRoute.js'
import userRoute from './routes/userRoute.js'
import cors from 'cors'

const app = express();

//parse json
app.use(express.json());

app.use(cors());

app.use('/register', userRoute);

app.use('/books', booksRoute);

//connect to mongodb database : Dbase
mongoose.connect(MONGO_URL).then(()=>{
    console.log('successfully connected to the Dbase');
    app.listen(PORT , () =>{
        console.log(`server running on port :${PORT}`);
    });
}).catch((error)=>{
    console.log(error);
});

function newFunction() {
    return require("cors");
}

