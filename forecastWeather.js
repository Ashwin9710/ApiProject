const axios = require('axios');
const express = require('express');
const app = express();
const forecast = require('./forecast');

const apikey = '455e3eb72d5313bf0326ebae2ad583f8';
const querystr = `https://api.darksky.net/forecast/455e3eb72d5313bf0326ebae2ad583f8/37.8267,-122.4233`;

app.get('/',(req,res) => {
    axios
    .get(querystr)
    .then(response => 
    {
        console.log(response);
        forecastValue = new forecast ({
        summary: response.data.currently.summary,
        temperature: response.data.currently.temperature,
        windspeed: response.data.currently.windSpeed
    });

   

    forecastValue

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