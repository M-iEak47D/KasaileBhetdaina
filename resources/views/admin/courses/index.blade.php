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
                    <li class="breadcrumb-item active"><a href="#">Courses</a></li>
                    {{--<li class="breadcrumb-item active">*Breadcrumb2*</li>--}}
                </ol>
            </div>
            <h5 class="page-title">Courses</h5>
        </div>
    </div>
    <!-- end row -->

@endsection

@section('contents')

    {{--Page Specific Content--}}

    {{--All Courses--}}
    <div class="row">
        <div class="col-12">
            <div class="card m-b-30">
                <div class="card-body">

                    <h4 class="mt-0 header-title" style="padding-bottom: 10px">Available Classes
                        <a href="#" class="btn btn-sm btn-primary pull-right" data-toggle="modal"
                           data-target="#add__course_modal">
                            Add
                        </a>
                    </h4>

                    {{--Modal to add data--}}
                    <div class="modal fade" id="add__course_modal" tabindex="-1" role="dialog"
                         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <form action="{{ route('admin.store_class') }}" method="post">
                                    @csrf
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLongTitle">Add New Class</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="form-group">
                                            <label for="course_name">Enter Class Name:</label>
                                            <input type="text" id="course_name" name="name" class="form-control" required>
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

                    {{--Display All data--}}
                    @include('admin.courses.course_table')
                </div>
            </div>
        </div>
    </div>

    {{--All Preparation--}}
    <div class="row">
        <div class="col-12">
            <div class="card m-b-30">
                <div class="card-body">

                    <h4 class="mt-0 header-title" style="padding-bottom: 10px">Available Preparations courses
                        <a href="#" class="btn btn-sm btn-primary pull-right" data-toggle="modal"
                           data-target="#add_prep_modal">
                            Add
                        </a>
                    </h4>

                    {{--Modal to add data--}}
                    <div class="modal fade" id="add_prep_modal" tabindex="-1" role="dialog"
                         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <form action="{{ route('admin.store_preparation') }}" method="post">
                                    @csrf
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLongTitle">Add Preparation Course</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="form-group">
                                            <label for="prep_name">Enter Preparation Course Name:</label>
                                            <input type="text" id="prep_name" name="name" class="form-control" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="prep_type">Enter Type:</label>
                                            <select name="type" id="prep_type" class="form-control">
                                                    <option value="{{ $preparation->id }}" selected>
                                                        {{ $preparation->name }}
                                                    </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close
                                        </button>
                                        <button type="submit" id="add_course" class="btn btn-primary">Save changes
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {{--Display All data--}}
                    @include('admin.courses.preparation_table')
                </div>
            </div>
        </div>
    </div>



@endsection

@section('scripts')

    {{--Page specific scripts--}}

@endsection
