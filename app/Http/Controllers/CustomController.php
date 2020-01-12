<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
class CustomController extends Controller
{
    private function getToken($phone, $password)
    {
        // dd($phone);
        $user = User::where('phone',$phone)->first();
        try {
            if (!$token = JWTAuth::fromUser($user, )) {
                return response()->json([
                    'response' => 'error',
                    'message' => 'Password or email is invalid',
                    'token'=>$token
                ]);
            }
        } catch (JWTException $e) {
            return response()->json([
                'response' => 'error',
                'message' => 'Token creation failed',
            ]);
        }
        return $token;
    }
    public function store(Request $request){
        return response([
            'status' => 'success',
            'message' => 'Check Your Mobile Inbox for OTP.',
            'user_id' => 7,
        ]);
//        check user exist or not
        $checkUser = User::where('phone', $request->phone)->first();
        if ($checkUser){
            $response = $this->checkUser($checkUser);
            return $response;
            }
        $user = new User();
        $user->name = $request->name;
        $user->phone = $request->phone;
        $userStoreReturn = $user->save();
        if ($userStoreReturn){
            $genOTP = substr(number_format(time() * rand(),0,'',''),0,6);
            $user->userOTP()->create([
                'user_id' => $user->id,
                'otp' => $genOTP,
            ]);
            $smsOTP = "http://api.allstarsms.com/?username=demo&password=allstar123&from=Allstar&to=".$user->phone."&text=".$genOTP."&type=1";
            $curl = curl_init();
        curl_setopt($curl,CURLOPT_URL, $smsOTP);
        $sms_response = curl_exec($curl);
        curl_close($curl);
        $sms_server_response =  json_decode($sms_response);
            if($sms_server_response){
                return response([
                    'status' => 'success',
                    'message' => 'Check Your Mobile Inbox for OTP.',
                    'user_id' => $user->id,
                ]);
            }
        }else{
            return response([
                'status' => 'error',
                'message' => 'Somethings went error!!! please try again later',
            ]);
        }
        return response([
            'status' => 'error',
            'message' => 'Somethings went error!!! please try again later',
        ]);
    }
    public function checkUser($checkUser){
//        check user is verified or not
            if ($checkUser->user_verified_at == null){
//                opt server request
                $smsOTP = "http://api.allstarsms.com/?username=demo&password=allstar123&from=Allstar&to=".$checkUser->phone."&text=".$checkUser->userOTP()->otp."&type=1";
                $curl = curl_init();
                curl_setopt($curl,CURLOPT_URL, $smsOTP);
                $sms_response = curl_exec($curl);
                curl_close($curl);
                $sms_server_response =  json_decode($sms_response);
                if($sms_server_response){
                    return response([
                        'status' => 'success',
                        'message' => 'Check Your Mobile Inbox for OTP.',
                        'user_id' => $checkUser->id,
                    ]);
                }
            }else{
                return response([
                    'status' => 'error',
                    'message' => 'Your Phone Number Already Exist!!!',
                    'user_id' => $checkUser->id,
                ]);
            }
    }
    public function validateOTP(Request $request){
//        dd($request);
        if($request->user_id){
            $userID = $request->user_id;
            $user = User::find($userID);
            if($user) {
                if ($user->userOTP->otp == $request->otp) {
                    return response([
                        'status' => 'success',
                        'message' => 'OTP Successfully Match.',
                        'user_id' => $user->id,
                    ]);
                } else {
                    return response([
                        'status' => 'error',
                        'message' => 'OTP cannot Match.',
                        'user_id' => $user->id,
                    ]);
                }
            }else {
                return response([
                    'status' => 'error',
                    'message' => 'No User Found !!!',
                    'user_id' => null,
                ]);
            }
        }else{
            return response([
                'status' => 'error',
                'message' => 'No User Found !!!',
                'user_id' => null,
            ]);
        }
    }
    public function savePassword(Request $request){
        
        $user_id = $request->user_id;
        $user = User::find($user_id);
        $user->password = bcrypt($request->passowrd);
        $success = $user->update();
        if($success){
            $token = self::getToken($request->phone, $request->password);
            return($token);
            return(strlen($token));
            // generate user token
            if (!is_string($token)){
                return response()->json([
                    'status'=>'error',
                    'message'=>'Token generation failed',
                    'uer_id' => null,
                ], 201);
            }
            $user->remember_token = $token;
            $user->update();
            return response([
                'status' => 'success',
                'message' => 'User Successfully Register',
                'name' =>$user->name,
                'user_id' => $user->id,
                'auth_token' => $token,
            ]);
        }else{
            return response([
                'msg' => 'False',
            ]);
        }
    }
}
