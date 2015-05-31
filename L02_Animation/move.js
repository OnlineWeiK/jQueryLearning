/**
 * Created by wk on 2015/5/31.
 */
$(document).ready(function(){
    $("#slideDown").click(function(){
        $("#content").slideDown(1000);
    });
    $("#slideUp").click(function(){
        $("#content").slideUp(1000);
    });
    $("#slideToggle").click(function(){
        $("#content").slideToggle(1000);
    });

});