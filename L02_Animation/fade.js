/**
 * Created by wk on 2015/5/31.
 */
$(document).ready(function(){
    $("#fadeIn").on("click",function(){//淡入
        $("#div1").fadeIn(1000);
        $("#div2").fadeIn(1000);
        $("#div3").fadeIn(1000);
    });
    $("#fadeOut").on("click",function(){//淡出
        $("#div1").fadeOut(1000);
        $("#div2").fadeOut(1000);
        $("#div3").fadeOut(1000);
    });
    $("#fadeToggle").on("click",function(){//淡入淡出开关
        $("#div1").fadeToggle(1000);
        $("#div2").fadeToggle(1000);
        $("#div3").fadeToggle(1000);
    });

    $("#fadeTo").on("click",function(){//淡出透明度
        $("#div1").fadeTo(1000,0.1);
        $("#div2").fadeTo(1000,0.5);
        $("#div3").fadeTo(1000,0.5);
    });

});