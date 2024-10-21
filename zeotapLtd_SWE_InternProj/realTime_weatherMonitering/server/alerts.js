


const cron = require('node-cron');
const { fetchWeather } = require('./weatherService');
const nodemailer = require('nodemailer');

const cities = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad'];
const tempThreshold = 35; // Example threshold





const scheduleWeatherUpdates = () => {
    cron.schedule('*/5 * * * *', async () => {
        for (const city of cities) {
            const weatherData = await fetchWeather(city);
            checkAlerts(weatherData);
        }
    });
};

const checkAlerts = (data) => {
    const temp = data.main.temp - 273.15; // Convert Kelvin to Celsius
    if (temp > tempThreshold) {
        sendAlert(data);
    }
};




const sendAlert = (data) => {
    console.log(`Alert! ${data.name}: Temperature ${data.main.temp - 273.15}°C exceeds threshold.`);
    // Set up nodemailer here if you want to send emails
};






module.exports = { scheduleWeatherUpdates };
