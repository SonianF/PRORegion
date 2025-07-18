// document.addEventListener('DOMContentLoaded', function() {
//     const natureImage = document.querySelector('.nature_pict.active');
//     const popup = document.getElementById('popup');
//     const popupImage = document.getElementById('popupImage');
//     const closePopup = document.getElementById('closePopup');
//
//
//     natureImage.onclick = function() {
//         popupImage.src = this.src;
//         popup.style.display = 'flex';
//     };
//
//
//     closePopup.onclick = function() {
//         popup.style.display = 'none';
//     };
//
//     window.onclick = function(event) {
//         if (event.target === popup) {
//             popup.style.display = 'none';
//         }
//     };
// });
//
//
//     document.addEventListener('DOMContentLoaded', function () {
//         for (let i = 0; i <= 6; i++) {
//         const foto = document.querySelector(`#foto${i}`);
//         const popup_new = document.getElementById('popup_new');
//         const popupNewImage = document.getElementById('popupNewImage');
//         const closeNewPopup = document.getElementById('closeNewPopup');
//         const new_signature = document.querySelector(`#new_signature`);
//
//         foto.onclick = function () {
//             popupNewImage.src = this.src;
//             popup_new.style.display = 'flex';
//             new_signature.textContent = this.dataset.place;
//         };
//
//         closeNewPopup.onclick = function () {
//             popup_new.style.display = 'none';
//         };
//
//
//
//         window.onclick = function (event) {
//             if (event.target === popup_new) {
//                 popup_new.style.display = 'none';
//             }
//         };
//         }
//     });

document.addEventListener('DOMContentLoaded', function() {
    const natureImage = document.querySelector('.nature_pict.active');
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popupImage');
    const closePopup = document.getElementById('closePopup');

    // Функция для открытия всплывающего окна изображения природы
    natureImage.onclick = function() {
        popupImage.src = this.src;
        popup.style.display = 'flex';
    };

    // Функция для закрытия всплывающего окна изображения природы
    closePopup.onclick = function() {
        popup.style.display = 'none';
    };

    // Закрыть всплывающее окно при нажатии на фон
    popup.onclick = function(event) {
        // Проверяем, что клик был на фоне, а не на содержимом
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    };

    // Обработка всплывающих окон новых подписей
    for (let i = 0; i <= 6; i++) {
        const foto = document.querySelector(`#foto${i}`);
        const popup_new = document.getElementById('popup_new');
        const popupNewImage = document.getElementById('popupNewImage');
        const closeNewPopup = document.getElementById('closeNewPopup');
        const new_signature = document.querySelector(`#new_signature`);

        // Функция для открытия всплывающего окна новой подписи
        foto.onclick = function() {
            popupNewImage.src = this.src;
            popup_new.style.display = 'flex';
            new_signature.textContent = this.dataset.place;
        };

        // Функция для закрытия всплывающего окна новой подписи
        closeNewPopup.onclick = function() {
            popup_new.style.display = 'none';
        };

        // Закрыть всплывающее окно при нажатии на фон
        popup_new.onclick = function(event) {
            // Проверяем, что клик был на фоне, а не на содержимом
            if (event.target === popup) {
                popup_new.style.display = 'none';
            }
        };
    }
});