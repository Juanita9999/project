const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail', // or another email service
    auth: {
        user: 'juanitajidai@gmail.com',
        pass: '30-06-2023',
    },
});

app.post('/subscribe', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send('Email is required');
    }

    // Send email to example@email.com
    const mailOptions = {
        from: 'juanitajidai@gmail.com',
        to: 'mamzajuanita@gmail.com',
        subject: 'New Subscription',
        text: `You have a new subscriber: ${email}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email');
        }

        // Send confirmation email to subscriber
        const replyOptions = {
            from: 'juanitajidai@gmail.com',
            to: email,
            subject: 'Thank you for subscribing!',
            text: 'Thank you for subscribing to our newsletter!',
        };

        transporter.sendMail(replyOptions, (error, info) => {
            if (error) {
                return res.status(500).send('Error sending confirmation email');
            }

            res.status(200).send('Subscription successful');
        });
    });
});

const PORT = process.env.PORT || 5501;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
