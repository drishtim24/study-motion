const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try {
        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
          },
        });
    
        // console.log(`${email}`, typeof "gopi");
        // email = "gopy@gmail.com"
    
        let info = await transporter.sendMail({
          from: "GOPI YADAV",
          to: `${email}`,
          subject: `${title}`,
          html: `${body}`,
        });
    
        return info;
      } catch (error) {
        console.log(error.message);
      }
}


module.exports = mailSender;