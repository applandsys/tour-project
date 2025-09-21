<?php

namespace App\Providers;

use App\Models\WalletBalance;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        Inertia::share([
            // share wallet balance for the logged-in user
            'walletBalance' => fn () =>
            Auth::check()
                ? WalletBalance::where('user_id', Auth::id())
                ->latest()
                ->first()
                : null,
        ]);
    }
}
