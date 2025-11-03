<?php
namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendOtpMail extends Mailable
{
    use Queueable, SerializesModels;

    public $user;
    public $realPass;
    public $otp;

    public function __construct($user,$realPass,$otp)
    {
        $this->user = $user;
        $this->realPass = $realPass;
        $this->otp = $otp;
    }

    public function build()
    {
        return $this->subject('Your OTP Code for GlobalTrips24.com')
            ->view('emails.otp')
            ->with([
                'user' => $this->user,
                'realPass' => $this->realPass,
                'otp' => $this->otp,
            ]);
    }
}
