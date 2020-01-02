@extends('admin.layouts.master')

@push('styles')

    {{--Page specific styles--}}

@endpush

@section('headers')

    {{--Heading and breadcrumbs--}}
    <div class="row">
        <div class="col-sm-12">
            <div class="float-right page-breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Admin</a></li>
                    <li class="breadcrumb-item"><a href="#">*Breadcrumb1*</a></li>
                    <li class="breadcrumb-item active">*Breadcrumb2*</li>
                </ol>
            </div>
            <h5 class="page-title"> Assign Quiz Questions</h5>
        </div>
    </div>
    <!-- end row -->

@endsection

@section('contents')

    {{--Page Specific Content--}}
    <div class="card">
        <div class="card-head">
            <h3 class="center">{{ $quiz->title }}</h3>
        </div>
        <div class="card-body">
            <form action="" method="post">
                <div class="form-group">
                    <label for="">Subject</label>
                    <select name="subject_id" id="">
                        <option value="{{$subject->id}}">{{$subject->name}}</option>
                    </select>
                </div>
            </form>
        </div>
    </div>


@endsection

@push('scripts')

    {{--Page specific scripts--}}

@endpush