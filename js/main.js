var map = document.getElementById('map');
if(map) {
    ymaps.ready(function init() {
        var myMap = new ymaps.Map("map", {
            center: [56.826448, 60.618793],
            zoom: 16
        });
        myMap.controls.remove('zoomControl');
        myMap.controls.remove('rulerControl');
        myMap.controls.remove('geolocationControl');
        myMap.controls.remove('routeButtonControl');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('fullscreenControl');
        myMap.controls.remove('searchControl');
        var myPlacemark = new ymaps.GeoObject({
                geometry: {
                    type: "Point",
                    coordinates: [56.825791, 60.616230]
                },


            },
            {
                preset: 'islands#blackStretchyIcon',
            });
        myMap.geoObjects
            .add(myPlacemark)
            .add(new ymaps.Placemark([56.825791, 60.616230], {

                iconCaption: 'ул.Розы Люксембург, дом 67Б/3'
            }, {
                preset: 'islands#redDotIconWithCaption'
            }))
    });
}
var slider = document.getElementById('slider');
if(slider) {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        autoHeight: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
}
$(document).ready(function () {

    var $progress = $('.home__loading');
    $progress.eq(0).animate({width:"100%"}, 3000);
    $('.home__info').delay(3000).fadeIn(1500);

});