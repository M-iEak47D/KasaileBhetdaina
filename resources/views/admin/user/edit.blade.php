

<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title mt-0">Update User</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form id="eduFormUpdate" method="post">
                <input type="hidden" value="{{ $user->id }}" name="user_id">
                <div class="form-group">
                    <label>Full Name*</label>
                    <input type="text" class="form-control" value="{{ $user->name }}" name="name" required placeholder="Enter Full Name"/>
                    @if ($errors->has('name'))
                        <span class="help-block"><strong style="color:red;">{{ $errors->first('name') }}</strong></span>
                    @endif
                </div>
                <div class="form-group">
                    <label>Phone*</label>
                    <input type="text" class="form-control" value="{{ $user->phone }}" name="phone" required placeholder="Enter Phone"/>
                    @if ($errors->has('phone'))
                        <span class="help-block"><strong style="color:red;">{{ $errors->first('phone') }}</strong></span>
                    @endif
                </div>
                <div class="form-group">
                    <label>Email(optonal)</label>
                    <input type="email" value="{{ $user->email }}" class="form-control" name="email" placeholder="Enter Email"/>
                    @if ($errors->has('email'))
                        <span class="help-block"><strong style="color:red;">{{ $errors->first('email') }}</strong></span>
                    @endif
                </div>
                <div class="form-group">
                    <label>Mpin*</label>
                    <input type="number" value="{{ $user->mpin }}" class="form-control" name="mpin" placeholder="Enter Mpin"/>
                    @if ($errors->has('mpin'))
                        <span class="help-block"><strong style="color:red;">{{ $errors->first('mpin') }}</strong></span>
                    @endif
                </div>
                <div class="form-group">
                    <label>Password*</label>
                    <input type="pasword" class="form-control" name="password"  placeholder="Enter Password"/>
                    @if ($errors->has('pasword'))
                        <span class="help-block"><strong style="color:red;">{{ $errors->first('pasword') }}</strong></span>
                    @endif
                </div>
                <div class="form-group">
                    <label>Password Confirmation*</label>
                    <input type="text" class="form-control" name="password_confirmation"  placeholder="Enter Passwor"/>

                </div>



                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label>Quiz Time</label>
                            <select class="custom-select" name="role">
                                <option selected="">Select Role</option>
                                <option value="1">User</option>
                                <option value="2">Admin</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label>Status</label>
                            <br>
                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-light active">
                                    <input type="radio" name="status" value="1" id="option1" checked> Active
                                </label>
                                <label class="btn btn-light">
                                    <input type="radio" name="status" value="0" id="option2"> Radio
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="form-group">
                    <button type="submit" id="eduFormUpdate" class="btn btn-danger waves-effect waves-light pull-right">Submit</button>
                </div>
            </form>
        </div>
    </div><!-- /.modal-content -->
</div><!-- /.modal-dialog -->
<script>
    jQuery(document).ready(function(){
        $('.summernote').summernote({
            height: 150,                 // set editor height
            minHeight: null,             // set minimum height of editor
            maxHeight: null,             // set maximum height of editor
            focus: true                 // set focus to editable area after initializing summernote
        });
    });
</script>
