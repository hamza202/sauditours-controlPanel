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
                content: ['<div><img src='+logo+'></div>', 'close']
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