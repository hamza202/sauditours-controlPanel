//Mmenu
new Mmenu(document.querySelector('#menu'),
    {
        drag: true,
        pageScroll: {
            scroll: true,
            update: true
        },
        sidebar: {
            expanded: {
                use: '(min-width: 1300px)',
            }
        },
        navbars: [
            {
                content: ['<div><img src="./image/logo.png"></div>', 'close']
            }
        ]
    }
);

//Notifications
$(".clear-all-btn-nof").on('click', function (e) {
    $(this).closest(".dropdown-menu").dropdown("toggle");
    $(".notifications-list li").fadeOut();
});
$(".clear-btn-nof").on('click', function (e) {
    $(this).closest(".dropdown-menu").dropdown("toggle");
    $(this).closest("li").fadeOut();
});

//Data table
if ($('table').hasClass('data-table')) {
    $(document).ready(function () {
        var table = $('.data-table').DataTable({
            language: {
                paginate: {
                    next: '<i class="fal fa-angle-right"></i>',
                    previous: '<i class="fal fa-angle-left"></i>'
                }
            },
            lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
            responsive: true,
            dom: "<'row m-0'<'col-sm-12'tr>>\n\t\t\t<'row  m-0'<'col-sm-12 col-md-5'l><'col-sm-12 col-md-7 dataTables_pager'p>>",
        });

        $('.table-filter button').on('click', function () {
            table.search($(this).attr("data-value")).draw();
            console.log($(this).attr("data-value"))
        });
        $('#table-search-input').on('input', function () {
            table.search($(this).val()).draw();
        });
    });
}

//sweet alert
$('.table-delete').on('click', function () {
    Swal.fire({
        title: 'are you sure ?',
        text: "Do you want to delete this Tour?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#EF4351',
        cancelButtonColor: '#9098AC',
        confirmButtonText: 'Yes delete',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                title: 'The operation was successful',
                text: "Trip was deleted",
                type: 'success',
                confirmButtonText: 'Close',
            }).then((result) => {
                $(this).closest("tr").fadeOut();
            });
        }
    })
});

//Repeater
$('.new-destinations').on('click', function () {
    $('.my-repeater-container.destinations-container')
        .prepend($(
            '<div class="col-lg-10 offset-lg-2">\n' +
            '    <div class="input-group mb-3">\n' +
            '        <input type="text" class="form-control" placeholder="Destinations" aria-label="Destinations">\n' +
            '        <div class="input-group-append">\n' +
            '            <button type="button" class="input-group-append btn dell-btn btn-danger fs-23">\n' +
            '                <i class="fal fa-times"></i>\n' +
            '            </button>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>'
            ).hide().fadeIn(500)
        )
    ;
});
    $('.my-repeater-container.destinations-container').on('click', '.dell-btn', function () {
    $(this).closest('.col-lg-10').fadeOut(400);
});


$('.new-languages').on('click', function () {
    $('.my-repeater-container.lang-container')
        .prepend($(
            '<div class="col-lg-6">\n' +
            '    <div class="input-group mb-3">\n' +
            '        <input type="text" class="form-control" placeholder="Languages" aria-label="languages">\n' +
            '        <div class="input-group-append">\n' +
            '            <button type="button" class="input-group-append btn dell-btn btn-danger fs-23">\n' +
            '                <i class="fal fa-times"></i>\n' +
            '            </button>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>'
            ).hide().fadeIn(500)
        )
    ;
});
$('.my-repeater-container.lang-container').on('click', '.dell-btn', function () {
    $(this).closest('.col-lg-6').fadeOut(400);
});
//Change file img

$(document).ready(function() {

    $(".up1").on('change', function(){
        var readURL = function(input=['file']) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('.pic1').attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        };
        readURL(this);
    });
});

//File Upload
$('#file-multiple').fileinput({
    theme: 'fas',
    rtl: false,
    // showCaption: false,
    dropZoneEnabled: false,
    dropZoneTitle: 'drag and drop or click to add images',
    dropZoneClickTitle: '',
    showUpload: false,
    language: 'en',
    overwriteInitial: false,
    // maxFileSize: 4000,
    maxFilesNum: 10,
    maxFileCount: 10,
    uploadUrl: '#',
    allowedFileExtensions: ['jpg', 'png', 'jpeg']
});

// date range picker
$(function() {
    $('input.datetimes').daterangepicker({
        timePicker: true,
        startDate: moment().startOf('hour'),
        endDate: moment().startOf('hour').add(32, 'hour'),
        locale: {
            format: 'M/DD/YY hh:mm A'
        }
    });
});

//validation

// $("#addTourForm").validate({
//     ignore: "",
//     rules: {
//         file1:{
//             required: true,
//         },
//         "services[]": {
//             required: true,
//             minlength: 1
//         }
//     },
//     messages: {
//         "services[]": "الرجاء اختيار خدمة واحدة على الأقل"
//     }
// });