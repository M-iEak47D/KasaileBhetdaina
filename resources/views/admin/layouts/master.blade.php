<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <title>Admin</title>
    <meta content="Admin Dashboard" name="description" />
    <meta content="ThemeDesign" name="author" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" href="{{ asset('admin/assets/images/favicon.ico') }}">

    <!--Morris Chart CSS -->
    <link rel="stylesheet" href="{{ asset('admin/assets/plugins/morris/morris.css') }}">

    <link href="{{ asset('admin/assets/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css">

    <link href="{{ asset('admin/assets/plugins/summernote/summernote-bs4.css') }}" rel="stylesheet" />
    <link href="{{ asset('admin/assets/css/icons.css') }}" rel="stylesheet" type="text/css">

    <link href="{{ asset('admin/assets/css/style.css') }}" rel="stylesheet" type="text/css">

    @stack('styles')
    <script src="https://sdk.accountkit.com/en_US/sdk.js"></script>
</head>


<body class="fixed-left">

<!-- Loader -->
<div id="preloader"><div id="status"><div class="spinner"></div></div></div>

<!-- Begin page -->
<div id="wrapper">

    @include('admin.layouts.sidebar')

    <!-- Start right Content here -->

    <div class="content-page">
        <!-- Start content -->
        <div class="content">

            <!-- Top Bar Start -->
            @include('admin.layouts.nav')
            <!-- Top Bar End -->

            <div class="page-content-wrapper ">
                <div class="container-fluid">

                {{--Heading and Breadcrumbs--}}
                @yield('headers')

                {{--Admin panel content here--}}
                @yield('contents')

                </div>

            </div> <!-- Page content Wrapper -->

        </div> <!-- content -->

        <footer class="footer">
            © 2018 <b>Drixo</b> <span class="d-none d-sm-inline-block"> - Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesdesign.</span>
        </footer>

    </div>
    <!-- End Right content here -->

</div>
<!-- END wrapper -->


<!-- jQuery  -->
<script src="{{ asset('admin/assets/js/jquery.min.js') }}"></script>
<script src="{{ asset('admin/assets/js/bootstrap.bundle.min.js') }}"></script>
<script src="{{ asset('admin/assets/js/modernizr.min.js') }}"></script>
<script src="{{ asset('admin/assets/js/detect.js') }}"></script>
<script src="{{ asset('admin/assets/js/fastclick.js') }}"></script>
<script src="{{ asset('admin/assets/js/jquery.slimscroll.js') }}"></script>
<script src="{{ asset('admin/assets/js/jquery.blockUI.js') }}"></script>
<script src="{{ asset('admin/assets/js/waves.js') }}"></script>
<script src="{{ asset('admin/assets/js/jquery.nicescroll.js') }}"></script>
<script src="{{ asset('admin/assets/js/jquery.scrollTo.min.js') }}"></script>

<script src="{{ asset('admin/assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js') }}"></script>
<!-- skycons -->
<script src="{{ asset('admin/assets/plugins/skycons/skycons.min.js') }}"></script>

<!-- skycons -->
<script src="{{ asset('admin/assets/plugins/peity/jquery.peity.min.js') }}"></script>

<!--Morris Chart-->
<script src="{{ asset('admin/assets/plugins/morris/morris.min.js') }}"></script>
<script src="{{ asset('admin/assets/plugins/raphael/raphael-min.js') }}"></script>
<script src="{{ asset('admin/assets/plugins/summernote/summernote-bs4.min.js') }}"></script>
<!-- dashboard -->
<script src="{{ asset('admin/assets/pages/dashboard.js') }}"></script>
<!-- App js -->
<script src="{{ asset('admin/assets/js/app.js') }}"></script>
<script>
    jQuery(document).ready(function(){
        $('.summernote').summernote({
            height: 150,                 // set editor height
            minHeight: null,             // set minimum height of editor
            maxHeight: null,             // set maximum height of editor
            focus: true                 // set focus to editable area after initializing summernote
        });
    });
</script>
@stack('scripts')

</body>
</html>

