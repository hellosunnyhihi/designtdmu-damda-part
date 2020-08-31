$(document).ready(function(){
    $('.question').on('click',function(){
        var temp=$(this);
        var aws=$('.answer')
        if(aws.height()==0){
            aws.height(100)
            temp.css('color','#FF5500')
            
        }
        else {
            aws.height(0)
            temp.css('color','black')
        }
        if($('.icon').hasClass('fa-arrow-down')){
            $('.icon').removeClass('fa-arrow-down')
            $('.icon').addClass('fa-arrow-up')
        }
        else{
            $('.icon').removeClass('fa-arrow-up')
            $('.icon').addClass('fa-arrow-down')
        }
    })
})