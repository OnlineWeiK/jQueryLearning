/**
 * Created by wk on 2015/5/30.
 */

$(document).ready(function(){
     //alert("Load Finish!")
    $("p").click(function(){
        $(this).hide();
    });

    //$("button").click(function(){  //����
    //$("button").dblclick(function(){ //˫��
    $("button").mouseover(function(){ //����ƹ�
        $(this).hide();
    })
});