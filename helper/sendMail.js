const nodemailer = require("nodemailer");
const config = require('../configs/config')

const transporter = nodemailer.createTransport({
    host: config.Host,
    port: config.Port,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: config.Username,
        pass: config.Password,
    },
});

// async..await is not allowed in global scope, must use a wrapper
module.exports = async function(message, email, url) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
      to: email, // list of receivers
      subject: "Hello ✔", // Subject line
      text: message, // plain text body
      html: `<a href="${url}">${message}</a>`,
    });

    console.log("Message sent: %s", info.messageId);
};