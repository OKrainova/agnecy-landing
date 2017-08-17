$(document).ready(function(){
        $('*[data-scroll-target]').on('click', function (e) {
        e.preventDefault();

        var target = $(this).data('scroll-target');
        var offset = $(this).data('scroll-offset') || 0;
        var rate = $(this).data('scroll-rate') || 600;
        var go = $(target);

        if (go.length > 0) {
            var top = go.offset().top + offset;
            $('html,body').animate({scrollTop: top}, rate);
        }
    });
});
