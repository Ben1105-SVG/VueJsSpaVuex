<?php


namespace App\Repository\RepositoryInterfaces;


use App\Models\User;

interface UserRepositoryInterface
{
    /**
     * @param array $attributes
     * @return mixed
     */
    public function create(array $attributes);

}
