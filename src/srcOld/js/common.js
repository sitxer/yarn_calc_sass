jQuery(function ($) {

    //подмена кнопок при клике на выбор файла импорта
    $('.consult-feed__file-attach').click(function(){
        $(".consult-feed__file-input").trigger('click');
    });

    //модака подтверждения отзывов
    $('.hidden').magnificPopup({
        type: 'inline',
        preloader: true,
        modal: true
    });
    $(document).on('click', '.confirm-modal__link', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
    $(document).on('click', '.consult-feed__btn', function (e) {
        e.preventDefault(); //убрать при интеграции и в аяксе по success вызвать триггер клика на .hidden который откроет подтверждение отправки формы
        $( ".hidden" ).trigger( "click" );
    });
///////////////////
    //рейтинг в отзывах
    $(function() {
        $('#rating-container > .rating-star').mouseenter(function() {
            $(this).prevAll().addBack().addClass("rating-hover")
            $(this).nextAll().removeClass("rating-hover").addClass("no-rating");
            $('.meaning').fadeIn('fast');
            // $(this).removeClass("rating-chosen");
        });
        $('#rating-container > .rating-star').mouseleave(function() {
            $(this).nextAll().removeClass("no-rating");
        });
        $('#rating-container').mouseleave(function() {
            $('.rating-star').removeClass("rating-hover");
            $('.meaning').fadeOut('fast');
        });

        $('#rating-container > .rating-star').click(function() {
            $(this).prevAll().addBack().addClass("rating-chosen");
            $(this).nextAll().removeClass("rating-chosen");
        });
    });
    $(function() {
        $('.rating-container > .rating-star').mouseenter(function() {
            $(this).prevAll().addBack().addClass("rating-hover")
            $(this).nextAll().removeClass("rating-hover").addClass("no-rating");
            $('.meaning').fadeIn('fast');
            // $(this).removeClass("rating-chosen");
        });
        $('.rating-container > .rating-star').mouseleave(function() {
            $(this).nextAll().removeClass("no-rating");
        });
        $('.rating-container').mouseleave(function() {
            $('.rating-star').removeClass("rating-hover");
            $('.meaning').fadeOut('fast');
        });

        $('.rating-container > .rating-star').click(function() {
            $(this).prevAll().addBack().addClass("rating-chosen");
            $(this).nextAll().removeClass("rating-chosen");
        });

        $('.rating-container > .one-star').hover(function() {
            $(this).closest('.rating-container').next('.consult-feed__meaning-block').find('.meaning').text('1/5 Очень плохо');
        });
        $('.rating-container > .one-star').mouseout(function() {
            $(this).closest('.rating-container').next('.consult-feed__meaning-block').find('.meaning').text('');
        });

        $('.rating-container > .two-star').hover(function() {
            $(this).closest('.rating-container').next('.consult-feed__meaning-block').find('.meaning').text('2/5 Так себе');
        });
        $('.rating-container > .two-star').mouseout(function() {
            $(this).closest('.rating-container').next('.consult-feed__meaning-block').find('.meaning').text('');
        });

        $('.rating-container > .three-star').hover(function() {
            $(this).closest('.rating-container').next('.consult-feed__meaning-block').find('.meaning').text('3/5 Удовлетворительно');
        });
        $('.rating-container > .three-star').mouseout(function() {
            $(this).closest('.rating-container').next('.consult-feed__meaning-block').find('.meaning').text('');
        });


        $('.rating-container > .four-star').hover(function() {
            $(this).closest('.rating-container').next('.consult-feed__meaning-block').find('.meaning').text('4/5 Похвально');
        });
        $('.rating-container > .four-star').mouseout(function() {
            $(this).closest('.rating-container').next('.consult-feed__meaning-block').find('.meaning').text('');
        });

        $('.rating-container > .five-star').hover(function() {
            $(this).closest('.rating-container').next('.consult-feed__meaning-block').find('.meaning').text('5/5 Отлично');
        });
        $('.rating-container > .five-star').mouseout(function() {
            $(this).closest('.rating-container').next('.consult-feed__meaning-block').find('.meaning').text('');
        });

    });

    //модака консультации
    $('.consult-link').magnificPopup({
        type: 'inline',
        preloader: true,
        focus: 'consult-modal__input',
        modal: true
    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
    $(document).on('click', '.consult-modal__btn', function (e) {
        e.preventDefault(); //убрать при интеграции и в аяксе по success вызвать триггер клика на .hidden который откроет подтверждение отправки формы
        $.magnificPopup.close();
        $( ".hidden" ).trigger( "click" );
    });

    //модака подтверждения консультации
    $('.hidden').magnificPopup({
        type: 'inline',
        preloader: true,
        modal: true
    });
    $(document).on('click', '.confirm-modal__link', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });


    //Больше информации
    $('body').on('click', '.hide-btn', function() {
        $(this).closest('.company-news__main-block').find('.company-news__info-title').css('max-height', '100%');
        $(this).text('Меньше информации');
        $(this).removeClass('hide-btn');
        $(this).addClass('show-btn');
        console.log('456');
    });
    //меньше информации
    $('body').on('click', '.show-btn', function() {
        $(this).closest('.company-news__main-block').find('.company-news__info-title').css('max-height', '95px');
        $(this).text('Больше информации');
        $(this).removeClass('show-btn');
        $(this).addClass('hide-btn');
        console.log('123');
    });


    //magnific-popup Открытие модального окна
// Type Image Zoom - картинка с анимацией
    autosize($('textarea'));
    autosize.update($('textarea'));
    $('.save').on('click', function() {
        $(this).hide();
        $(this).next('a').show();
        $(this).prev('a').show();

        var thisText = $(this).closest('.company-foto__img-desc-block').find('textarea').val();
        $(this).closest('.company-foto__img-desc-block').find('textarea').hide();

        console.log($(this).closest('.company-foto__img-desc-block').find('textarea').val());

        $(this).closest('.company-foto__img-desc-block').find('.company-foto__card-text').text(thisText);
        $(this).closest('.company-foto__img-desc-block').find('.company-foto__card-text').show();

    });

    $('.remove').on('click', function() {
        $(this).closest('.company-foto__card-block').remove();
    });

    $('.edit').on('click', function() {
        $(this).hide();
        $(this).closest('.company-foto__select').find('.save').show();
        $(this).closest('.company-foto__select').find('.remove').hide();
        $(this).closest('.company-foto__img-desc-block').find('textarea').show();
        $(this).closest('.company-foto__img-desc-block').find('.company-foto__card-text').hide();
    });


    $('.full-view__slider-img-link').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }

    });

    $('.full-view-red__slider-img-link').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }

    });

    // Убираем плейсхолдер у поля формы при фокусе на нем
    $('input,textarea').focus(function () {
        $(this).data('placeholder', $(this).attr('placeholder'))
            .attr('placeholder', '');
    }).blur(function () {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });

    //Все инпуты с типом tel имеют маску +7 ( 999 ) 999 - 99 - 99
    jQuery('input[type=tel]').mask('+7 ( 999 ) 999 - 99 - 99');
    //
    // //Кнопка вниз на приветственном экране
    // $('#greetings-button').click(function () {
    //     $('html').animate({
    //         scrollTop: $('#greetings').height()
    //     },1000);
    // })

    //Логика открытия и закрытия окна поиска в шапке
    $('#header-search-open, #header-search-close').click(function () {
        if ($('#header-search').is(':visible')) {
            $($('#header-search')).hide();
        } else {
            $($('#header-search')).show();
        }
    });
    $(document).mouseup(function (e){
        if (!$('#header-search').is(e.target) && $('#header-search').has(e.target).length === 0) {
            $('#header-search').hide();
        }
    });

    // $('#example').customScroll({
    //     horizontal: false
    // });
});

