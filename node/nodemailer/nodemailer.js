import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
// const nodemailer = require("nodemailer");

async function main() {
  const hostname = "smtp.cloudmta.net";
  const username = "c3131b2f948c506d";
  const password = "PtHuCZpcbSWqfKcUgfcFFqC7";

  const transporter = nodemailer.createTransport({
    host: hostname,
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: username,
      pass: password,
    },
    logger: true
  });

    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Sender Name" <from@example.net>',
        to: "ojedavd@example.com",
        subject: "Hello from node",
        text: "Hello world?",
        html: "<strong>Hello world?</strong>",
        headers: { 'x-myheader': 'test header' }
      });
    
      console.log("Message sent: %s", info.response);
    }