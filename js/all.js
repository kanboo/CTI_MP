$(document).ready(function () {


    $("#submit").click(function () {
        if ($('#ProblemRecord').validator('validate').has('.has-error').length) {
            // 驗證未通過，則不處理
            console.log('驗證未通過');
        } else {
            // 通过后，送出表单
            alert("已送出表單");
        }
    });

    // $('#ProblemRecord').validator().on('submit', function (e) {
    //     e.preventDefault(); // 防止原始 form 提交表單

    //     if (e.isDefaultPrevented()) {
    //         // 驗證未通過，則不處理
    //         console.log('驗證未通過');
    //         // $('#ProblemRecord').validator('destroy');
    //         return;
    //     } else { // 通过后，送出表单
    //         alert("已送出表單");
    //     }
    // });

});