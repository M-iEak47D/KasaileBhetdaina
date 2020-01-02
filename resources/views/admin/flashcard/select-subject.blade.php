<div class="form-group">
    <label>Select Subject</label>
    <select class="custom-select selectforchild" data-type="subject" name="subject_id" >
        <option selected="">Select Chapter</option>
        @foreach($contents as $content)
            <option value="{{ $content->id }}">{{ $content->name }}</option>
        @endforeach
    </select>
</div>
