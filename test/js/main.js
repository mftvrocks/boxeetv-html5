var app = {
    width: 1280,
    height: 720
};

$().ready(function(){
    
    $(document).keydown(function(e){
        e.preventDefault();

        $('#keycode').html(e.keyCode);

        switch(e.keyCode)
        {
            case 13:
                console.log('select');
		
                var $active = $('.active');

                if ($active.hasClass('play'))
                    document.getElementById('vidplayer').play();
                else if ($active.hasClass('pause'))
                    document.getElementById('vidplayer').pause();

                break;

            case 40:
                console.log('down');

                break;

            case 38:
                console.log('up');
                break;
            
            case 37:
                console.log('left');
                var $active = $('.active');
                var $next = $active.prev();

                if ($next.length && $next.hasClass('button')) {
                    $active.toggleClass('active');
                    $next.toggleClass('active');
                }

                break;
            
            case 39:
                console.log('right');
                var $active = $('.active');
                var $next = $active.next();

                if ($next.length && $next.hasClass('button')) {
                    $active.toggleClass('active');
                    $next.toggleClass('active');
                }

                break;

            default:
                console.log(e.keyCode);
                break;
        }
    });

    $('.pause').click(function(){
    	document.getElementById('vidplayer').pause();
        console.log('pause');
    });
    
    $('.play').click(function(){
    	document.getElementById('vidplayer').play();
        console.log('play');
    });
    
});
