<?php

namespace App\Http\Controllers;

use App\Repository\Repositories\UserRepository;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * @var UserRepository
     */
    protected $repository;

    /**
     * UserController constructor.
     * @param UserRepository $repository
     */
    public function __construct(UserRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function checkIfVerifiedEmail($id)
    {
        if ($this->userRepository->checkIfEmailIsVerified($id)){
            return response()->json(['verifiedEmail'=>'Your email is successfully verified']);
        }
        return \response()->json(['verifiedEmail'=>false]);
    }
}
