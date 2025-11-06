const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

// Email transporter configuration
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

// POST /api/contact - Handle contact form submission
router.post('/',
    [
        body('name').trim().notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Valid email is required'),
        body('phone').optional().trim(),
        body('message').trim().notEmpty().withMessage('Message is required')
    ],
    async (req, res) => {
        // Validate input
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, phone, message } = req.body;

        try {
            // Email to company
            const mailOptions = {
                from: process.env.EMAIL_FROM,
                to: process.env.EMAIL_TO,
                subject: `New Contact Form Submission from ${name}`,
                html: `
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                    <hr>
                    <p><small>Sent from Salama Den Solutions website</small></p>
                `
            };

            // Auto-reply to customer
            const autoReplyOptions = {
                from: process.env.EMAIL_FROM,
                to: email,
                subject: 'Thank you for contacting Salama Den Solutions',
                html: `
                    <h2>Thank you for reaching out!</h2>
                    <p>Dear ${name},</p>
                    <p>We have received your message and will get back to you as soon as possible.</p>
                    <p><strong>Your message:</strong></p>
                    <p>${message}</p>
                    <br>
                    <p>Best regards,</p>
                    <p><strong>Salama Den Solutions Team</strong></p>
                    <p>Phone: 0728 995 929 | 0746 464 066</p>
                    <p>Website: <a href="http://www.salamaden.org">www.salamaden.org</a></p>
                `
            };

            // Send emails
            await transporter.sendMail(mailOptions);
            await transporter.sendMail(autoReplyOptions);

            res.status(200).json({
                success: true,
                message: 'Message sent successfully! We will contact you soon.'
            });

        } catch (error) {
            console.error('Email error:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to send message. Please try again or contact us directly.',
                error: error.message
            });
        }
    }
);

// GET /api/contact/info - Get contact information
router.get('/info', (req, res) => {
    res.json({
        phones: [
            '0728 995 929',
            '0746 464 066',
            '0716 250 355',
            '0721 635 875'
        ],
        email: 'info@salamaden.org',
        website: 'www.salamaden.org',
        address: 'Nairobi, Kenya',
        hours: {
            weekdays: 'Monday - Friday: 8:00 AM - 6:00 PM',
            saturday: 'Saturday: 9:00 AM - 2:00 PM',
            sunday: 'Closed'
        }
    });
});

module.exports = router;
