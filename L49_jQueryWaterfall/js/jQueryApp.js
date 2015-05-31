/**
 * Created by wk on 2015/5/31.
 */
$(document).ready(function(){
    $(window).on("load",function(){
        imgLocation();
        var imgDate={"data":[{"src":"0.jpg"}]};//Jason��ʽ����
        for(var i=1;i<98;i++){
            imgDate.data.push({"src":+i+".jpg"});
        }
        window.onscroll = function(){
            if(scrollside()){
                $.each(imgDate.data,function(index,value){
                    var box = $("<div>").addClass("box").appendTo($("#container"));
                    var img_box = $("<div>").addClass("box_img").appendTo(box);
                    $("<img>").attr("src","images/"+$(value).attr("src")).appendTo(img_box);
                });
                imgLocation();
            }
        };
    });
});

function scrollside(){
    var box = $(".box");
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height()/2);
    var docHeight = $(document).height();
    var scrollHeight = $(window).scrollTop();
    return (lastboxHeight<scrollHeight+docHeight)?true:false;
}

function imgLocation(){
    var box = $(".box");
    var boxWidth = box.eq(0).width();
    var num = Math.floor($(window).width()/boxWidth);
    var boxArr=[];
    //index ͼƬλ��  value ����Ԫ��
    box.each(function(index,value){ //console.log(index+"����"+value);
        var boxHeight=box.eq(index).height();
        if(index<num){
            boxArr[index] = boxHeight;  // console.log(boxHeight);
        }else{
            var minboxHeight = Math.min.apply(null,boxArr);//��С�߶ȵ�ֵ // console.log(minboxHeight);
            var minboxIndex = $.inArray(minboxHeight,boxArr);//��С�߶�ͼƬ��λ��//console.log(minboxIndex);
            $(value).css({
                "position":"absolute",
                "top":minboxHeight,
                "left":box.eq(minboxIndex).position().left
            });
            boxArr[minboxIndex] +=box.eq(index).height();
        }
    })
}