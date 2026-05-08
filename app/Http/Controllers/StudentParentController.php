<?php

namespace App\Http\Controllers;

use App\Models\StudentParent;
use App\Http\Requests\StoreStudentParentRequest;
use App\Http\Requests\UpdateStudentParentRequest;
use App\Http\Resources\StudentParentResource;

class StudentParentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
          $parents = StudentParent::all();
             return StudentParentResource::collection($parents);
    }

    /**
     * Store a newly created resource in storage.
     */
   public function store(StoreStudentParentRequest $request)
{
    $studentParent = StudentParent::create($request->validated());
    return new StudentParentResource($studentParent);
}

    /**
     * Display the specified resource.
     */
    public function show(StudentParent $studentParent)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStudentParentRequest $request, StudentParent $studentParent)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(StudentParent $studentParent)
    {
        //
    }
}
