<?php
namespace App\Providers;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class BladeServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Blade::directive('vite', function ($expression) {
            return "<?php echo mix($expression); ?>";
        });
    }
}
