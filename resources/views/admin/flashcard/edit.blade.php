

<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title mt-0">Update Flash Card</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form id="eduFormUpdate" method="post">
                <input type="hidden" value="{{ $flashcard->id }}" name="flashcard_id">

                <div class="form-group">
                    <label>Note Title</label>
                    <input type="text" value="{{ $flashcard->title }}" class="form-control" name="title" required placeholder="Enter Title"/>
                </div>

                <div class="form-group">
                    <label>Description</label>
                    <textarea class="summernote" name="description">{{ $flashcard->description }}</textarea>
                </div>
                <div class="form-group">
                    <label>Select Chapter</label>
                    <select class="custom-select" name="chapter_id">
                        <option selected="">Select Chapter</option>
                        <option value="1">Chapter 1</option>
                        <option value="2">Chapter 2</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Status</label>
                    <br>
                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                        <label class="btn btn-light @if($flashcard->status == 1) active @endif ">
                            <input type="radio" name="status" value="1" id="option1" @if($flashcard->status == 1) checked @endif> Active
                        </label>
                        <label class="btn btn-light @if($flashcard->status == 0) active @endif ">
                            <input type="radio" name="status" value="0" id="option2" @if($flashcard->status == 0) checked @endif> Radio
                        </label>
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
