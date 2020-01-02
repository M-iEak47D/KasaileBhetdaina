<div class="form-group">
    <label>Select Chapter</label>
    <select class="custom-select selectforchild" data-type="chapter" name="chapter_id">
        <option selected="">Select Chapter</option>
        @foreach($contents as $content)
            <option value="{{ $content->id }}">{{ $content->name }}</option>
        @endforeach
    </select>
</div>
