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
                content: ['<div><img src="./image/logo.png"></div>','close']
            }
        ]
    }
);

//Notifications
$(".clear-all-btn-nof").on('click',function (e) {
    $(this).closest(".dropdown-menu").dropdown("toggle");
    $( ".notifications-list li" ).fadeOut();
});
$(".clear-btn-nof").on('click',function (e) {
    $(this).closest(".dropdown-menu").dropdown("toggle");
    $(this).closest("li").fadeOut();
});

//Data table
$(document).ready(function (){
    var table = $('.data-table').DataTable({
        language: {
            paginate: {
                next: '<i class="fal fa-angle-right"></i>',
                previous: '<i class="fal fa-angle-left"></i>'
            }
        },
        lengthMenu: [[5,10, 25, 50, -1], [5,10, 25, 50, "All"]],
        responsive: true,
        dom: "<'row m-0'<'col-sm-12'tr>>\n\t\t\t<'row  m-0'<'col-sm-12 col-md-5'l><'col-sm-12 col-md-7 dataTables_pager'p>>",
    });

    $('.table-filter button').on('click', function(){
        table.search($(this).attr("data-value")).draw();
        console.log($(this).attr("data-value"))
    });
    $('#table-search-input').on('input', function(){
        table.search($(this).val()).draw();
    });
});

