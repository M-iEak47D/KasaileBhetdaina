<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title mt-0">User Info</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form id="userInfoForm" method="post"enctype="multipart/form-data">
                <input type="hidden" name="user_info_id" value="{{ $userInfo->id }}">
                <div class="form-group">
                    <label>Profile Picture</label>
                    <input type="file" class="form-control" name="image"  />
                    @if ($errors->has('image'))
                        <span class="help-block"><strong style="color:red;">{{ $errors->first('image') }}</strong></span>
                    @endif
                    @if($userInfo->profile_image)
                        <img src="{{ asset($userInfo->profile_image) }}"  alt="{{ $userInfo->User->name }}" title="{{ $userInfo->User->name }}" width="100"/>
                        @endif
                </div>
                <div class="form-group">
                    <label>Gender*</label>
                    <select class="custom-select" name="gender">
                        <option selected="">Select Gender</option>
                        <option value="Male" @if($userInfo->gender == "Male") selected @endif >Male</option>
                        <option value="Female" @if($userInfo->gender == "Female") selected @endif >Female</option>
                        <option value="Other" @if($userInfo->gender == "Other") selected @endif >Other</option>
                    </select>
                    @if ($errors->has('gender'))
                        <span class="help-block"><strong style="color:red;">{{ $errors->first('gender') }}</strong></span>
                    @endif
                </div>
                <div class="form-group">
                    <label>Date Of Birth</label>
                    <div class="input-group">
                        <input type="text" value="{{ $userInfo->DOB }}" class="form-control" placeholder="yyyy-mm-dd" name="DOB" id="datepicker-autoclose">
                        <div class="input-group-append bg-custom b-0"><span class="input-group-text"><i class="mdi mdi-calendar"></i></span></div>
                    </div><!-- input-group -->
                    @if ($errors->has('DOB'))
                        <span class="help-block"><strong style="color:red;">{{ $errors->first('DOB') }}</strong></span>
                    @endif
                </div>

                <hr>
                <div class="form-group">
                    <button type="submit" id="eduFormSubmit" class="btn btn-danger waves-effect waves-light pull-right">Submit</button>
                </div>
            </form>
        </div>
    </div><!-- /.modal-content -->
</div><!-- /.modal-dialog -->
<script>
    jQuery('#datepicker-autoclose').datepicker({
        format: "yyyy-mm-dd",
        autoclose: true,
        todayHighlight: true
    });
</script>
