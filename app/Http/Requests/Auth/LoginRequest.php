<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
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
            'email'    => 'required',
            'password' => 'required',
        ];
    }
    public function messages()
    {
        return [
            'email.required'     => 'The email field is required',
            'password.required'  => 'The password field is required',
        ];
    }
   public function getValidatorInstance()
   {
       $validator =  parent::getValidatorInstance();
        if (!$validator->fails()){
           $data = $this->except('_token');
           $this->replace($data);
        }
        return $this->validator;
   }
}
