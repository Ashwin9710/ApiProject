const axios = require('axios');
const express = require('express');
const app = express();
const weather = require('./weather');

const apikey = '46ab02210ffd4c08b7211554191706';
const q = 'Kuala Lumpur';
const querystr = `http://api.apixu.com/v1/current.json?key=${apikey}&q=${q}`;

app.get('/',(req,res) => {
    axios
    .get(querystr)
    .then(response => 
    {
        console.log(response);
        weatherValue = new weather ({
        country: response.data.location.country,
        latitude: response.data.location.lat,
        longitude: response.data.location.lon
    });

   

    weatherValue

    .save()

    .then((result) => {

    console.log("Success" + result);

    }

    )

    .catch ((error)=> {

    console.log("Error" + error);

    }

    );
        
    })
    .catch(error => 
    {
        res.send('Error');
    });    
});

app.listen(5000,()=>
{
    console.log('Server listening to post 5000')
});
