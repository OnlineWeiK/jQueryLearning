/**
 * Created by wk on 2015/5/31.
 */
$(document).ready(function(){
    $("#btn").click(function(){
        //$.ajax({
        //    url: "http://localhost/ajaxService/Service.php",
        //    data:{name:$("#name").val()},
        //    type: 'GET',
        //    dataType: 'json',
        //    contentType: 'application/json; charset=UTF-8',
        //    success: function (data) {
        //        alert("Success!");
        //        $("#result").text(data);
        //    }
        //});
        $.get("http://localhost/ajaxService/Service.php",{name:$("#name").val()},function(data){
            $("#result").text(data);
        })
    });

});