//По клику скрывается меню
$( ".slider__btn" ).click(function() { //$-обращение к элементу через jq, . событие, функция
    $(".header").fadeToggle();
});
// $( ".slider__btn" ).click(function() { //$-обращение к элементу через jq, . событие, функция
//     $(".header").slideToggle();
// });


$(document).ready(function() {
    $(".header__city").select2();
    $(".js-states").select2();
    $(".mini-filter__select-box").select2();
    $(".consult-feed__city").select2();

});

//first-slider-big 17page
$('.big-slider__main-img-block').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.big-slider__nav-block'
});
$('.big-slider__nav-block').slick({
    slidesToShow: 4,
    centerPadding: '60px',
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.big-slider__main-img-block',
    // dots: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

//22page


$('.big-slider-example__main-img-block').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.test-slick'
});
$('.big-slider-example__nav-block').slick({
    slidesToShow: 8,
    centerPadding: '0px',
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.big-slider-example__main-img-block',
    // dots: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '70px'
            }
        }
    ]
});
//28
$('.full-view__slider-row').slick({
    slidesToShow: 3,
    centerPadding: '0px',
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true,
    centerMode: true,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding: '40px'
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.full-view-red__slider-row').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding: '40px'
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

(function() {
    if (window.pluso)if (typeof window.pluso.start == "function") return;
    if (window.ifpluso==undefined) { window.ifpluso = 1;
        var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
        s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
        s.src = ('https:' == window.location.protocol ? 'https' : 'http')  + '://share.pluso.ru/pluso-like.js';
        var h=d[g]('body')[0];
        h.appendChild(s);
    }})();

(function(d,e,s){if(d.getElementById("likebtn_wjs"))return;a=d.createElement(e);m=d.getElementsByTagName(e)[0];a.async=1;a.id="likebtn_wjs";a.src=s;m.parentNode.insertBefore(a, m)})(document,"script","//w.likebtn.com/js/w/widget.js");

//открытие черного меню
$('#burger').click(function () {
    $('#burger').hide();
    $('#close').show();
    $('#main-nav').slideDown();
});
//закрытие черного меню
$('#close').click(function () {
    $('#burger').show();
    $('#close').hide();
    $('#main-nav').slideUp();
});

//открытие белого меню
$('#menu-white').click(function () {
    $('#menu-white').hide();
    $('#cancel').show();
    $('.header__list').slideDown();
});
//закрытие белого меню
$('#cancel').click(function () {
    $('#menu-white').show();
    $('#cancel').hide();
    $('.header__list').slideUp();
});

//открытие показать все города
$('#show').click(function () {
    $('#show').hide();
    $('.ratio-classifier.show').slideDown();
    $('#hide').show();
});

//закрытие скрыть классификатор

$('#hide').click(function () {
    $('#hide').hide();
    $('.ratio-classifier.show').slideDown();
    $('#show').show();
});

//Открытие блоков в общей оценки компании
$('#show-ref').click(function (event) {
    event.preventDefault();
    $('#show-ref').hide();
    $('.construction__icons-block-text').slideDown();
    $('#hide-ref').show();
});

//скрытие блоков в общей оценки компании
$('#hide-ref').click(function (event) {
    event.preventDefault();
    $('#show-ref').show();
    $('.construction__icons-block-text').slideUp();
    $('#hide-ref').hide();
});

//Открытие блоков в общей оценки компании (текст)
$('#show-info').click(function (event) {
    event.preventDefault();
    $('#show-info').hide();
    $('#hide-text').slideDown();
    $('#hide-info').show();
});

//скрытие блоков в общей оценки компании (текст)
$('#hide-info').click(function (event) {
    event.preventDefault();
    $('#show-info').show();
    $('#hide-text').slideUp();
    $('#hide-info').hide();
});

//Открытие блоков в общей оценки компании (регионы)
$('#show-region').click(function (event) {
    event.preventDefault();
    $('#show-region').hide();
    $('#span-text').fadeIn();
    $('#hide-region').show();
});

//скрытие блоков в общей оценки компании (регионы)
$('#hide-region').click(function (event) {
    event.preventDefault();
    $('#show-region').show();
    $('#span-text').fadeOut();
    $('#hide-region').hide();
});

//Открытие блоков показать классификатор)
$('.show-class').click(function (event) {
    event.preventDefault();
    $(this).hide();
    $(this).closest('.ratio-choice__org-class').find('.block').fadeIn();
    $(this).closest('.ratio-choice__org-class').find('.hide-class').show();
});

//скрытие блоков скрыть классификатор)
$('.hide-class').click(function (event) {
    event.preventDefault();
    $(this).hide();
    $(this).closest('.ratio-choice__org-class').find('.block').fadeOut();
    $(this).closest('.ratio-choice__org-class').find('.show-class').show();
});

//Открытие блоков показать классификатор)
$('#show-class-first').click(function (event) {
    event.preventDefault();
    $('#show-class-first').hide();
    $('#block-first').fadeIn();
    $('#hide-class-first').show();
});

//скрытие блоков скрыть классификатор)
$('#hide-class-first').click(function (event) {
    event.preventDefault();
    $('#show-class-first').show();
    $('#block-first').fadeOut();
    $('#hide-class-first').hide();
});
//Открытие блоков показать классификатор)
$('#show-class-second').click(function (event) {
    event.preventDefault();
    $('#show-class-second').hide();
    $('#block-second').fadeIn();
    $('#hide-class-second').show();
});

//скрытие блоков скрыть классификатор)
$('#hide-class-second').click(function (event) {
    event.preventDefault();
    $('#show-class-second').show();
    $('#block-second').fadeOut();
    $('#hide-class-second').hide();
});
//Открытие блоков показать классификатор)
$('#show-class-third').click(function (event) {
    event.preventDefault();
    $('#show-class-third').hide();
    $('#block-third').fadeIn();
    $('#hide-class-third').show();
});

//скрытие блоков скрыть классификатор)
$('#hide-class-third').click(function (event) {
    event.preventDefault();
    $('#show-class-third').show();
    $('#block-third').fadeOut();
    $('#hide-class-third').hide();
});
//Открытие блоков показать города)
// $('#show-cities').click(function (event) {
//     event.preventDefault();
//     $('#show-cities').hide();
//     $('#block-cities').fadeIn();
//     $('#hide-cities').show();
// });
//new
$('.show-cities').click(function (event) {
    event.preventDefault();
    $(this).hide();
    $(this).closest('.ratio-choice__org-geo-block').find('.block-cities').fadeIn();
    $(this).closest('.ratio-choice__org-geo-block').find('.hide-cities').show();
});



//скрытие блоков скрыть города)
// $('#hide-cities').click(function (event) {
//     event.preventDefault();
//     $('#show-cities ').show();
//     $('#block-cities').fadeOut();
//     $('#hide-cities').hide();
// });
//new
$('.hide-cities').click(function (event) {
    event.preventDefault();
    $(this).hide();
    $(this).closest('.ratio-choice__org-geo-block').find('.block-cities').fadeOut();
    $(this).closest('.ratio-choice__org-geo-block').find('.show-cities').show();
});

//Открытие блоков показать города)
$('#show-cities-first').click(function (event) {
    event.preventDefault();
    $('#show-cities-first').hide();
    $('#block-cities-first').fadeIn();
    $('#hide-cities-first').show();
});

//скрытие блоков скрыть города)
$('#hide-cities-first').click(function (event) {
    event.preventDefault();
    $('#show-cities-first').show();
    $('#block-cities-first').fadeOut();
    $('#hide-cities-first').hide();
});
//Открытие блоков показать города)
$('#show-cities-third').click(function (event) {
    event.preventDefault();
    $('#show-cities-third').hide();
    $('#block-cities-third').fadeIn();
    $('#hide-cities-third').show();
});

//скрытие блоков скрыть города)
$('#hide-cities-third').click(function (event) {
    event.preventDefault();
    $('#show-cities-third').show();
    $('#block-cities-third').fadeOut();
    $('#hide-cities-third').hide();
});

//Открытие блоков показать компании)
$('#show-company').click(function (event) {
    event.preventDefault();
    $('#show-company').hide();
    $('#none-first, #none-first,#none-second, #none-third').fadeIn();
    $('#hide-company').show();
});
//скрытие блоков скрыть компании)
$('#hide-company').click(function (event) {
    event.preventDefault();
    $('#show-company').show();
    $('#none-first, #none-first,#none-second, #none-third').fadeOut();
    $('#hide-company').hide();
});
//Открытие блоков показать города)
$('#show-cities-second').click(function (event) {
    event.preventDefault();
    $('#show-cities-second').hide();
    $('#block-cities-second').fadeIn();
    $('#hide-cities-second').show();
});

//скрытие блоков скрыть города)
$('#hide-cities-second').click(function (event) {
    event.preventDefault();
    $('#show-cities-second').show();
    $('#block-cities-second').fadeOut();
    $('#hide-cities-second').hide();
});

//открытие - скрытие отзывов и прочего в мобиле
$('.mobile-arrow').click(function () {
    $(this).closest('section').children('div:nth-child(2)').slideToggle();
});
$('.mobile-arrow').click(function () {
    $(this).closest('section.projects').find('.projects__projects-block').slideToggle();
});
$('.mobile-arrow').click(function () {
    $(this).closest('section.projects.works').find('.projects-show').slideToggle();
});
$('.mobile-arrow').click(function () {
    $(this).closest('section.projects.works').find('.projects-col-six').slideToggle();
});

//меню
$(function() {
    $('#main-menu').smartmenus({
        subMenusSubOffsetX: 1,
        subMenusSubOffsetY: -8
    });
});
