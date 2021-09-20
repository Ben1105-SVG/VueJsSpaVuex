<?php

namespace App\Http\Requests\Auth;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Hash;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
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
            'email'    => 'required|unique:users',
            'password' => 'required|confirmed'
        ];
    }
    public function messages()
    {
        return [
           'username.required'  => 'Username is required',
           'phone.required'     => 'Phone is required',
           'email.required'     => 'The email field is required',
           'email.unique'       => 'User with this email is already exists',
           'password.required'  => 'Password is required',
           'password.confirmed' => 'Please confirm the password'
        ];
    }
    public function getValidatorInstance()
    {
        $validator = parent::getValidatorInstance();
        if (!$validator->fails()) {
            $attributes = $this->except('_token','password_confirmation');
            $attributes['password'] = Hash::make($attributes['password']);
            $this->replace($attributes);
        }
     return $validator;
    }
    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success' => 0,
            'type' => 'error',
            'message' => $validator->errors()
        ], 422));
    }
}
