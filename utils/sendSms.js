const twilio = require('twilio');
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

module.exports = async function sendSms(to, msg) {
    await client.messages.create(
        { 
            body: msg, 
            
            
            from: process.env.TWILIO_PHONE_NUMBER,
             to: to }
    ); 
};