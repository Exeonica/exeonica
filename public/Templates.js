export const contactUs = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Contact Form Submission</title>
</head>
<body>
    <h1>Contact Form Submission</h1>
    <p>Name: {{name}}</p>
    <p>Email: {{email}}</p>
    <p>Message: {{message}}</p>
</body>
</html>`;

export const applicationTemp = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job Application - {{ name }}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
        }
        h1 {
            text-align: center;
        }
        p {
            margin-bottom: 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Job Application</h1>
        <p>Dear {{ name }},</p>
        <p>I am writing to express my keen interest in the {{ jobTitle }} position advertised on {{ companyName }}.</p>
        <p>With {{ totalExp }} years of experience in this job, I am confident in my ability to contribute significantly to your team.</p>
        <p>My last degree was {{ lastDegree }} which I completed in {{ degreeCompletionYear }} with a GPA of {{ gpa }}.</p>
        <p>I have attached my resume and a cover letter for your review.</p>
        <p>Thank you for your time and consideration.</p>
        <p>Sincerely,</p>
        <p>{{ name }}</p>
        <p>Email: {{ email }}</p>
        <p>WhatsApp: {{ whatsappNo }}</p>
    </div>
</body>
</html>`;
