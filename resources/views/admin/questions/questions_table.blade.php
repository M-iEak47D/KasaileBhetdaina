<table id="datatable" class="table table-bordered dt-responsive nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
    <thead>
    <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Marks</td>
        <td>Options</td>
        <td>Action</td>
    </tr>
    </thead>
    @foreach($questions as $question)
        <tr>
            <td>{{ $question->id }}</td>
            <td>{{ $question->name }}</td>
            <td>{{ $question->marks }}</td>
            <td>
                <ul>
                    @if(isset($question->answers))
                        @foreach($question->answers as $answer)
                            <li>{{$answer->name}} ({{ $answer->correct }})</li>
                        @endforeach
                    @endif
                </ul>
            </td>
            <td>
                <a href="{{ route('admin.edit_question',$question->id) }}" class="btn btn-sm btn-primary">Edit</a>
                <button class="btn btn-sm btn-danger">Delete</button>
            </td>
        </tr>
    @endforeach
</table>