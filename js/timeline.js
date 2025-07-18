$(function() {
    // Обрабатываем каждый слайд отдельно
    $('.slide').each(function() {
        var $slide = $(this);
        var inputs = $slide.find('.input');
        var paras = $slide.find('.description-flex-container p');
        var natureImage = $('#yearImage');

        inputs.click(function() {
            var t = $(this),
                ind = t.index(),
                matchedPara = paras.eq(ind);

            t.add(matchedPara).addClass('active');

            inputs.not(t).removeClass('active');
            paras.not(matchedPara).removeClass('active');

            // Заменяем изображение
            var newImage = t.data('image');
            natureImage.attr('src', newImage);

        });
        // if (inputs.length !== 5) {
        //     natureImage.css('margin-left', '15%'); // Применяем отступ через jQuery
        //     natureImage.css('width', '100%');
        // }
    });
});

// Обновление года в заголовке
const yearValueElement = document.getElementById('yearValue'); // Объявляем переменную один раз
const inputs = document.querySelectorAll('.input');

function updateYearInHeader() {
    // Находим активный элемент
    const activeInput = document.querySelector('.input.active span');
    if (activeInput) {
        const year = activeInput.getAttribute('data-year');
        yearValueElement.innerText = year;
    }
}

// Добавляем обработчик клика на элементы .input
inputs.forEach(input => {
    input.addEventListener('click', function() {
        inputs.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        updateYearInHeader();
    });
});

// Функция для установки одинаковой высоты
const paragraphs = document.querySelectorAll('#info .r_elem');

function setEqualHeight() {
    let maxHeight = 0;

    paragraphs.forEach(paragraph => {
        paragraph.style.height = 'auto'; // Сбрасываем высоту
        const height = paragraph.offsetHeight; // Получаем текущую высоту

        // Проверяем, что высота больше 0
        if (height > maxHeight) {
            maxHeight = height; // Обновляем максимальную высоту
        }
    });

    paragraphs.forEach(paragraph => {
        paragraph.style.height = `${maxHeight}px`; // Устанавливаем одинаковую высоту
    });
}

// Вызываем функцию при загрузке страницы
window.onload = function() {
    setEqualHeight();
};

// Вызываем функцию при изменении размера окна
window.addEventListener('resize', setEqualHeight);