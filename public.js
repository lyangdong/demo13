


$(function(){
    var n = 0;
    setInterval(function(){
        myFunc(n);
        n++
    },100)
});


//
    function myFunc(n){
        if( n >100){
            $('#main')
        }else{
            $('.list').animate({width: 5*n},90);
            $('span').text(n);
        }
    }
