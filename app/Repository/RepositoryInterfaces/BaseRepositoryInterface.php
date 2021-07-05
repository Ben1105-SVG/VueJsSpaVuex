<?php


namespace App\Repository\RepositoryInterfaces;


use Illuminate\Database\Eloquent\Model;

interface BaseRepositoryInterface
{
    public function create(array $attributes) ;
}
