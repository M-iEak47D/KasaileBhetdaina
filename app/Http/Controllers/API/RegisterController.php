<?php

namespace App\Http\Controllers\API;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RegisterController extends Controller
{
    public function store(Request $request){






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
        $userID = $request->user_id;
        $user = User::find($userID);
        if($user->userOTP->otp == $request->otp){
            return response([
                'status' => 'success',
                'message' => 'OTP Successfully Match.',
                'user_id' => $user->id,
            ]);
        }else{
            return response([
                'status' => 'error',
                'message' => 'OTP cannot Match.',
                'user_id' => $user->id,
            ]);
        }

    }

    public function savePassword(Request $request){
        $user_id = $request->user_id;
        $user = User::find($user_id);
        $user->password = bcrypt($request->passowrd);
        $success = $user->update();

        if($success){

            $accessToken = $user->createToken('authToken')->accessToken;

            return response(['user' => auth()->user(), 'access_token' => $accessToken]);
        }else{
            return response([
                'msg' => 'False',
            ]);
        }
    }
}
