// cronJobs/weatherReportCron.js
const cron = require('node-cron');
const User = require('../models/User');
const weatherService = require('../services/weatherService');
const emailService = require('../services/emailService');

cron.schedule('0 */3 * * *', async () => {
  console.log('Cron job started');
  const users = await User.find();
  users.forEach(async (user) => {
    const weatherData = await weatherService.getWeatherData(user.location);
    const weatherReport = `Current weather in ${user.location}: ${weatherData.weather[0].description}, temperature: ${weatherData.main.temp}K`;
    emailService.sendEmail(user.email, 'Hourly Weather Report', weatherReport);
    console.log(`Sent weather report to ${user.email}`);
  });
});
