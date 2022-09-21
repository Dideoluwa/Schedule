const mailer = require("nodemailer");
const { Hello } = require("./hello_template");
const dotenv = require('dotenv');
dotenv.config()

const getEmailData = (to, name, template) => {
    let data = null;

    switch (template) {
        case "hello":
            data = {
                from: "Darasimi Oni <dideoluwaoni@gmail.com>",
                to,
                subject: `Hello ${name}`,
                html: Hello()
            }
            break;
        default:
            data;
    }
    return data;
}


const sendEmail = (to, name, type) => {

    let smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth: {
            user: 'darasimidideoluwa@gmail.com',
            pass: 'tocsxttxooendrxh'
        }
    })

    const mail = getEmailData(to, name, type)

    smtpTransport.sendMail(mail, function(error, response) {
        if(error) {
            console.log(error)
        } else {
            console.log( " email sent successfully")
        }
        smtpTransport.close();
    })


}

module.exports = { sendEmail }