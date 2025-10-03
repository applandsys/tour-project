<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'GlobalTripsSITE') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
     @viteReactRefresh
    @vite(['resources/js/app.jsx'])
    @inertiaHead

{{--    <link rel="stylesheet" href="{{ asset('build/assets/app-Bjo5siv0.css') }}">--}}
{{--    <script type="module" src="{{ asset('build/assets/app-D_cNdYQ0.js') }}"></script>--}}
</head>
<body class="font-sans antialiased">
@inertia
</body>
</html>
