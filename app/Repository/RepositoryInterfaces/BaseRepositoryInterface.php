<?php


namespace App\Repository\RepositoryInterfaces;

use Illuminate\Database\Eloquent\Model;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

interface BaseRepositoryInterface
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
    public function update( array $details,$id);

    /**
     * @param null $user_id
     * @return mixed
     */
    public function selectWithUserOrWithout($user_id = null);

    /**
     * @param $id
     * @return mixed
     */
    public function destroy($id);

    /**
     * @param $id
     * @return mixed
     */
    public function show($id);

}
