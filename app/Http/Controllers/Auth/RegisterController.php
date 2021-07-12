<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Repository\Repositories\UserRepository;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    private $userRepository;
    public function __construct(UserRepository $repository)
    {
        $this->userRepository = $repository;
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index()
    {
        return view('Auth/register');
    }

    /**
     * @param RegisterRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(RegisterRequest $request)
    {
        $this->userRepository->create($request->all());
        return response()->json(['registerSuccess'=> true]);
    }
}



