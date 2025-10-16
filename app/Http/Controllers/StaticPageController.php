<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StaticPageController extends Controller
{
    public function BusinessPresentation() {
        return Inertia::render('User/BusinessPresentation', [
            'stats' => [],
        ]);
    }

    public function VideoTutorial() {
        return Inertia::render('User/VideoTutorial', [
            'stats' => [],
        ]);
    }
}
