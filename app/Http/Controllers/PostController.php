<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Models\Post;
use App\Repository\Repositories\PostRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class PostController extends Controller
{
    /**
     * @var PostRepository
     */
    private $repository;

    /**
     * PostController constructor.
     * @param PostRepository $repository
     */
    public function __construct(PostRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
       return response()->json($this->repository->selectWithUserOrWithout(auth()->id()));
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function selectAll()
    {
        return response()->json($this->repository->selectWithUserOrWithout());
    }

    /**
     * @param PostRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(PostRequest $request)
    {
        $this->repository->create($request->all());
        return response()->json(['success'=>'Your post was successfully created'],200);
    }

    /**
     * @param Request $request
     * Destroy post
     */
    public function destroy(Request $request)
    {
        $this->repository->destroy($request->id);
        return response()->json(['success'=>"Post was successfully destroyed"]);
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->repository->show($id);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request)
    {
        return response()->json($this->repository->update($request->all(),$request->id));
    }
}
