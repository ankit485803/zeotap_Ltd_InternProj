

const express = require('express');
const mongoose = require('mongoose');
const { fetchWeather } = require('./weatherService');
const { scheduleWeatherUpdates } = require('./alerts');

const app = express();
const PORT = process.env.PORT || 3000;




// Connect to MongoDB
mongoose.connect('mongodb://localhost/weather', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB connected successfully!');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the process if the connection fails
});










// API endpoint to fetch weather data
app.get('/api/weather/:city', async (req, res) => {
    try {
        const weatherData = await fetchWeather(req.params.city);
        res.json(weatherData);
    } catch (error) {
        res.status(500).send('Error fetching weather data');
    }
});



// API endpoint to fetch alerts
app.get('/api/weather/alerts', async (req, res) => {
    // Fetch alerts from the database (assuming an Alert model is set up)
    const alerts = await Alert.find(); // You'll need to create the Alert model
    res.json(alerts);
});







// our app is listening 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    scheduleWeatherUpdates(); // Start weather updates
});
