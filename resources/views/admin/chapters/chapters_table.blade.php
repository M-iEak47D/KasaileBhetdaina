<table id="datatable" class="table table-bordered dt-responsive nowrap"
       style="border-collapse: collapse; border-spacing: 0; width: 100%;">
    <thead>
    <tr>
        <td>ID</td>
        <td>Subject</td>
        <td>Code</td>
        <td>Chapters</td>
    </tr>
    </thead>
    @foreach($subjects as $subject)
        @if(isset($subject->children) && $subject->children->count() > 0)
            <tr>
                <td>{{ $subject->id }}</td>
                <td>
                    {{ $subject->name }}
                </td>
                <td>
                    {{$subject->code}}
                </td>
                <td>
                    <div class="table-responsive">
                    <table class="table">
                        @foreach($subject->children as $chapter)
                            <tr>
                                <td>
                                    <span class="small-text">
                                    {{ $chapter->name }}
                                    </span>
                                </td>
                                <td>
                                    <button class="btn btn-sm btn-primary" data-toggle="modal" data-target="#edit_chapter{{$chapter->id}}">Edit</button>

                                    {{--Edit Chapter Modal--}}
                                    <div class="modal fade" id="edit_chapter{{$chapter->id}}" tabindex="-1" role="dialog"
                                         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                                <form action="{{ route('admin.update_chapter',$chapter->id) }}" method="post">
                                                    @csrf
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLongTitle">Add New Chapter</h5>
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div class="form-group">
                                                            <label for="subject_name">Enter Chapter Name:</label>
                                                            <input type="text" id="subject_name" name="name" class="form-control" value="{{$chapter->name}}" required>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="subject_type">Enter Type:</label>
                                                            <select name="type" id="subject_type" class="form-control">
                                                                <option value="{{ $chapter_type->id }}" selected>
                                                                    {{ $chapter_type->name }}
                                                                </option>
                                                            </select>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="parent">Parent:</label>
                                                            <select name="parent_id" id="parent" class="form-control">
                                                                @foreach($subjects as $subject)
                                                                    <option value="{{ $subject->id }}"
                                                                        @if($subject->id == $chapter->parent_id) selected @endif>
                                                                        {{ $subject->name }} ("{{ $subject->parent->name }}")
                                                                    </option>
                                                                @endforeach
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close
                                                        </button>
                                                        <button type="submit" id="add_preparation" class="btn btn-primary">Save changes
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>


                                    <button class="btn btn-sm btn-danger">Delete</button>

                                    <a class="btn btn-sm btn-secondary" href="{{route('admin.assign_marks',$chapter->id)}}" > Marks</button>
                                </td>
                                <td>{{ $chapter->code }}</td>
                            </tr>
                        @endforeach
                    </table>
                    </div>
                </td>
            </tr>
        @endif
    @endforeach
</table>