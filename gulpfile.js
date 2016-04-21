var elixir = require('laravel-elixir');
var BrowserSync = require('laravel-elixir-browsersync2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
	mix.sass('app.scss','./public/assets/vendor/bootstrap/bootstrap.min.css');
    mix.sass('./public/assets/css/sass/main.scss','./public/assets/css/build/style.min.css');
    BrowserSync.init();
	mix.BrowserSync(
	{
  		files: ["public/assets/css/sass/*.scss"],
		proxy : "localhost:8000",
		port: 80,
		ui: {
            port: 81
        },
        logPrefix		: "Laravel Eixir BrowserSync",
        logConnections	: false,
        reloadOnRestart : false,
        notify 			: false
	});
});
