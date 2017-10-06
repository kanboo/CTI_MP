$(document).ready(function () {

    // console.log($("[name='MA_RadioOptions']").length)
    $("[name='MA_RadioOptions']").on("click", function (e) {
        // console.log(event.target.id);
        console.log(e.target.value);

        if( e.target.value === "POData"){
            $('#POData').collapse('show');
            $('#FreeData').collapse('hide');
        }else{
            $('#POData').collapse('hide');
            $('#FreeData').collapse('show');
        }

    });

})