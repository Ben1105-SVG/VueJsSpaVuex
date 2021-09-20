<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\UserRequest;
use App\Jobs\MatchSendEmail;
use App\Repository\Repositories\UserRepository;


class ProfileController extends Controller
{
    /**
     * @var UserRepository
     */
    private $userRepository;

    /**
     * ProfileController constructor.
     * @param UserRepository $repository
     */
    public function __construct(UserRepository $repository)
    {

        $this->userRepository = $repository;
    }

    /**
     * @param UserRequest $request
     * @param $id
     */
    public function update(UserRequest $request, $id)
    {
        $data = $request->except(['avatar', 'image']);
        if ($request->image){
            $data['avatar'] = $request->image;
        }
        $this->userRepository->update($data,(integer)$id);
        return response()->json(['success'=>'Your profile was successfully changed'],200);
    }

}
