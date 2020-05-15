



$(document).ready(function () {

    $("a[style='background-color:#00CDF2;border-color:#00CDF2;color:#fff']").closest('td').css('background' , 'rgba(0, 205, 242, 0.04)');
    $("a[style='background-color:#00EEC6;border-color:#00EEC6;color:#fff']").closest('td').css('background' , 'rgba(0, 238, 198, 0.04)');
    $("a[style='background-color:#EF4351;border-color:#EF4351;color:#fff']").closest('td').css('background' , 'rgba(239, 67, 81, 0.04)');
    $("a[style='background-color:#008095;border-color:#008095;color:#fff']").closest('td').css('background' , 'rgba(0, 128, 149, 0.04)');
});
$(document).on('change' , '.select_month , .select_year' ,function () {

    $("a[style='background-color:#00CDF2;border-color:#00CDF2;color:#fff']").closest('td').css('background' , 'rgba(0, 205, 242, 0.04)');
    $("a[style='background-color:#00EEC6;border-color:#00EEC6;color:#fff']").closest('td').css('background' , 'rgba(0, 238, 198, 0.04)');
    $("a[style='background-color:#EF4351;border-color:#EF4351;color:#fff']").closest('td').css('background' , 'rgba(239, 67, 81, 0.04)');
    $("a[style='background-color:#008095;border-color:#008095;color:#fff']").closest('td').css('background' , 'rgba(0, 128, 149, 0.04)');
});
