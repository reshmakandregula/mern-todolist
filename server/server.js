const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useCreateIndex: true
},(err) => {
    if(err){
        process.exit(1);
        console.log('unable to connect database');
    }
    else{
        console.log('successfully connected to the MongoDB');
    }
});

// const connection = mongoose.connection;
// connection.once('open', {} => {
//     console.log("MongoDb database connection established successfully");
// })

const userRouter = require('./routes/Users');


app.use(('/Users', userRouter));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});