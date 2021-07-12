<?php

namespace App\Http\Requests\Auth;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Intervention\Image\Facades\Image;
use function Symfony\Component\Translation\t;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'username' => 'required',
            'phone'    => 'required',
            'email'    => 'required|unique:users,email,'.$this->id
        ];
    }

    /**
     * @return string[]
     */
    public function messages()
    {
        return [
            'username.required'  => 'Username is required',
            'phone.required'     => 'Phone is required',
            'email.required'     => 'The email field is required',
            'email.unique'       => 'User with this email is already exists',
        ];
    }

    /**
     * @return Validator
     */
    public function getValidatorInstance()
    {
        $validator = parent::getValidatorInstance();
        if (!$validator->fails()) {
            if ($this->file('avatar')){
                $name = uniqid() . ".".$this->file('avatar')->extension();
                $this->file('avatar')->storeAs('public/avatars',$name);

                $this->merge(['image' => $name]);
            }
        }
        return $validator;
    }

    /**
     * @param Validator $validator
     */
    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success' => 0,
            'type' => 'error',
            'message' => $validator->errors()
        ], 422));
    }
}
