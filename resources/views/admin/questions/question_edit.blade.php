@extends('admin.layouts.master')

@push('styles')

    {{--Page specific styles--}}

    <!-- Summernote css -->
    <link href="{{ asset('admin/assets/plugins/summernote/summernote-bs4.css') }}" rel="stylesheet" />

    <style>
        .question_add_image_preview{
            height: 350px;
            width: auto;
        }
        .errorForm{
            color: red;
            font-size: 13px;
        }
    </style>

@endpush

@section('headers')

    {{--Heading and breadcrumbs--}}
    <div class="row">
        <div class="col-sm-12">
            <div class="float-right page-breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Admin</a></li>
                    <li class="breadcrumb-item"><a href="#">Question</a></li>
                    <li class="breadcrumb-item active">Add</li>
                </ol>
            </div>
            <h5 class="page-title"> Add New Question </h5>
        </div>
    </div>
    <!-- end row -->

@endsection

@section('contents')

    <div id="question-edit-form"></div>

@endsection

@push('scripts')

    <script src="/js/App.js"></script>

    <!--Summernote js-->
    <script src="{{ asset('admin/assets/plugins/summernote/summernote-bs4.min.js') }}"></script>

    <script>
        jQuery(document).ready(function(){
            $('.summernote').summernote({
                height: 200,                 // set editor height
                minHeight: null,             // set minimum height of editor
                maxHeight: null,             // set maximum height of editor
                focus: true                 // set focus to editable area after initializing summernote
            });
        });
    </script>



@endpush
