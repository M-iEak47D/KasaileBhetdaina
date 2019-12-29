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
                    <li class="breadcrumb-item active"><a href="#">Categories</a></li>
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
    <div class="row">
        <div class="col-12">
            <div class="card m-b-30">
                <div class="card-body">

                    <h4 class="mt-0 header-title" style="padding-bottom: 10px">Available Categories
                        <a href="#" class="btn btn-sm btn-primary pull-right" data-toggle="modal"
                           data-target="#add_modal">
                            Add
                        </a>
                    </h4>

                    {{--Modal to add data--}}
                    <div class="modal fade" id="add_modal" tabindex="-1" role="dialog"
                         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <form action="{{ route('admin.store_categories') }}" method="post">
                                    @csrf
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLongTitle">Add Category</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">

                                        <div class="form-group">
                                            <label for="title">Enter Category Title:</label>
                                            <input type="text" id="category_name" name="category_name"
                                                   class="form-control">
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
                    <table id="datatable" class="table table-bordered dt-responsive nowrap"
                           style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                        <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Slug</td>
                            <td>Action</td>
                        </tr>
                        </thead>
                        @foreach($categories as $category)
                            <tr>
                                <td>{{ $category->id }}</td>
                                <td>{{ $category->name }}</td>
                                <td>{{ $category->slug }}</td>
                                <td>
                                    <button class="btn btn-sm btn-primary" data-toggle="modal" data-target="#edit_category{{$category->id}}">Edit</button>

                                    {{--Modal to edit data--}}
                                    <div class="modal fade" id="edit_category{{$category->id}}" tabindex="-1" role="dialog"
                                         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                                <form action="{{ route('admin.update_categories',$category->id) }}" method="post">
                                                    @csrf
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLongTitle">Edit Category</h5>
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div class="modal-body">

                                                        <div class="form-group">
                                                            <label for="title">Enter Category Title:</label>
                                                            <input type="text" id="category_name" name="category_name"
                                                                   class="form-control" value="{{$category->name}}">
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

                                </td>
                            </tr>
                        @endforeach
                    </table>
                </div>
            </div>
        </div>
    </div>

@endsection

@section('scripts')

    {{--Page specific scripts--}}

@endsection
