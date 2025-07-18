
$(document).ready(function() {
    const imageContainer = $('.image-container');
    const photo = $('.elem_img');
    const point = $('.point_mount');

    function positionPoint(event) {
        const containerOffset = imageContainer.offset();
        const containerWidth = imageContainer.width();
        const containerHeight = imageContainer.height();

        // Рассчитываем позицию точки относительно контейнера
        const pointX = event.pageX - containerOffset.left;
        const pointY = event.pageY - containerOffset.top;

        // Нормализуем позицию точки в процентах
        const pointXPercent = (pointX / containerWidth) * 100;
        const pointYPercent = (pointY / containerHeight) * 100;

        // Устанавливаем позицию точки
        point.css({
            left: `${pointXPercent}%`,
            top: `${pointYPercent}%`
        });
    }

    // Обновляем позицию точки при изменении размера окна
    $(window).resize(function() {
        positionPoint();
    });

    // Устанавливаем начальную позицию точки при загрузке изображения
    photo.on('load', function() {
        positionPoint();
    });

    // Обновляем позицию точки при наведении мыши
    // imageContainer.mousemove(positionPoint);
});