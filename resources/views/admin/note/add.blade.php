<div class="modal fade addnew" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title mt-0">New Note</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="eduForm" method="post">
                    <div class="form-group">
                        <label>Note Title</label>
                        <input type="text" class="form-control" name="title" required placeholder="Enter Title"/>
                    </div>
                    <div class="form-group">
                        <label>Note File</label>
                        <input type="file" class="form-control" name="file" required/>
                    </div>
                    <div class="form-group">
                        <label>Select Class</label>
                        <select class="custom-select selectforchild" data-type="class" name="class_id">
                            <option selected="">Select Chapter</option>
                            @foreach($contents as $content)
                            <option value="{{ $content->id }}">{{ $content->name }}</option>
                                @endforeach
                        </select>
                    </div>
                    <div class="addsubject">

                    </div>
                    <div class="addchapter">

                    </div>
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
                    <hr>
                    <div class="form-group">
                        <button type="submit" id="eduFormSubmit" class="btn btn-danger waves-effect waves-light pull-right">Submit</button>
                    </div>
                </form>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div>
