<?php


namespace App\Repository\Repositories;

use App\Models\User;
use App\Repository\RepositoryInterfaces\BaseRepositoryInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

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

    /**
     * @param array $details
     * @param $id
     * @return mixed|void
     */
    public function update( array $details,$id)
    {
        $this->model->find($id)->update($details);
    }

    /**
     * @param $user_id
     * @return mixed|void
     */
    public function selectWithUserOrWithout($user_id = null)
    {
        if ($user_id){
            return $this->model->where('user_id','=',$user_id)->get();
        }
        return $this->model->all();
    }
    public function select()
    {
        return $this->model->all();
    }


    /**
     * @param $id
     * @return mixed
     */
    public function destroy($id)
    {
        return $this->model->find($id)->delete();
    }

}
