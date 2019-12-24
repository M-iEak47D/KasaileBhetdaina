<?php

namespace App\Http\Controllers\admin;

use App\Model\UserInfo;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function index(){

        return view('admin.user.index');
    }


    public function getJson(){
        $users = User::all();
        $count = 1;
        foreach ($users as $user){
            $user->count = $count;
            $user->date = $user->created_at->format('Y-M-d');
            $count++;
        }
        return datatables($users)->toJson();
    }


    public function store(Request $request){
//        dd($request);


        $request->validate([
            'name' => 'required|max:255',
            'phone' => 'required|min:10|numeric|unique:users',
            'email' => 'email',
            'role' => 'required',
            'password' => 'required|min:6|confirmed',
            'password_confirmation' => 'required|min:6',
            'mpin' => 'required|numeric',
        ]);


        $user = new User();
        $user->name = $request->name;
        $user->phone = $request->phone;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->mpin = $request->mpin;
        $return = $user->save();

        if($return){

            return response([
                'status' => 'success',
                'title' => 'Successfully Added.',
                'text' => 'User Successfully Added to Your List!!',
            ]);
        }else{
            return response([
                'status' => 'error',
                'title' => 'Error!!',
                'text' => 'Error While Adding!!',
            ]);

        }
    }

    public function edit($id){

        $user = User::find($id);
        return view('admin.user.edit', compact('user'));
    }


    public function changeStatus($id){

        $user = User::find($id);
        if($user->status == 1){
            $user->status = 0;
        }else{
            $user->status = 1;
        }
        $return = $user->update();

        if($return){

            return response([
                'status' => 'success',
            ]);
        }
    }

    public function addUserInfo($id){

        $user = User::find($id);
//        dd($user->userInfo);
        if($user->userInfo == null){
            UserInfo::create([
                'user_id' => $user->id,
            ]);
        }
        $userInfo = $user->userInfo;
        return view('admin.user.userinfo', compact('userInfo'));
    }


    public function storeUserInfo(Request $request){

        $user = UserInfo::where('id', $request->user_info_id)->first();
        $user->gender = $request->gender;
        $user->DOB = $request->DOB;

        if ($request->hasFile('image'))
        {

            $img=$request->image;
            $fileName=time().".".$img->getClientOriginalExtension();
            $destinationPath=public_path('user/profile/');
            $img->move($destinationPath, fileName);
            $user->profile_image='user/profile/'.$fileName;

        }
        $return = $user->update();

        if($return){

            return response([
                'status' => 'success',
                'title' => 'Successfully Updated.',
                'text' => 'User Successfully Updated From  Your List!!',
            ]);
        }else{
            return response([
                'status' => 'error',
                'title' => 'Error!!',
                'text' => 'Error While Updating!!',
            ]);

        }
    }
}


