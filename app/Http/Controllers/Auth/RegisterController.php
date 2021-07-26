<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Jobs\MatchSendEmail;
use App\Models\User;
use App\Repository\Repositories\UserRepository;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    /**
     * @var UserRepository
     */
    private $userRepository;

    /**
     * RegisterController constructor.
     * @param UserRepository $repository
     */
    public function __construct(UserRepository $repository)
    {
        $this->userRepository = $repository;
    }
    /**
     * @param RegisterRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(RegisterRequest $request)
    {
        $user = $this->userRepository->create($request->all());
        return response()->json(['registerSuccess'=> true,'user_id'=>$user->id]);
    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function verify_email($id)
    {
        $this->userRepository->verify_email($id);
        return redirect("/login/".intval($id));
    }
}



