/**
 * Created by wk on 2015/5/31.
 */
$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide(1000);
    });
    $("#show").click(function(){
        $("p").show(1000);
    });
    $("#toggle").click(function(){
        $("p").toggle(1000);
    });
});