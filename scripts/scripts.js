$(document).ready(function () {
    var menu = $('nav.header-menu');
    var patterns = {
        name: /^[A-ZА-Я][a-zа-я]+$/,
        phone: /^[0-9]{5,15}$/,
        email: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
        tags: /<[^>]+>/gi
    };
    
    $(window).on('scroll', function () {
        $(this).scrollTop() > 100 ? $(".btn-top").fadeIn() : $(".btn-top").fadeOut();
    });

    // Кнопка наверх
    $('.btn-top').on('click', function () {
        $('html, body').animate({scrollTop: 0}, 700);
    });

    $('.header-menu__toggle').on('click', function (e) {
        menu.toggleClass('open');
    });

    $('body').on('click', '[data-scroll-target]', function (e) {
        e.preventDefault();

        var target = $(this).data('scroll-target') || $(this).attr('href');
        var offset = $(this).data('scroll-offset') || 0;
        var rate = $(this).data('scroll-rate') || 1000;
        var go = $(target);

        if (go.length > 0) {
            menu.removeClass('open');
            var top = go.offset().top + offset;
            $('html,body').animate({scrollTop: top}, rate);
        }
    });

    $('form').on('submit', function (e) {
        var err = 0;
        var inputs = $(this).find(".form-control");
        for (var i = 0; i < inputs.length; i++) {
            var pattern = inputs[i].getAttribute('data-pattern');

            if (!checkInput(inputs[i].value, patterns[pattern], pattern)) {
                inputs[i].classList.add('error');
                err++;
            } else {
                inputs[i].classList.remove('error');
            }
        }

        if (err > 0) {
            e.preventDefault();
        }
    });

    $('.form-control').on()
    function checkInput(value, pattern, patternName) {
        if (value === "")
            return false;
        if (patternName === "tags")
            return !(pattern.test(value));
        return pattern.test(value);
    }
});
