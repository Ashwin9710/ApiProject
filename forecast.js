const mongoose = require('mongoose');
const db = "mongodb+srv://Ashwin9710:Lionelmessi10@cluster0-h7cw1.mongodb.net/Weather?retryWrites=true&w=majority";
//Note: The Highlighed yellow is your user name in Altas MongoDb.
//The highlighted red is your password
//The highlighted blue is your Database Name.

mongoose

.connect(db)

.then(()=> {

console.log("Connected to database");

}

)

.catch(()=> {

console.log("Error Connected to database");

}

)

 //A schema matched the table in your database

const forecastSchema = new mongoose.Schema({

    summary: { type: String},

    temperature: { type: String},

    windspeed:{ type: String}

    }

    );

 

    const forecast = mongoose.model('forecast', forecastSchema, 'currently');

    //The highlighted yellow is your table name. 

    module.exports = forecast;

