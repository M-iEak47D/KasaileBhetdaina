@extends('admin.layouts.master')

@section('styles')

    {{--Page specific styles--}}

@endsection

@section('headers')

    {{--Heading and breadcrumbs--}}
    <div class="row">
        <div class="col-sm-12">
            <div class="float-right page-breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Admin</a></li>
                    <!-- <li class="breadcrumb-item"><a href="#">*Breadcrumb1*</a></li>
                    <li class="breadcrumb-item active">*Breadcrumb2*</li> -->
                </ol>
            </div>
            <h2 class="center"> Assign Questions To: </h2>
            <h5>Class : {{ isset($chapter->parent->parent)? $chapter->parent->parent->name : ""}}</h5>
            <h5>Subject: {{isset($chapter->parent)? $chapter->parent->name : ""}}</h5>
            <h5>Chapter: {{ isset($chapter) ? $chapter->name : ""}}</h5>
        </div>
    </div>
    <!-- end row -->

@endsection

@section('contents')

    {{--Page Specific Content--}}
    <div class="card">
    <div class="card-body">
        <div class="row">
        <div class="col-md-12">
            <form action="{{ route('admin.post_assign_marks',$chapter->id)}}" method="post">
                @csrf
                <table class="table table-bordered table-marks">
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Marks</th>
                            <th>Quantity</th>
                            <th>Name(optional)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @if(isset($marks))
                            @php $counter=1; @endphp
                            @foreach($marks as $mark)
                                <tr data-row="{{$counter}}">
                                    <td>@php echo $counter; $counter++; @endphp</td>
                                    <td>
                                        <input type="number" value="{{$mark->marks}}" name="contents[{{$mark->id}}][marks]" class="form-control" required>
                                    </td>
                                    <td>
                                    <input type="number" value="{{$mark->quantity}}" name="contents[{{$mark->id}}][quantity]" class="form-control" required>
                                    </td>
                                    <td>
                                    <input type="text" value="{{$mark->name}}" name="contents[{{$mark->id}}][name]" class="form-control" >
                                    </td>
                                    <td>
                                    <button type="button" class="btn btn-danger btn-sm btn-delete-marks" data-feature=""><i class="fa fa-minus-circle"></i></button>
                                    </td>
                                </tr>
                            @endforeach
                        @endif
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>
                                <button class="btn btn-primary btn-sm btn-add-marks">
                                    Add New
                                </button>
                            </th>
                        </tr>
                    </tfoot>
                </table>
                <div class="mt-2" style="text-align:center">
                    <button type="submit" class="btn btn-lg btn-success">Save Changes</button>
                </div>
            </form>
        </div>
    </div>
    </div>
    </div>


@endsection

@push('scripts')

    {{--Page specific scripts--}}
    <script>
        function generateRandomInteger() {
            return Math.floor(Math.random() * 90000) + 10000;
        }

        jQuery(document).on('click', '.btn-delete-marks', function (e) {
            e.preventDefault();
            var $this = $(this);
            $this.closest("tr").remove();
        });

        jQuery(document).on('click', '.btn-add-marks', function (e) {
            e.preventDefault();
            // console.log('tgd');
            var lastRow = $('table.table-marks > tbody > tr').last().attr('data-row');
            var counter = lastRow ? parseInt(lastRow) + 1 : 1;
            var randomInteger = generateRandomInteger();
            var newRow = jQuery('<tr data-row="' + counter + '">' +
                '<td>' + counter + '</td>' +
                '<td>' + '<input type="number" name="contents[' + randomInteger + '][marks]" class="form-control" required>'+
                '</td>' +
                '<td>' + '<input type="number" name="contents[' + randomInteger + '][quantity]" class="form-control" required>'+
                '</td>' +
                '<td>' + '<input type="text" name="contents[' + randomInteger + '][name]" class="form-control" >'+
                '</td>' +
                '<td><button type="button" class="btn btn-danger btn-sm btn-delete-marks" data-feature=""><i class="fa fa-minus-circle"></i></button></td>' +
                '</tr>');
            jQuery('table.table-marks').append(newRow);
        });
    </script>


@endpush