<?php

namespace App\Providers;

use App\Repository\Repositories\BaseRepository;
use App\Repository\Repositories\UserRepository;
use App\Repository\RepositoryInterfaces\BaseRepositoryInterface;
use App\Repository\RepositoryInterfaces\UserRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvide extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(BaseRepositoryInterface::class, BaseRepository::class);
        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
