/*import {saying_hi, dire_aurevoir} from './utlis.js';

saying_hi();

dire_aurevoir();
*/

import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import motivateRoute from './routes/motivate.js';
import helmet from "helmet";

const App = express();
App.use(morgan('dev'));
App.use(helmet());
App.use(express.json());

mongoose.connect(`mongodb://root:root@127.0.0.1:27017/mydatabase`, {
    useNewUrlParser: true
}, (error) => {
    if(error){
        console.log(`error:`+error);

    }else{
        console.log("DB connect");
    }
});

App.get('/', (req,res)=>{
    res.send("<h1> C'EST BON</h1>");
});

App.use('/api/motivate', motivateRoute);

const PORT = 6546;

App.listen(PORT, ()=>{
    console.log(`server ready, http://localhost:${PORT}`);
});

