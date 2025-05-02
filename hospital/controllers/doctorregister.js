const Doctor = require('../models/doctor');
const axios = require('axios');
const registerDoctor = async (req, res) => {
    try {
        const djangoResponse = await axios.post('http://localhost:8000/api/register/', req.body, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        res.send(djangoResponse.data);
      } catch (error) {
        console.log("**************************************************88")
        console.log(error)
        console.error('Error:', error.message);
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Request failed with status code:', error.response.status);
            console.error('Response data:', error.response.data);
          } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
          } else {
            // Something happened in setting up the request that triggered an error
            console.error('Error setting up request:', error.message);
          }
        res.status(500).send(error);
      }
    }

module.exports = { registerDoctor };
