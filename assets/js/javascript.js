$(window).ready(function(){
    $('#items').on('click',function(){
        var items=$('#vendor-items');
        var contents=$('#vendor-contents');
        if(items.hasClass('hidden')){
            contents.addClass('hidden');
            items.removeClass('hidden');
        }
    });
    $('#contents').on('click',function(){
        var items=$('#vendor-items');
        var contents=$('#vendor-contents');
        if(contents.hasClass('hidden')){
            items.addClass('hidden');
            contents.removeClass('hidden');
        }
    });
    $('#product-infor').on('click',function(){
        var des=$('#description');
        var review=$('#review');
        var qa=$('#qa');
        if(des.hasClass('hidden')){
            review.addClass('hidden')
            qa.addClass('hidden')
            des.removeClass('hidden')
        }
    });
    $('#product-review').on('click',function(){
        var des=$('#description');
        var review=$('#review');
        var qa=$('#qa');
        if(review.hasClass('hidden')){
            des.addClass('hidden')
            qa.addClass('hidden')
            review.removeClass('hidden')
        }
    });
    $('#product-qa').on('click',function(){
        var des=$('#description');
        var review=$('#review');
        var qa=$('#qa');
        if(qa.hasClass('hidden')){
            des.addClass('hidden')
            review.addClass('hidden')
            qa.removeClass('hidden')
        }
    });
    $('#buy').on('click',function(){
        var buy=$('#buy');
        var buydetail=$('#buydetail');
        if(buydetail.hasClass('hidden')){
            buy.addClass('hidden');
            buydetail.removeClass('hidden');
        }
    });
    $('#buydetail').on('click',function(){
        var buy=$('#buy');
        var buydetail=$('#buydetail');
        if(buy.hasClass('hidden')){
            buydetail.addClass('hidden');
            buy.removeClass('hidden');
        }
    })
});