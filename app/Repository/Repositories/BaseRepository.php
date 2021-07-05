<?php


namespace App\Repository\Repositories;

use App\Repository\RepositoryInterfaces\BaseRepositoryInterface;
use Illuminate\Database\Eloquent\Model;

class BaseRepository implements BaseRepositoryInterface
{
    /**
     * @var Model
     */
    public $model;

    /**
     * BaseRepository constructor.
     * @param Model $model
     */
    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    /**
     * @param array $attributes
     */
    public function create(array $attributes)
    {
        $this->model->create($attributes);
    }

}
