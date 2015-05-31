/**
 * Created by wk on 2015/5/30.
 */

$(document).ready(function(){
     //alert("Load Finish!")
    $("p").click(function(){
        $(this).hide();
    });

    //$("button").click(function(){  //µ¥»÷
    //$("button").dblclick(function(){ //Ë«»÷
    $("button").mouseover(function(){ //Êó±êÒÆ¹ý
        $(this).hide();
    })
});