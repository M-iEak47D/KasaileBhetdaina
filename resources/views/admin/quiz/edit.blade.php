

<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title mt-0">Update Quiz</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form id="eduFormUpdate" method="post">
                <input type="hidden" value="{{ $quiz->id }}" name="quiz_id">
                <div class="form-group">
                    <label>Quiz Title</label>
                    <input type="text" class="form-control" value="{{ $quiz->title }}" name="title" required placeholder="Enter Title"/>
                </div>

                <div class="form-group">
                    <textarea class="summernote" name="description">{{ $quiz->description }}</textarea>
                </div>

                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label>Quiz Time</label>
                            <input type="number" value="{{ $quiz->time }}" class="form-control" name="time" placeholder="Enter Quiz Duration"/>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label>Status</label>
                            <br>
                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-light active">
                                    <input type="radio" name="status" value="1" id="option1" @if($quiz->status == 1) checked @endif> Active
                                </label>
                                <label class="btn btn-light">
                                    <input type="radio" name="status" value="0" id="option2" @if($quiz->status == 0) checked @endif> Inactive
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label>Total Question To Assign</label>
                    <input type="number" class="form-control" name="total_question" value="{{ $quiz->total_question }}" placeholder="Total Question To Assign"/>
                </div>
                <div class="form-group">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" checked value="1" class="custom-control-input" id="hideFormModal" data-parsley-multiple="groups"
                        >
                        <label class="custom-control-label" for="customCheck1">Exit Model After Success!!</label>
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
