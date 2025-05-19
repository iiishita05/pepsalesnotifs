const nodemailer = require("nodemailer");

let transporter;

async function createTransporter() {
  if (!transporter) {
    const testAccount = await nodemailer.createTestAccount();

    transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  }
  return transporter;
}

async function sendEmail(to, subject, text) {
  const transporter = await createTransporter();

  const info = await transporter.sendMail({
    from: '"Notification Service" <no-reply@ethereal.email>',
    to,
    subject,
    text,
  });

  console.log(
    "Email sent! Preview : %s",
    nodemailer.getTestMessageUrl(info)
  );
}

module.exports = sendEmail;
