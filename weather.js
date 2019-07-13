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

const weatherSchema = new mongoose.Schema({

    country: { type: String},

    latitude: { type: String},

    longitude:{ type: String}

    }

    );

 

    const weather = mongoose.model('weather', weatherSchema, 'location');

    //The highlighted yellow is your table name. 

    module.exports = weather;

