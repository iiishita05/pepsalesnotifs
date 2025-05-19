 1. Assumptions
The following are assumptions we're making in this notification system:

User-Related
The users are already registered within the system.

User information contains:

name

email

phone

Notification Behavior
Notification types: email, sms, and in-app only.

For in-app notifications,save them in MongoDB.

For email,assume Gmail SMTP through Nodemailer.

For SMS,  assume Twilio is configured with a test number.

General
No authentication/authorization is implemented.

All notification sends are asynchronous .

This is a minimal MVP .

