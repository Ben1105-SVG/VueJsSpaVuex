<?php


namespace App\Repository\RepositoryInterfaces;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

interface UserRepositoryInterface
{
    /**
     * @param array $attributes
     * @return mixed
     */
    public function create(array $attributes);

    /**
     * @param array $details
     * @param $id
     * @return mixed
     */
    public function update(array $details, $id);
}
