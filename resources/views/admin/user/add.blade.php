<div class="modal fade addnew" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title mt-0">New User</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="eduForm" method="post">
                    <div class="form-group">
                        <label>Full Name*</label>
                        <input type="text" class="form-control" name="name" required placeholder="Enter Full Name"/>
                        @if ($errors->has('name'))
                            <span class="help-block"><strong style="color:red;">{{ $errors->first('name') }}</strong></span>
                        @endif
                    </div>
                    <div class="form-group">
                        <label>Phone*</label>
                        <input type="text" class="form-control" name="phone" required placeholder="Enter Phone"/>
                        @if ($errors->has('phone'))
                            <span class="help-block"><strong style="color:red;">{{ $errors->first('phone') }}</strong></span>
                        @endif
                    </div>
                    <div class="form-group">
                        <label>Email(optonal)</label>
                        <input type="email" class="form-control" name="email" placeholder="Enter Email"/>
                        @if ($errors->has('email'))
                            <span class="help-block"><strong style="color:red;">{{ $errors->first('email') }}</strong></span>
                        @endif
                    </div>
                    <div class="form-group">
                        <label>Mpin*</label>
                        <input type="number" class="form-control" name="mpin" placeholder="Enter Mpin"/>
                        @if ($errors->has('mpin'))
                            <span class="help-block"><strong style="color:red;">{{ $errors->first('mpin') }}</strong></span>
                        @endif
                    </div>
                    <div class="form-group">
                        <label>Password*</label>
                        <input type="pasword" class="form-control" name="password" required placeholder="Enter Password"/>
                        @if ($errors->has('pasword'))
                            <span class="help-block"><strong style="color:red;">{{ $errors->first('pasword') }}</strong></span>
                        @endif
                    </div>
                    <div class="form-group">
                        <label>Password Confirmation*</label>
                        <input type="text" class="form-control" name="password_confirmation" required placeholder="Enter Passwor"/>

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
                        <button type="submit" id="eduFormSubmit" class="btn btn-danger waves-effect waves-light pull-right">Submit</button>
                    </div>
                </form>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div>
