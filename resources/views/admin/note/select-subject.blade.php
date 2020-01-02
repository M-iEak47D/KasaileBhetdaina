<div class="form-group">
    <label>Select Subject</label>
    <select class="custom-select selectforchild" data-type="subject" name="subject_id" >
        <option selected="">Select Chapter</option>
        @foreach($contents as $content)
            <option @if(isset($content_id['subject_id']) == $content->id) selected @endif value="{{ $content->id }}">{{ $content->name }}</option>
        @endforeach
    </select>
</div>
