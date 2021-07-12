<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Auth;

class PostRequest extends FormRequest
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
            'content'   => 'required',
            'image'     => 'required'
        ];
    }

    public function messages()
    {
        return [
            'content.required' => 'Content is required',
            'image.required' => 'Image is required'
        ];
    }

    /**
     * @return Validator
     */
    public function getValidatorInstance()
    {
        $validator = parent::getValidatorInstance();
        if (!$validator->fails()) {
            $attributes = $this->all();
            if ($this->image) {
                $image_parts = explode(";base64,", $this->image);
                if (isset($image_parts[1])) {
                    $image_type_aux = explode("image/", $image_parts[0]);
                    $image_type = $image_type_aux[1];
                    $image_base64 = base64_decode($image_parts[1]);
                    $image_name = uniqid() . '.' . $image_type;
                    $image_path = '/app/public/Post-avatars/';
                    $file = storage_path() . $image_path . $image_name;
                    file_put_contents($file, $image_base64);
                    $attributes['image'] = $image_name;
                }
            } else {
                $attributes['image'] = null;
            }
            $this->replace($attributes);
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
