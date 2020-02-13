<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>LaravelReact</title>
        <link href="{{asset('css/app.css')}}" rel="stylesheet">
    </head>
    <body>
        <div id="root"></div>
        <script src="{{asset('js/app.js')}}" type="text/javascript"></script>
    </body>
</html>