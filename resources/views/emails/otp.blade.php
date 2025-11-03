<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>OTP Verification - Global Trips</title>
    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
            background-color: #f9fafb;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            background: #ffffff;
            margin: 40px auto;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            padding: 20px 30px;
        }
        h2 {
            color: #1a73e8;
        }
        .otp-box {
            background: #f0f4ff;
            border: 1px solid #d0e0ff;
            padding: 15px;
            border-radius: 6px;
            font-size: 18px;
            text-align: center;
            font-weight: bold;
            color: #1a73e8;
            letter-spacing: 2px;
            margin: 20px 0;
        }
        .user-info {
            background: #f8f9fa;
            padding: 10px 15px;
            border-left: 4px solid #1a73e8;
            margin-bottom: 20px;
            border-radius: 6px;
        }
        .footer {
            font-size: 13px;
            color: #777;
            text-align: center;
            margin-top: 30px;
        }
    </style>
</head>
<body>
<div class="email-container">
    <h2>OTP Verification - Global Trips</h2>

    <div class="user-info">
        <p><strong>User Name:</strong> {{ $user->name }}</p>
        <p><strong>Email:</strong> {{ $user->email }}</p>
        <p><strong>GT ID:</strong> {{ $user->unique_id }}</p>
        <p><strong>Password:</strong> {{ $realPass->encrypted_password }}</p>
    </div>

    <p>Hello {{ $user->name }},</p>
    <p>Use the OTP code below to verify your account.</p>

    <div class="otp-box">
        {{ $otp }}
    </div>

    <p>This code will expire in <strong>10 minutes</strong>. Please do not share it with anyone.</p>

    <div class="footer">
        <p>Thank you for choosing <strong>Global Trips</strong>.<br>
            If you didn’t request this code, please ignore this email.</p>
    </div>
</div>
</body>
</html>
