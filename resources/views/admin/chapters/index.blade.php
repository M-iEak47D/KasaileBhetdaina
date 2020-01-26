@extends('admin.layouts.master')

@section('styles')

    {{--Page specific styles--}}
    <style>
        .small-text{
            font-size: 12px;
        }
    </style>

@endsection

@section('headers')

    {{--Heading and breadcrumbs--}}
    <div class="row">
        <div class="col-sm-12">
            <div class="float-right page-breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Admin</a></li>
                    <li class="breadcrumb-item active"><a href="#">Chapters</a></li>
                    {{--<li class="breadcrumb-item active">*Breadcrumb2*</li>--}}
                </ol>
            </div>
            <h5 class="page-title">Chapters</h5>
        </div>
    </div>
    <!-- end row -->

@endsection

@section('contents')

    {{--@dd($subjects)--}}
    {{--Page Specific Content--}}
    <div class="row">
        <div class="col-12">
            <div class="card m-b-30">
                <div class="card-body">

                    <h4 class="mt-0 header-title" style="padding-bottom: 10px">Available Chapter
                        <a href="#" class="btn btn-sm btn-primary pull-right" data-target="#add_chapter" data-toggle="modal">Add</a>
                    </h4>

                    {{--Add Chapter Modal--}}
                    <div class="modal fade" id="add_chapter" tabindex="-1" role="dialog"
                         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <form action="{{ route('admin.store_chapter') }}" method="post">
                                    @csrf
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLongTitle">Add New Chapter</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="form-group">
                                            <label for="subject_name">Enter Chapter Name:</label>
                                            <input type="text" id="subject_name" name="name" class="form-control" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="subject_type">Enter Type:</label>
                                            <select name="type" id="subject_type" class="form-control">
                                                <option value="{{ $chapter_type->id }}" selected>
                                                    {{ $chapter_type->name }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="parent">Parent:</label>
                                            <select name="parent_id" id="parent" class="form-control">
                                                @foreach($subjects as $subject)
                                                    <option value="{{ $subject->id }}">{{ $subject->name }} ("{{ $subject->parent->name }}")</option>
                                                @endforeach
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

                    {{--Chapters Table--}}
                    @include('admin.chapters.chapters_table')

                </div>
            </div>
        </div>
    </div>

@endsection

@section('scripts')

    {{--Page specific scripts--}}
    
@endsection
