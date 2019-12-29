<div className="card">
    <div className="card-body">
        <form action="{{ route('admin.store_question') }}" method="post" enctype="multipart/form-data">
            @csrf
            <div className="form-group">
                <label >Enter Question Name:</label>
                <textarea id="subject_name" name="name" className="form-control"></textarea>
            </div>
            <div className="form-group">
                <label >Enter Marks:</label>
                <input type="number" id="marks" name="marks" className="form-control" required />
            </div>
            <div className="form-group">
                <label >Enter Year</label>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-bordered table-years " width="100%">
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
                                    <button className="btn btn-primary btn-sm btn-add-years">
                                        Add New
                                    </button>
                                </th>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label >Importance</label>
                <input type="hidden" name="importance" value="0">
                <input type="checkbox" name="importance" value="1" className="form-control" />
            </div>
            <div className="form-group">
                <label >Image</label>
                <input type="file" name="image" id="image" className="form-control" />
            </div>
            <div className="form-group">
                <label >Chapter</label>
                <select name="chapter" id="parent" required className="form-control" />
                    @foreach($chapters as $chapter)
                        <option value="{{ $chapter->id }}">{{ $chapter->name }}</option>
                    @endforeach
                </select>
            </div>
            <br />
            <hr />
            <label >Answers:</label>
            <div className="table-responsive">
                <table className="table table-bordered">
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
                        <td><input type="text" name="option[0][answer]" className="form-control" /></td>
                        <td><input type="radio" name="option_boolean" value="1" /></td>
                    </tr>
                    <tr>
                        <td>B.</td>
                        <td><input type="text" name="option[1][answer]" className="form-control" /></td>
                        <td><input type="radio" name="option_boolean" value="2" /></td>
                    </tr>
                    <tr>
                        <td>C.</td>
                        <td><input type="text" name="option[2][answer]" className="form-control" /></td>
                        <td><input type="radio" name="option_boolean" value="3" /></td>
                    </tr>
                    <tr>
                        <td>D.</td>
                        <td><input type="text" name="option[3][answer]" className="form-control" /></td>
                        <td><input type="radio" name="option_boolean" value="4" /></td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <hr />
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close
            </button>
            <button type="submit" id="add_preparation" className="btn btn-primary">Save changes
            </button>

        </form>
    </div>
</div>

{{--<script>--}}
{{--function generateRandomInteger() {--}}
{{--return Math.floor(Math.random() * 90000) + 10000;--}}
{{--}--}}

{{--jQuery(document).on('click', '.btn-delete-years', function (e) {--}}
{{--e.preventDefault();--}}
{{--var $this = $(this);--}}
{{--$this.closest("tr").remove();--}}
{{--});--}}

{{--jQuery(document).on('click', '.btn-add-years', function (e) {--}}
{{--e.preventDefault();--}}
{{--// console.log('tgd');--}}
{{--var lastRow = $('table.table-years > tbody > tr').last().attr('data-row');--}}
{{--var counter = lastRow ? parseInt(lastRow) + 1 : 1;--}}
{{--var randomInteger = generateRandomInteger();--}}
{{--var newRow = jQuery('<tr data-row="' + counter + '">' +--}}
{{--'<td>' + counter + '</td>' +--}}
{{--'<td><input type="text" placeholder="year of occurance" name="year[' + randomInteger + ']" class="form-control" required></td>' +--}}
{{--'<td><button type="button" class="btn btn-danger btn-sm btn-delete-years" data-feature=""><i class="fa fa-minus-circle"></i></button></td>' +--}}
{{--'</tr>');--}}
{{--jQuery('table.table-years').append(newRow);--}}
{{--});--}}


{{--</script>--}}
