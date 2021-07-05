<?php


namespace App\Repository\Repositories;


use App\Models\User;
use App\Repository\RepositoryInterfaces\UserRepositoryInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class UserRepository extends BaseRepository implements UserRepositoryInterface
{
    public function __construct(User $model)
    {
        parent::__construct($model);
    }

    /**
     * @param array $attributes
     * @return User
     */
    public function create(array $attributes)
    {
        $this->model->create($attributes);
    }

}
