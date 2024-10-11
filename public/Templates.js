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
   
       <h1>Job Application Submission</h1>
    <p>Name: {{name}}</p>
    <p>Email: {{email}}</p>
    <p>WhatsApp Number: {{whatsappNumber}}</p>
    <p>Total Experience: {{totalExperience}} years</p>
    <p>Last Degree: {{lastDegree}}</p>
    <p>Last Degree Completion Year: {{lastDegreeCompletionYear}}</p>
    <p>CGPA: {{cgpa}}</p>
    <p>Cover Letter: {{coverLetter}}</p>
    
</body>
</html>`;
