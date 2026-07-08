const express = require('express');
const mailgun = require('mailgun-js');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mailgunClient = mailgun({
    apiKey: 'YOUR_MAILGUN_API_KEY',
    domain: 'YOUR_MAILGUN_DOMAIN'
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    const emailData = {
        from: email,
        to: 'YOUR_RECEIVING_EMAIL',
        subject: `Contact Form Submission from ${name}`,
        text: message
    };

    mailgunClient.messages().send(emailData, (error, body) => {
        if (error) {
            console.error(error);
            res.json({ success: false });
        } else {
            res.json({ success: true });
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
