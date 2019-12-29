<table id="datatable" class="table table-bordered dt-responsive nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
    <thead>
    <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Slug</td>
        <td>Code</td>
        <td>Action</td>
    </tr>
    </thead>
    @foreach($class->contents as $course)
        <tr>
            <td>{{ $course->id }}</td>
            <td>{{ $course->name }}</td>
            <td>{{ $course->slug }}</td>
            <td>{{ $course->code }}</td>
            <td>
                <button class="btn btn-sm btn-primary" data-toggle="modal" data-target="#edit_class_modal{{$course->id}}">Edit</button>

                {{--Modal to edit data--}}
                <div class="modal fade" id="edit_class_modal{{$course->id}}" tabindex="-1" role="dialog"
                     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <form action="{{ route('admin.update_class',$course->id) }}" method="post">
                                @csrf
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Update Class</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="form-group">
                                        <label for="course_name">Enter Class Name:</label>
                                        <input type="text" id="course_name" name="name" class="form-control" value="{{$course->name}}" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="course_type">Enter Type:</label>
                                        <select name="type" id="course_type" class="form-control">
                                            <option value="{{ $class->id }}" selected>
                                                {{ $class->name }}
                                            </option>
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
            </td>
        </tr>
    @endforeach
</table>