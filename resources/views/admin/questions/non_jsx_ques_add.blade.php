<div class="card">
    <div class="card-body">
        <form action="{{ route('admin.store_question') }}" method="post" enctype="multipart/form-data">
            @csrf
            <div class="form-group">
                <label for="subject_name">Enter Question Name:</label>
                <textarea id="subject_name" name="name" class="form-control"></textarea>
            </div>
            <div class="form-group">
                <label for="marks">Enter Marks:</label>
                <input type="number" id="marks" name="marks" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="year">Enter Year</label>
                <div class="row">
                    <div class="col-md-12">
                        <table class="table table-bordered table-years " width="100%">
                            <thead>
                            <tr>
                                <th>SN</th>
                                <th>Year</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>

                            </tbody>
                            <tfoot>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>
                                    <button class="btn btn-primary btn-sm btn-add-years">
                                        Add New
                                    </button>
                                </th>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="importance">Importance</label>
                <input type="hidden" name="importance" value="0">
                <input type="checkbox" name="importance" value="1" class="form-control">
            </div>
            <div class="form-group">
                <label for="image">Image</label>
                <input type="file" name="image" id="image" class="form-control">
            </div>
            <div class="form-group">
                <label for="parent">Chapter</label>
                <select name="chapter" id="parent" required class="form-control">
                    @foreach($chapters as $chapter)
                        <option value="{{ $chapter->id }}">{{ $chapter->name }}</option>
                    @endforeach
                </select>
            </div>
            <br>
            <hr>
            <label for="answers">Answers:</label>
            <div class="table-responsive">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th>Option</th>
                        <th>Answer</th>
                        <th>Correct?</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>A.</td>
                        <td><input type="text" name="option[0][answer]" class="form-control"></td>
                        <td><input type="radio" name="option_boolean" value="1"></td>
                    </tr>
                    <tr>
                        <td>B.</td>
                        <td><input type="text" name="option[1][answer]" class="form-control"></td>
                        <td><input type="radio" name="option_boolean" value="2"></td>
                    </tr>
                    <tr>
                        <td>C.</td>
                        <td><input type="text" name="option[2][answer]" class="form-control"></td>
                        <td><input type="radio" name="option_boolean" value="3"></td>
                    </tr>
                    <tr>
                        <td>D.</td>
                        <td><input type="text" name="option[3][answer]" class="form-control"></td>
                        <td><input type="radio" name="option_boolean" value="4"></td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <hr>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close
            </button>
            <button type="submit" id="add_preparation" class="btn btn-primary">Save changes
            </button>

        </form>
    </div>
</div>
