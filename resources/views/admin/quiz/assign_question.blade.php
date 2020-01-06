@extends('admin.layouts.master')

@push('styles')

    {{--Page specific styles--}}
    <style>
        .footer{
            padding: 20px 30px !important;
            background-color: #f9f9f9 !important;
            color: #0a1832 !important;
        }
    </style>
    <style>
        #overlay {
            position: fixed;
            height: 100%;
            width: 100%;
            top:0;
            left: 0;
            background-color:#ccc;
            z-index:9999;padding-top: 10px;
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
                    {{--<li class="breadcrumb-item"><a href="#">*Breadcrumb1*</a></li>--}}
                    {{--<li class="breadcrumb-item active">*Breadcrumb2*</li>--}}
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
            <div id="quiz_question_assign"></div>
        </div>
    </div>


@endsection

@push('scripts')

    <script src="/js/app.js"></script>
    {{--Page specific scripmts--}}

@endpush