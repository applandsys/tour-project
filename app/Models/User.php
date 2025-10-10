<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($user) {
            $user->unique_id = "GT".self::generateUniqueId();
        });
    }

    private static function generateUniqueId()
    {
        do {
            $uniqueId = rand(10000, 99999); // 5 digit random number
        } while (self::where('unique_id', $uniqueId)->exists());

        return $uniqueId;
    }

//    public function referredUsers()
//    {
//        return $this->hasMany(User::class, 'referrer', 'id')
//            ->with(['purchasePackages', 'referredUsers']);
//    }

    public function referredUsers()
    {
        return $this->hasMany(User::class, 'referrer', 'id')
            ->with(['purchasePackages', 'referredUsers']);
    }

    /**
     * Recursively collect all referred users with their level.
     */
    public function getReferralsWithLevel($level = 1)
    {
        $referrals = collect();

        foreach ($this->referredUsers as $referral) {
            // Attach level info
            $referral->level = $level;

            // Add current referral
            $referrals->push($referral);

            // Recursively collect child referrals
            $referrals = $referrals->merge(
                $referral->getReferralsWithLevel($level + 1)
            );
        }

        return $referrals;
    }


    public function referrerUser()
    {
        return $this->belongsTo(User::class, 'referrer');
    }

    public function purchasePackages()
    {
        return $this->hasMany(PurchasePackage::class, 'user_id', 'id');
    }


    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'transaction_password',
        'selected_currency',
        'selected_country',
        'selected_language',
        'phone',
        'unique_id',
        'referrer',
        'otp_verified',
        'is_franchaise'
    ];


    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
