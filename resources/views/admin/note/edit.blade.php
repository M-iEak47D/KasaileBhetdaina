

<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title mt-0">Update Note</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form id="eduFormUpdate" method="post">
                <input type="hidden" value="{{ $note->id }}" name="note_id">

                <div class="form-group">
                    <label>Note Title</label>
                    <input type="text" value="{{ $note->title }}" class="form-control" name="title" required placeholder="Enter Title"/>
                </div>
                <div class="form-group">
                    <label>Note File</label>
                    <input type="file" class="form-control" name="file" />
                </div>
                <div class="form-group">
                    <label>Select Class</label>
                    <select class="custom-select selectforchild" data-type="class" name="class_id">
                        <option selected="">Select Chapter</option>
                        @foreach($contents as $content)
                            <option @if($content->id == $content_id['class_id']) selected @endif value="{{ $content->id }}">{{ $content->name }}</option>
                        @endforeach
                    </select>
                </div>
                <div class="addsubject">
                    @include('admin.note.select-subject')
                </div>
                <div class="addchapter">
                    @include('admin.note.select-chapter')
                </div>
                <div class="form-group">
                    <label>Status</label>
                    <br>
                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                        <label class="btn btn-light @if($note->status == 1) active @endif ">
                            <input type="radio" name="status" value="1" id="option1" @if($note->status == 1) checked @endif> Active
                        </label>
                        <label class="btn btn-light @if($note->status == 0) active @endif ">
                            <input type="radio" name="status" value="0" id="option2" @if($note->status == 0) checked @endif> Radio
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

