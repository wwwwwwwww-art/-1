const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

function clearSearchInput() {
    searchInput.value = '';
    searchInput.style.transform = 'scale(0.98)';
    setTimeout(() => {
        searchInput.style.transform = 'scale(1)';
    }, 150);
}

function performSearch() {
    const searchText = searchInput.value;
    if (searchText.trim() !== '') {
        console.log('Поиск:', searchText);
    }
    clearSearchInput();
}

searchButton.addEventListener('click', function() {
    performSearch();
});

searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        performSearch();
    }
});
function showHotelBookingForm(hotelName, hotelCity, hotelPrice) {
    const oldForm = document.getElementById('hotelBookingModal');
    if (oldForm) oldForm.remove();
    const modal = document.createElement('div');
    modal.id = 'hotelBookingModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
        backdrop-filter: blur(5px);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100000;
        font-family: 'Mulish', sans-serif;
        animation: fadeIn 0.3s ease;
    `;
    
    modal.innerHTML = `
        <div style="background: white; border-radius: 32px; max-width: 500px; width: 90%; max-height: 90vh; overflow-y: auto; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); animation: slideUp 0.3s ease;">
            <div style="padding: 28px 24px 24px 24px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <h2 style="color: #141F6F; margin: 0; font-size: 24px; font-weight: 800;">🏨 Бронирование отеля</h2>
                    <button id="closeHotelFormBtn" style="background: none; border: none; font-size: 28px; cursor: pointer; color: #666; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border-radius: 50%; transition: all 0.2s;">&times;</button>
                </div>
                
                <div style="background: linear-gradient(135deg, #667eea15, #764ba215); padding: 16px; border-radius: 20px; margin-bottom: 24px;">
                    <div style="font-weight: 800; font-size: 18px; color: #141F6F;">${hotelName}</div>
                    <div style="color: #666; font-size: 14px; margin-top: 4px;">📍 ${hotelCity}</div>
                    <div style="color: #2c5f2d; font-weight: 700; margin-top: 8px; font-size: 20px;">${hotelPrice}</div>
                </div>
                
                <form id="hotelBookingForm">
                    <div style="margin-bottom: 18px;">
                        <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #333;">Ваше имя *</label>
                        <input type="text" id="bookingName" required style="width: 100%; padding: 12px 16px; border: 2px solid #e0e0e0; border-radius: 16px; font-size: 16px; transition: all 0.2s; outline: none;" placeholder="Иван Иванов">
                    </div>
                    
                    <div style="margin-bottom: 18px;">
                        <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #333;">Телефон *</label>
                        <input type="tel" id="bookingPhone" required style="width: 100%; padding: 12px 16px; border: 2px solid #e0e0e0; border-radius: 16px; font-size: 16px; transition: all 0.2s; outline: none;" placeholder="+7 (999) 123-45-67">
                    </div>
                    
                    <div style="margin-bottom: 18px;">
                        <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #333;">Email *</label>
                        <input type="email" id="bookingEmail" required style="width: 100%; padding: 12px 16px; border: 2px solid #e0e0e0; border-radius: 16px; font-size: 16px; transition: all 0.2s; outline: none;" placeholder="ivan@example.com">
                    </div>
                    
                    <div style="margin-bottom: 18px;">
                        <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #333;">Дата заезда *</label>
                        <input type="date" id="bookingCheckIn" required style="width: 100%; padding: 12px 16px; border: 2px solid #e0e0e0; border-radius: 16px; font-size: 16px; transition: all 0.2s; outline: none;">
                    </div>
                    
                    <div style="margin-bottom: 18px;">
                        <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #333;">Дата выезда *</label>
                        <input type="date" id="bookingCheckOut" required style="width: 100%; padding: 12px 16px; border: 2px solid #e0e0e0; border-radius: 16px; font-size: 16px; transition: all 0.2s; outline: none;">
                    </div>
                    
                    <div style="margin-bottom: 18px;">
                        <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #333;">Количество гостей *</label>
                        <select id="bookingGuests" style="width: 100%; padding: 12px 16px; border: 2px solid #e0e0e0; border-radius: 16px; font-size: 16px; background: white; cursor: pointer;">
                            <option value="1">1 гость</option>
                            <option value="2">2 гостя</option>
                            <option value="3">3 гостя</option>
                            <option value="4">4 гостя</option>
                            <option value="5">5+ гостей</option>
                        </select>
                    </div>
                    
                    <div style="margin-bottom: 24px;">
                        <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #333;">Комментарий (необязательно)</label>
                        <textarea id="bookingComment" rows="3" style="width: 100%; padding: 12px 16px; border: 2px solid #e0e0e0; border-radius: 16px; font-size: 14px; resize: vertical; font-family: inherit;" placeholder="Особые пожелания..."></textarea>
                    </div>
                    
                    <button type="submit" style="width: 100%; background: linear-gradient(135deg, #141F6F, #0f195f); color: white; border: none; padding: 14px; border-radius: 40px; font-size: 18px; font-weight: bold; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;">✅ Отправить заявку</button>
                </form>
                
                <p style="text-align: center; font-size: 12px; color: #999; margin-top: 20px;">* Поля обязательные для заполнения</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    if (!document.querySelector('#booking-form-styles')) {
        const style = document.createElement('style');
        style.id = 'booking-form-styles';
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideUp {
                from {
                    transform: translateY(50px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    const closeBtn = document.getElementById('closeHotelFormBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeHotelBookingForm);
        closeBtn.addEventListener('mouseenter', () => closeBtn.style.background = '#f0f0f0');
        closeBtn.addEventListener('mouseleave', () => closeBtn.style.background = 'none');
    }
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeHotelBookingForm();
        }
    });
    const form = document.getElementById('hotelBookingForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('bookingName').value.trim();
            const phone = document.getElementById('bookingPhone').value.trim();
            const email = document.getElementById('bookingEmail').value.trim();
            const checkIn = document.getElementById('bookingCheckIn').value;
            const checkOut = document.getElementById('bookingCheckOut').value;
            const guests = document.getElementById('bookingGuests').value;
            const comment = document.getElementById('bookingComment').value;
            if (!name || !phone || !email || !checkIn || !checkOut) {
                showFormNotification('❌ Пожалуйста, заполните все обязательные поля!', '#f44336');
                return;
            }
            
            if (!validateEmail(email)) {
                showFormNotification('❌ Введите корректный email!', '#f44336');
                return;
            }
            
            if (new Date(checkIn) >= new Date(checkOut)) {
                showFormNotification('❌ Дата выезда должна быть позже даты заезда!', '#f44336');
                return;
            }
            showFormNotification(`✅ Заявка на бронирование отправлена!\n\nОтель: ${hotelName}\nИмя: ${name}\nДаты: ${checkIn} → ${checkOut}\n\nМы свяжемся с вами в ближайшее время!`, '#4CAF50');
            console.log('=== НОВАЯ ЗАЯВКА ОТЕЛЬ ===');
            console.log('Отель:', hotelName);
            console.log('Город:', hotelCity);
            console.log('Имя:', name);
            console.log('Телефон:', phone);
            console.log('Email:', email);
            console.log('Заезд:', checkIn);
            console.log('Выезд:', checkOut);
            console.log('Гостей:', guests);
            console.log('Комментарий:', comment || '—');
            console.log('=========================');
            setTimeout(() => {
                closeHotelBookingForm();
            }, 2000);
        });
    }
    const today = new Date().toISOString().split('T')[0];
    const checkInInput = document.getElementById('bookingCheckIn');
    const checkOutInput = document.getElementById('bookingCheckOut');
    
    if (checkInInput) checkInInput.min = today;
    if (checkOutInput) checkOutInput.min = today;
    if (checkInInput && checkOutInput) {
        checkInInput.addEventListener('change', function() {
            checkOutInput.min = this.value;
            if (checkOutInput.value && checkOutInput.value <= this.value) {
                checkOutInput.value = '';
            }
        });
    }
    const inputs = modal.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#141F6F';
            this.style.boxShadow = '0 0 0 3px rgba(20, 31, 111, 0.1)';
        });
        input.addEventListener('blur', function() {
            this.style.borderColor = '#e0e0e0';
            this.style.boxShadow = 'none';
        });
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    return re.test(email);
}

function showFormNotification(message, color) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: ${color};
        color: white;
        padding: 14px 28px;
        border-radius: 50px;
        font-weight: bold;
        z-index: 100001;
        font-family: 'Mulish', sans-serif;
        font-size: 14px;
        white-space: pre-line;
        text-align: center;
        max-width: 90%;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        animation: fadeInUp 0.3s ease, fadeOutDown 0.3s ease 2.7s forwards;
    `;
    
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateX(-50%) translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
            }
            @keyframes fadeOutDown {
                to {
                    opacity: 0;
                    transform: translateX(-50%) translateY(20px);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

function closeHotelBookingForm() {
    const modal = document.getElementById('hotelBookingModal');
    if (modal) {
        modal.style.animation = 'fadeIn 0.2s reverse';
        setTimeout(() => modal.remove(), 200);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modalMap');
    const worldMapBtn = document.getElementById('worldMapBtn');
    const closeBtn = document.getElementById('closeModalBtn');
    let map = null;

    function addRussianHotelMarkers(mapInstance) {
        const russianHotels = [
            {
                name: "🏨 Арарат Парк Хаятт",
                coords: [55.7558, 37.6176],
                rating: "⭐ 4.9",
                price: "от 15 500 ₽",
                description: "5 звезд в центре Москвы, вид на Кремль",
                city: "Москва"
            },
            {
                name: "🏨 Гранд Отель Европа",
                coords: [59.9311, 30.3102],
                rating: "⭐ 4.8",
                price: "от 18 900 ₽",
                description: "Исторический отель на Невском проспекте",
                city: "Санкт-Петербург"
            },
            {
                name: "🏨 Маринс Парк Отель",
                coords: [56.3262, 44.0059],
                rating: "⭐ 4.7",
                price: "от 7 900 ₽",
                description: "Вид на Волгу, уютная атмосфера",
                city: "Нижний Новгород"
            },
            {
                name: "🏨 Казань Ривьера",
                coords: [55.8304, 49.1113],
                rating: "⭐ 4.8",
                price: "от 8 500 ₽",
                description: "Аквапарк, спа-центр, отличный сервис",
                city: "Казань"
            },
            {
                name: "🏨 Hyatt Regency",
                coords: [55.0207, 82.9210],
                rating: "⭐ 4.9",
                price: "от 11 200 ₽",
                description: "Бизнес-отель премиум-класса",
                city: "Новосибирск"
            },
            {
                name: "🏨 Radisson Blu",
                coords: [54.1916, 45.1952],
                rating: "⭐ 4.7",
                price: "от 7 200 ₽",
                description: "Современный отель в центре",
                city: "Саранск"
            },
            {
                name: "🏨 Отель Золотое Кольцо",
                coords: [56.4224, 40.4416],
                rating: "⭐ 4.6",
                price: "от 5 900 ₽",
                description: "Колоритный отель в сердце Суздаля",
                city: "Суздаль"
            }
        ];
        
        russianHotels.forEach(hotel => {
            const marker = L.marker(hotel.coords).addTo(mapInstance);
            
            const popupContent = `
                <div style="font-family: 'Mulish', sans-serif; min-width: 280px; padding: 4px;">
                    <h3 style="margin: 0 0 5px 0; color: #141F6F; font-weight: 800;">${hotel.name}</h3>
                    <div style="color: #666; font-size: 12px; margin-bottom: 8px;">📍 ${hotel.city}</div>
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;">
                        <span style="background: #FFD966; padding: 2px 8px; border-radius: 20px; font-weight: bold;">${hotel.rating}</span>
                        <span style="color: #2c5f2d; font-weight: 700;">${hotel.price}</span>
                    </div>
                    <p style="margin: 5px 0 12px 0; color: #2d3e6e; font-size: 13px;">${hotel.description}</p>
                    <button class="book-hotel-form-btn" data-name="${hotel.name}" data-city="${hotel.city}" data-price="${hotel.price}" style="background: linear-gradient(135deg, #141F6F, #0f195f); color: white; border: none; width: 100%; padding: 12px 0; border-radius: 40px; font-weight: bold; cursor: pointer; font-size: 15px; transition: transform 0.1s ease, opacity 0.2s;">📝 Забронировать</button>
                </div>
            `;
            
            marker.bindPopup(popupContent);
            
            marker.on('popupopen', function() {
                const btn = document.querySelector('.book-hotel-form-btn');
                if (btn) {
                    const newBtn = btn.cloneNode(true);
                    btn.parentNode.replaceChild(newBtn, btn);
                    newBtn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        const hotelName = this.getAttribute('data-name');
                        const hotelCity = this.getAttribute('data-city');
                        const hotelPrice = this.getAttribute('data-price');
                        marker.closePopup();
                        showHotelBookingForm(hotelName, hotelCity, hotelPrice);
                    });
                }
            });
        });
    }
    
    if (worldMapBtn && modal && closeBtn) {
        worldMapBtn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'flex';
            
            if (!map) {
                map = L.map('hotelMap', {
                    attributionControl: false
                }).setView([55.751244, 37.618423], 5);
                
                L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                    attribution: '',
                    subdomains: 'abcd',
                    maxZoom: 19,
                    minZoom: 4
                }).addTo(map);
                
                addRussianHotelMarkers(map);
                L.control.scale().addTo(map);
            } else {
                map.invalidateSize();
            }
            
            setTimeout(() => {
                if (map) map.invalidateSize();
            }, 200);
        });

        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});

const originalRoutesData = [
    {
        name: "🏔️ Горный уикенд",
        description: "Идеальный маршрут для любителей активного отдыха...",
        hotels: "🏨 Отель «Горная жемчужина» (3 ночи)",
        transfers: "✈️ Авиаперелёт + трансфер",
        price: "💰 от 24 500 ₽ с человека",
        gradient: "linear-gradient(135deg, #6984b5ff 0%, #2b3b4c 100%)"
    },
    {
        name: "🏖️ Пляжный релакс",
        description: "Песчаные пляжи, лазурное море и полный релакс...",
        hotels: "🏨 5* отель «Морской бриз»",
        transfers: "🚌 Трансфер аэропорт-отель",
        price: "💰 от 38 900 ₽ за 7 ночей",
        gradient: "linear-gradient(135deg, #5397a8ff 0%, #1e7a5c 100%)"
    },
    {
        name: "🏛️ Культурный вояж",
        description: "Посещение музеев, старинных усадеб и театров...",
        hotels: "🏨 Boutique-отель в историческом центре",
        transfers: "🚆 Ж/д билеты Сапсан",
        price: "💰 от 19 200 ₽ (туры выходного дня)",
        gradient: "linear-gradient(135deg, #b791c7ff 0%, #6a2c70 100%)"
    }
];

function enhancedRenderRoute(index) {
    const routeContentDiv = document.getElementById('aiRoutesContent');
    if (!routeContentDiv) return;
    const route = originalRoutesData[index % originalRoutesData.length];
    routeContentDiv.style.background = route.gradient;
    routeContentDiv.style.borderRadius = '24px';
    routeContentDiv.style.transition = 'all 0.3s ease';
    routeContentDiv.innerHTML = `
        <div style="padding: 6px 4px 12px 4px; color: white; text-shadow: 0 1px 2px rgba(0,0,0,0.2);">
            <h3 style="font-size: 28px; margin-bottom: 20px; font-weight: 800;">${route.name}</h3>
            <div style="background: rgba(255,255,255,0.12); backdrop-filter: blur(4px); border-radius: 28px; padding: 18px 22px; margin-bottom: 24px;">
                <p style="font-size: 18px; line-height: 1.45; margin-bottom: 20px;">📌 ${route.description}</p>
                <p style="margin: 12px 0;"><span style="font-weight: bold;">🏨 Проживание:</span> ${route.hotels}</p>
                <p style="margin: 12px 0;"><span style="font-weight: bold;">🚗 Трансфер:</span> ${route.transfers}</p>
                <p style="margin: 18px 0 8px 0; font-size: 22px; font-weight: bold;">${route.price}</p>
            </div>
        </div>
    `;
}

window.renderRoute = enhancedRenderRoute;

// Добавляем глобальные стили для прокрутки модальных окон
const modalScrollStyles = document.createElement('style');
modalScrollStyles.textContent = `
    /* Разрешаем прокрутку внутри AI модального окна */
    .ai-modal-container {
        overflow-y: auto !important;
        max-height: 85vh !important;
    }
    
    /* Разрешаем прокрутку внутри контента AI модалки */
    .ai-modal-content {
        overflow-y: auto !important;
        max-height: 60vh !important;
        padding-right: 10px;
    }
    
    /* Разрешаем прокрутку формы бронирования */
    #routeBookingModal > div {
        overflow-y: auto !important;
        max-height: 90vh !important;
    }
    
    /* Убираем блокировку скролла у body при открытых модалках */
    body.modal-open {
        overflow: hidden !important;
    }
    
    /* Стили для скроллбара */
    .ai-modal-content::-webkit-scrollbar,
    #routeBookingModal > div::-webkit-scrollbar {
        width: 8px;
    }
    
    .ai-modal-content::-webkit-scrollbar-track,
    #routeBookingModal > div::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
    }
    
    .ai-modal-content::-webkit-scrollbar-thumb,
    #routeBookingModal > div::-webkit-scrollbar-thumb {
        background: #141F6F;
        border-radius: 10px;
    }
    
    .ai-modal-content::-webkit-scrollbar-thumb:hover,
    #routeBookingModal > div::-webkit-scrollbar-thumb:hover {
        background: #2a3a9e;
    }
`;
document.head.appendChild(modalScrollStyles);

// AI модальное окно с формой бронирования
const aiModal = document.getElementById('aiModal');
const aiButtons = document.querySelectorAll('.ai-button, .ai-button1');
const closeAiModal = document.querySelector('.close-ai-modal');
const aiLoading = document.getElementById('aiLoading');
const aiResults = document.getElementById('aiResults');
const regenerateBtn = document.getElementById('regenerateRoutes');

// Добавляем класс для контейнера модалки чтобы разрешить скролл
if (aiModal) {
    const aiContainer = aiModal.querySelector('.modal-container');
    if (aiContainer) {
        aiContainer.style.overflowY = 'auto';
        aiContainer.style.maxHeight = '85vh';
    }
}

// Данные о маршрутах
const routesData = [
    {
        icon: '🏔️',
        title: 'Горный уикенд • Красная Поляна',
        duration: '3 дня',
        price: 'от 15 900 ₽',
        priceValue: 15900,
        tags: ['Природа', 'Активный отдых'],
        description: 'Трекинг к водопадам, подъем на канатной дороге, ужин с видом на горы. Проживание в эко-отеле.',
        hotel: '⭐ Эко-отель «Горный воздух»',
        transport: '🚗 Трансфер из аэропорта Сочи'
    },
    {
        icon: '🏖️',
        title: 'Пляжный релакс • Анапа/Сочи',
        duration: '5 дней',
        price: 'от 24 500 ₽',
        priceValue: 24500,
        tags: ['Море', 'Спа'],
        description: 'Пляжный отдых с питанием по системе all inclusive. Посещение аквапарка и спа-центра.',
        hotel: '⭐⭐⭐⭐ Отель «Морской бриз»',
        transport: '🚌 Трансфер аэропорт-отель'
    },
    {
        icon: '🏙️',
        title: 'Культурный тур • Золотое кольцо',
        duration: '4 дня',
        price: 'от 19 200 ₽',
        priceValue: 19200,
        tags: ['Экскурсии', 'История'],
        description: 'Посещение Суздаля, Владимира, Боголюбово. Экскурсии с гидом и мастер-классы.',
        hotel: '🏨 Гостевой дом «Усадьба»',
        transport: '🚆 Комфортабельный автобус'
    },
    {
        icon: '⛵',
        title: 'Водное приключение • Байкал',
        duration: '6 дней',
        price: 'от 32 000 ₽',
        priceValue: 32000,
        tags: ['Экзотика', 'Фототур'],
        description: 'Прогулка на катере, посещение острова Ольхон, горячие источники.',
        hotel: '🏕️ Глэмпинг на берегу Байкала',
        transport: '✈️ Авиабилеты + групповой трансфер'
    }
];

// Функция открытия AI модалки
function openAiModal() {
    aiLoading.style.display = 'block';
    aiResults.style.display = 'none';
    aiModal.style.display = 'flex';
    document.body.classList.add('modal-open'); // Блокируем скролл body
    
    // Принудительно разрешаем скролл внутри модалки
    const modalContainer = aiModal.querySelector('.modal-container');
    if (modalContainer) {
        modalContainer.style.overflowY = 'auto';
        modalContainer.style.maxHeight = '85vh';
    }
    
    const aiContent = aiModal.querySelector('.ai-modal-content');
    if (aiContent) {
        aiContent.style.overflowY = 'auto';
        aiContent.style.maxHeight = '60vh';
    }
    
    setTimeout(() => {
        aiLoading.style.display = 'none';
        aiResults.style.display = 'block';
        renderRoutes(routesData);
    }, 1800);
}

// Функция отрисовки маршрутов с кнопкой бронирования
function renderRoutes(routes) {
    const container = document.getElementById('aiResults');
    if (!container) return;
    
    const oldCards = container.querySelectorAll('.ai-route-card');
    oldCards.forEach(card => card.remove());
    
    routes.forEach((route, idx) => {
        const card = document.createElement('div');
        card.className = 'ai-route-card';
        card.style.opacity = '0';
        card.style.transform = 'translateX(20px)';
        card.setAttribute('data-route', route.title);
        card.innerHTML = `
            <div class="route-icon">${route.icon}</div>
            <div class="route-info" style="flex: 1;">
                <h3 style="cursor: pointer;">${route.title}</h3>
                <p>${route.duration}, ${route.price}</p>
                <div class="route-tags">
                    ${route.tags.map(tag => `<span class="route-tag">${tag}</span>`).join('')}
                </div>
                <div class="route-details" style="display: none; margin-top: 12px; padding-top: 8px; border-top: 1px solid #e2e8f0;">
                    <p style="font-size: 13px; color: #555; margin-bottom: 8px;">📋 ${route.description}</p>
                    <p style="font-size: 12px; color: #141F6F; margin: 4px 0;">${route.hotel}</p>
                    <p style="font-size: 12px; color: #666;">${route.transport}</p>
                </div>
                <button class="route-book-btn" data-title="${route.title}" data-duration="${route.duration}" data-price="${route.price}" data-price-value="${route.priceValue}" style="margin-top: 10px; background: #141F6F; color: white; border: none; padding: 6px 16px; border-radius: 30px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s;">📝 Забронировать тур</button>
            </div>
        `;
        
        // Добавляем раскрывашку с деталями при клике на заголовок
        const titleElem = card.querySelector('h3');
        const detailsElem = card.querySelector('.route-details');
        titleElem.addEventListener('click', () => {
            const isVisible = detailsElem.style.display === 'block';
            detailsElem.style.display = isVisible ? 'none' : 'block';
        });
        
        if (regenerateBtn && regenerateBtn.parentNode) {
            container.insertBefore(card, regenerateBtn);
        } else {
            container.appendChild(card);
        }
        
        setTimeout(() => {
            card.style.transition = 'all 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateX(0)';
        }, idx * 80);
    });
    
    // Вешаем обработчики на кнопки бронирования
    document.querySelectorAll('.route-book-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const title = this.getAttribute('data-title');
            const duration = this.getAttribute('data-duration');
            const price = this.getAttribute('data-price');
            const priceValue = parseInt(this.getAttribute('data-price-value')) || 0;
            showRouteBookingForm(title, duration, price, priceValue);
        });
    });
}

// Форма бронирования тура с возможностью прокрутки
function showRouteBookingForm(routeTitle, duration, price, priceValue) {
    const oldForm = document.getElementById('routeBookingModal');
    if (oldForm) oldForm.remove();
    
    const modal = document.createElement('div');
    modal.id = 'routeBookingModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(5px);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100001;
        font-family: 'Mulish', sans-serif;
        animation: fadeIn 0.3s ease;
    `;
    
    const today = new Date().toISOString().split('T')[0];
    const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
    
    modal.innerHTML = `
        <div style="background: white; border-radius: 32px; max-width: 550px; width: 90%; max-height: 90vh; overflow-y: auto !important; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); animation: slideUp 0.3s ease;">
            <div style="padding: 28px 24px 24px 24px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <h2 style="color: #141F6F; margin: 0; font-size: 24px; font-weight: 800;">✈️ Бронирование тура</h2>
                    <button id="closeRouteFormBtn" style="background: none; border: none; font-size: 28px; cursor: pointer; color: #666; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border-radius: 50%; transition: all 0.2s;">&times;</button>
                </div>
                
                <div style="background: linear-gradient(135deg, #141F6F15, #2a3a9e15); padding: 18px; border-radius: 24px; margin-bottom: 24px;">
                    <div style="font-weight: 800; font-size: 20px; color: #141F6F;">${routeTitle}</div>
                    <div style="color: #555; font-size: 14px; margin-top: 6px;">📅 ${duration}</div>
                    <div style="color: #2c5f2d; font-weight: 800; margin-top: 10px; font-size: 24px;">${price}</div>
                    <div style="font-size: 12px; color: #888; margin-top: 5px;">за человека</div>
                </div>
                
                <form id="routeBookingForm">
                    <div style="margin-bottom: 18px;">
                        <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #333;">Ваше имя *</label>
                        <input type="text" id="routeName" required style="width: 100%; padding: 12px 16px; border: 2px solid #e0e0e0; border-radius: 16px; font-size: 16px; outline: none;" placeholder="Иван Иванов">
                    </div>
                    
                    <div style="margin-bottom: 18px;">
                        <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #333;">Телефон *</label>
                        <input type="tel" id="routePhone" required style="width: 100%; padding: 12px 16px; border: 2px solid #e0e0e0; border-radius: 16px; font-size: 16px; outline: none;" placeholder="+7 (999) 123-45-67">
                    </div>
                    
                    <div style="margin-bottom: 18px;">
                        <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #333;">Email *</label>
                        <input type="email" id="routeEmail" required style="width: 100%; padding: 12px 16px; border: 2px solid #e0e0e0; border-radius: 16px; font-size: 16px; outline: none;" placeholder="ivan@example.com">
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 18px;">
                        <div>
                            <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #333;">Дата вылета *</label>
                            <input type="date" id="routeStartDate" required style="width: 100%; padding: 12px 12px; border: 2px solid #e0e0e0; border-radius: 16px; font-size: 14px; outline: none;" min="${today}">
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #333;">Кол-во людей *</label>
                            <select id="routeTravelers" style="width: 100%; padding: 12px 12px; border: 2px solid #e0e0e0; border-radius: 16px; font-size: 14px; background: white; cursor: pointer;">
                                <option value="1">1 человек</option>
                                <option value="2" selected>2 человека</option>
                                <option value="3">3 человека</option>
                                <option value="4">4 человека</option>
                                <option value="5">5 человек</option>
                                <option value="6">6+ человек</option>
                            </select>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 24px;">
                        <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #333;">Дополнительные пожелания</label>
                        <textarea id="routeComment" rows="3" style="width: 100%; padding: 12px 16px; border: 2px solid #e0e0e0; border-radius: 16px; font-size: 14px; resize: vertical; font-family: inherit;" placeholder="Особые пожелания по отелю, питанию, трансферу..."></textarea>
                    </div>
                    
                    <div id="routeTotalPrice" style="background: #f0f3ff; padding: 12px 16px; border-radius: 16px; margin-bottom: 20px; text-align: center;">
                        <span style="color: #141F6F; font-weight: 600;">💰 Итого: </span>
                        <span style="color: #2c5f2d; font-weight: 800; font-size: 20px;">${price}</span>
                    </div>
                    
                    <button type="submit" style="width: 100%; background: linear-gradient(135deg, #141F6F, #0f195f); color: white; border: none; padding: 14px; border-radius: 40px; font-size: 18px; font-weight: bold; cursor: pointer;">✅ Отправить заявку</button>
                </form>
                
                <p style="text-align: center; font-size: 11px; color: #999; margin-top: 20px;">Нажимая кнопку, вы соглашаетесь с условиями бронирования</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.classList.add('modal-open');
    
    // Обновление общей цены
    const travelersSelect = document.getElementById('routeTravelers');
    const totalPriceSpan = document.querySelector('#routeTotalPrice span:last-child');
    const basePrice = priceValue;
    
    if (travelersSelect && totalPriceSpan && basePrice > 0) {
        const updateTotalPrice = () => {
            const travelers = parseInt(travelersSelect.value);
            const total = basePrice * travelers;
            totalPriceSpan.textContent = `${total.toLocaleString()} ₽`;
        };
        travelersSelect.addEventListener('change', updateTotalPrice);
        updateTotalPrice();
    }
    
    // Закрытие формы
    const closeBtn = document.getElementById('closeRouteFormBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.remove();
            if (!document.getElementById('aiModal')?.style.display === 'flex') {
                document.body.classList.remove('modal-open');
            }
        });
    }
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            if (!document.getElementById('aiModal')?.style.display === 'flex') {
                document.body.classList.remove('modal-open');
            }
        }
    });
    
    // Обработка отправки формы
    const form = document.getElementById('routeBookingForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('routeName').value.trim();
            const phone = document.getElementById('routePhone').value.trim();
            const email = document.getElementById('routeEmail').value.trim();
            const startDate = document.getElementById('routeStartDate').value;
            const travelers = document.getElementById('routeTravelers').value;
            const comment = document.getElementById('routeComment').value;
            
            if (!name || !phone || !email || !startDate) {
                showRouteNotification('❌ Пожалуйста, заполните все обязательные поля!', '#f44336');
                return;
            }
            
            if (!validateRouteEmail(email)) {
                showRouteNotification('❌ Введите корректный email!', '#f44336');
                return;
            }
            
            showRouteNotification(`✅ Заявка на тур "${routeTitle}" отправлена!`, '#4CAF50');
            
            console.log('=== НОВАЯ ЗАЯВКА НА ТУР ===');
            console.log('Тур:', routeTitle);
            console.log('Имя:', name);
            console.log('Телефон:', phone);
            console.log('Email:', email);
            console.log('Дата вылета:', startDate);
            console.log('Кол-во людей:', travelers);
            console.log('=========================');
            
            setTimeout(() => {
                modal.remove();
                if (!document.getElementById('aiModal')?.style.display === 'flex') {
                    document.body.classList.remove('modal-open');
                }
            }, 2000);
        });
    }
}

function validateRouteEmail(email) {
    return /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/i.test(email);
}

function showRouteNotification(message, color) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: ${color};
        color: white;
        padding: 14px 28px;
        border-radius: 50px;
        font-weight: bold;
        z-index: 100002;
        font-family: 'Mulish', sans-serif;
        font-size: 14px;
        text-align: center;
        max-width: 90%;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        animation: fadeInUp 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2500);
}

// Закрытие AI модалки
function closeAiModalFunc() {
    aiModal.style.display = 'none';
    document.body.classList.remove('modal-open');
}

// Генерация новых маршрутов
function regenerateRoutes() {
    const shuffled = [...routesData].sort(() => Math.random() - 0.5);
    renderRoutes(shuffled.slice(0, 4));
}

// Вешаем обработчики
if (aiButtons.length) {
    aiButtons.forEach(btn => {
        btn.addEventListener('click', openAiModal);
    });
}

if (closeAiModal) {
    closeAiModal.addEventListener('click', closeAiModalFunc);
}

if (regenerateBtn) {
    regenerateBtn.addEventListener('click', regenerateRoutes);
}

// Закрытие по клику вне модалки
window.addEventListener('click', (e) => {
    if (e.target === aiModal) {
        closeAiModalFunc();
    }
});

// Закрытие по ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && aiModal && aiModal.style.display === 'flex') {
        closeAiModalFunc();
    }
});

// Добавляем стили для прокрутки в CSS
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    .ai-modal-container, .modal-container {
        overflow-y: auto !important;
        max-height: 85vh !important;
    }
    
    #aiResults {
        overflow-y: auto !important;
        max-height: 55vh !important;
        padding-right: 10px;
    }
    
    #routeBookingModal > div {
        overflow-y: auto !important;
        max-height: 90vh !important;
    }
    
    body.modal-open {
        overflow: hidden !important;
    }
`;
document.head.appendChild(additionalStyles);

// Загрузка с летающим чемоданом (без звезд)
(function() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    
    loader.innerHTML = `
        <div class="loader-container">
            <div class="flying-suitcase">
                <div class="wing-left"></div>
                <div class="wing-right"></div>
                <div class="tail"></div>
                <div class="suitcase-body">
                    <div class="suitcase-handle"></div>
                    <div class="suitcase-wheels">
                        <div class="wheel"></div>
                        <div class="wheel"></div>
                    </div>
                </div>
                <div class="trails">
                    <span class="trail"></span>
                    <span class="trail"></span>
                    <span class="trail"></span>
                    <span class="trail"></span>
                    <span class="trail"></span>
                </div>
            </div>
            <div class="loader-progress">
                <div class="progress-bar">
                    <div class="progress-fill"></div>
                </div>
                <span class="progress-text">ЗАГРУЗКА ПУТЕШЕСТВИЯ...</span>
            </div>
            <div class="loader-title">
                ✈️ <span>TRAVEL</span> ✈️
            </div>
            <div class="destination-text">
                Куда летим сегодня?
            </div>
        </div>
    `;
    
    document.body.insertBefore(loader, document.body.firstChild);
    
    // Меняем текст назначения
    const destinations = [
        "Куда летим сегодня?",
        "🌴 Париж, жди нас!",
        "🏔️ В горы!",
        "🏖️ На море!",
        "🎒 Чемоданы собраны!"
    ];
    
    let destIndex = 0;
    const destElement = loader.querySelector('.destination-text');
    const interval = setInterval(() => {
        destIndex = (destIndex + 1) % destinations.length;
        if (destElement) {
            destElement.innerHTML = destinations[destIndex];
        }
    }, 500);
    
    // Скрываем спиннер после загрузки
    window.addEventListener('load', function() {
        setTimeout(function() {
            loader.classList.add('hide');
            clearInterval(interval);
            setTimeout(function() {
                loader.remove();
            }, 600);
        }, 2000);
    });
})();
// ========== АНИМАЦИИ ПРИ СКРОЛЛЕ (ДОБАВЛЕННЫЕ) ==========

(function() {
    // Функция проверки видимости элемента
    function isElementInViewport(el, offset = 100) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.top <= windowHeight - offset && rect.bottom >= offset;
    }

    // Функция активации анимаций
    function animateOnScroll() {
        const animatedElements = document.querySelectorAll('.scroll-animate');
        animatedElements.forEach(el => {
            if (isElementInViewport(el, 80)) {
                el.classList.add('scroll-visible');
            }
        });
    }

    // Добавляем классы анимации к элементам (если их еще нет)
    function initScrollAnimations() {
        // О компании
        const company = document.querySelector('.company');
        if (company && !company.classList.contains('scroll-animate')) {
            company.classList.add('scroll-animate', 'scroll-fade-left');
        }
        
        // Блок chet (статистика)
        const chet = document.querySelector('.chet');
        if (chet && !chet.classList.contains('scroll-animate')) {
            chet.classList.add('scroll-animate', 'scroll-fade-right');
        }
        
        // Каждый элемент статистики по отдельности
        const chet1 = document.querySelector('.chet1');
        if (chet1 && !chet1.classList.contains('scroll-animate')) {
            chet1.classList.add('scroll-animate', 'scroll-fade-up', 'delay-1');
        }
        
        const chet2 = document.querySelector('.chet2');
        if (chet2 && !chet2.classList.contains('scroll-animate')) {
            chet2.classList.add('scroll-animate', 'scroll-fade-up', 'delay-2');
        }
        
        const chet3 = document.querySelector('.chet3');
        if (chet3 && !chet3.classList.contains('scroll-animate')) {
            chet3.classList.add('scroll-animate', 'scroll-fade-up', 'delay-3');
        }
        
        // Блок conter
        const conter = document.querySelector('.conter');
        if (conter && !conter.classList.contains('scroll-animate')) {
            conter.classList.add('scroll-animate', 'scroll-scale');
        }
        
        // Текст внутри conter
        const ter = document.querySelector('.ter');
        if (ter && !ter.classList.contains('scroll-animate')) {
            ter.classList.add('scroll-animate', 'scroll-fade-left', 'delay-1');
        }
        
        const ty = document.querySelector('.ty');
        if (ty && !ty.classList.contains('scroll-animate')) {
            ty.classList.add('scroll-animate', 'scroll-fade-left', 'delay-2');
        }
        
        // Видео
        const video = document.querySelector('.custom-video');
        if (video && !video.classList.contains('scroll-animate')) {
            video.classList.add('scroll-animate', 'scroll-fade-right', 'delay-1');
        }
        
        // Заголовок топ отелей
        const comp4 = document.querySelector('.comp4');
        if (comp4 && !comp4.classList.contains('scroll-animate')) {
            comp4.classList.add('scroll-animate', 'scroll-fade-up');
        }
        
        // Изображение rest
        const rest = document.querySelector('.rest');
        if (rest && !rest.classList.contains('scroll-animate')) {
            rest.classList.add('scroll-animate', 'scroll-scale', 'delay-1');
        }
        
        // Карточки отелей
        const fotoItems = document.querySelectorAll('.foto10');
        fotoItems.forEach((item, index) => {
            if (!item.classList.contains('scroll-animate')) {
                const delayClass = `delay-${(index % 5) + 1}`;
                item.classList.add('scroll-animate', 'scroll-fade-up', delayClass);
            }
        });
        
        // Футер
        const footer = document.querySelector('footer');
        if (footer && !footer.classList.contains('scroll-animate')) {
            footer.classList.add('scroll-animate', 'scroll-fade-up');
        }
    }

    // Запускаем при загрузке
    window.addEventListener('load', function() {
        initScrollAnimations();
        animateOnScroll();
    });
    
    // Запускаем при скролле
    window.addEventListener('scroll', function() {
        animateOnScroll();
    });
    
    // Запускаем при ресайзе (на всякий случай)
    window.addEventListener('resize', function() {
        animateOnScroll();
    });
})();
// ========== СЧЕТЧИК ДЛЯ ЦИФР (ДОБАВЛЕННЫЙ) ==========

(function() {
    // Функция для анимированного счетчика
    function animateCounter(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentValue = Math.floor(progress * (end - start) + start);
            element.textContent = currentValue.toLocaleString('ru-RU') + (element.dataset.suffix || '');
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                element.textContent = end.toLocaleString('ru-RU') + (element.dataset.suffix || '');
            }
        };
        window.requestAnimationFrame(step);
    }

    // Проверка видимости элемента
    function isElementInViewport(el, offset = 100) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.top <= windowHeight - offset && rect.bottom >= offset;
    }

    // Получение числового значения из текста (убираем пробелы, буквы, знаки)
    function getNumberFromText(text) {
        const match = text.match(/(\d+[\s\d]*)/);
        if (match) {
            return parseInt(match[0].replace(/\s/g, ''), 10);
        }
        return null;
    }

    // Настройка счетчиков
    let countersStarted = false;
    let counters = [];

    function initCounters() {
        // Находим элементы с цифрами
        const chet1Num = document.querySelector('.chet1 .tra');
        const chet2Num = document.querySelector('.chet2 .tra');
        const chet3Num = document.querySelector('.chet3 .tra');
        
        if (!chet1Num || !chet2Num || !chet3Num) return;
        
        // Сохраняем оригинальные значения и суффиксы
        const originalValues = [
            { element: chet1Num, text: chet1Num.textContent, suffix: '+' },
            { element: chet2Num, text: chet2Num.textContent, suffix: ' лет' },
            { element: chet3Num, text: chet3Num.textContent, suffix: '' }
        ];
        
        // Извлекаем числа
        const numbers = originalValues.map(item => getNumberFromText(item.text));
        
        // Сохраняем суффиксы в data-атрибут
        originalValues.forEach((item, idx) => {
            item.element.dataset.suffix = item.suffix;
        });
        
        // Сохраняем в массив счетчиков
        counters = [
            { element: chet1Num, targetValue: numbers[0], currentValue: 0, started: false },
            { element: chet2Num, targetValue: numbers[1], currentValue: 0, started: false },
            { element: chet3Num, targetValue: numbers[2], currentValue: 0, started: false }
        ];
        
        // Устанавливаем начальное значение 0
        counters.forEach(counter => {
            counter.element.textContent = '0' + counter.element.dataset.suffix;
        });
    }

    // Запуск счетчиков при видимости блока
    function checkAndStartCounters() {
        if (countersStarted) return;
        
        const chetBlock = document.querySelector('.chet');
        if (!chetBlock) return;
        
        if (isElementInViewport(chetBlock, 150)) {
            countersStarted = true;
            
            // Запускаем каждый счетчик с разной скоростью
            counters.forEach(counter => {
                let duration = 2500; // 2.5 секунды на каждый счетчик
                
                if (counter.targetValue === 20000) {
                    duration = 3000; // Больше число - дольше анимация
                }
                if (counter.targetValue === 10) {
                    duration = 1800; // Маленькое число - быстрее
                }
                if (counter.targetValue === 12000) {
                    duration = 2800;
                }
                
                animateCounter(counter.element, 0, counter.targetValue, duration);
            });
        }
    }

    // Запускаем при загрузке
    window.addEventListener('load', function() {
        initCounters();
        // Небольшая задержка для надежности
        setTimeout(checkAndStartCounters, 300);
    });
    
    // Запускаем при скролле
    window.addEventListener('scroll', function() {
        checkAndStartCounters();
    });
})();
// ========== СИСТЕМА БАЛЛОВ ЗА ПУТЕШЕСТВИЯ ==========
(function() {
    // Ключ для хранения баллов в localStorage
    const POINTS_STORAGE_KEY = 'user_travel_points';
    
    // Функция получения текущих баллов
    function getCurrentPoints() {
        const points = localStorage.getItem(POINTS_STORAGE_KEY);
        return points ? parseInt(points, 10) : 1500; // по умолчанию 1500 баллов
    }
    
    // Функция сохранения баллов
    function savePoints(points) {
        localStorage.setItem(POINTS_STORAGE_KEY, points.toString());
        updateProfilePointsDisplay(points);
    }
    
    // Функция начисления баллов за бронирование
    function addPointsForBooking(priceValue, routeTitle) {
        // 1 балл = 10 рублей (округляем вниз)
        const pointsEarned = Math.floor(priceValue / 10);
        const currentPoints = getCurrentPoints();
        const newPoints = currentPoints + pointsEarned;
        savePoints(newPoints);
        
        // Показываем уведомление о начислении баллов
        showPointsNotification(pointsEarned, newPoints, routeTitle);
        
        return pointsEarned;
    }
    
    // Функция обновления отображения баллов в профиле
    function updateProfilePointsDisplay(points) {
        // Ищем элемент с классом .points-value на странице профиля
        const pointsElements = document.querySelectorAll('.points-value');
        pointsElements.forEach(el => {
            if (el.textContent.includes('б.')) {
                el.textContent = `${points} б.`;
            }
        });
        
        // Также обновляем, если есть элемент с id
        const pointsElement = document.getElementById('profilePointsValue');
        if (pointsElement) {
            pointsElement.textContent = `${points} б.`;
        }
        
        // Сохраняем в sessionStorage для передачи между страницами
        sessionStorage.setItem('updatedPoints', points.toString());
    }
    
    // Функция показа уведомления о начислении баллов
    function showPointsNotification(pointsEarned, totalPoints, routeTitle) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #141F6F, #0f195f);
            color: #FFD966;
            padding: 16px 24px;
            border-radius: 20px;
            font-weight: bold;
            z-index: 100003;
            font-family: 'Mulish', sans-serif;
            font-size: 14px;
            text-align: center;
            max-width: 320px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.2);
            animation: slideInRight 0.3s ease, fadeOutLeft 0.3s ease 3.7s forwards;
            border-left: 4px solid #FFD966;
        `;
        
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px;">
                <div style="font-size: 32px;">⭐</div>
                <div style="text-align: left;">
                    <div style="color: white; font-size: 16px;">+${pointsEarned} баллов!</div>
                    <div style="color: #ccc; font-size: 12px;">За "${routeTitle.substring(0, 30)}${routeTitle.length > 30 ? '...' : ''}"</div>
                    <div style="color: #FFD966; font-size: 13px; margin-top: 4px;">Всего: ${totalPoints} баллов</div>
                </div>
            </div>
        `;
        
        // Добавляем стили анимации, если их нет
        if (!document.querySelector('#points-notification-styles')) {
            const style = document.createElement('style');
            style.id = 'points-notification-styles';
            style.textContent = `
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(100px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                @keyframes fadeOutLeft {
                    to {
                        opacity: 0;
                        transform: translateX(100px);
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 4000);
    }
    
    // Функция для проверки и синхронизации баллов при загрузке страницы профиля
    function syncPointsOnPageLoad() {
        // Проверяем, есть ли обновленные баллы из sessionStorage
        const updatedPoints = sessionStorage.getItem('updatedPoints');
        if (updatedPoints) {
            savePoints(parseInt(updatedPoints, 10));
            sessionStorage.removeItem('updatedPoints');
        } else {
            // Просто обновляем отображение с текущими баллами
            updateProfilePointsDisplay(getCurrentPoints());
        }
    }
    
    // Перехватываем отправку формы бронирования тура
    function interceptRouteBooking() {
        // Создаем MutationObserver для отслеживания появления формы бронирования
        const observer = new MutationObserver(function(mutations) {
            const routeForm = document.getElementById('routeBookingForm');
            if (routeForm && !routeForm.hasAttribute('data-points-listener')) {
                routeForm.setAttribute('data-points-listener', 'true');
                
                const originalSubmit = routeForm.onsubmit;
                routeForm.addEventListener('submit', function(e) {
                    // Получаем цену тура
                    const priceSpan = document.querySelector('#routeTotalPrice span:last-child');
                    let priceValue = 0;
                    
                    if (priceSpan) {
                        const priceText = priceSpan.textContent;
                        const priceMatch = priceText.match(/(\d+[\s\d]*)/);
                        if (priceMatch) {
                            priceValue = parseInt(priceMatch[0].replace(/\s/g, ''), 10);
                        }
                    }
                    
                    // Получаем название тура
                    const titleElement = document.querySelector('#routeBookingModal .ai-route-card h3, #routeBookingModal [style*="font-weight: 800"]');
                    let routeTitle = 'тур';
                    if (titleElement) {
                        routeTitle = titleElement.textContent;
                    }
                    
                    // Сохраняем данные для начисления баллов после успешной отправки
                    if (priceValue > 0) {
                        setTimeout(() => {
                            addPointsForBooking(priceValue, routeTitle);
                        }, 500);
                    }
                });
            }
        });
        
        observer.observe(document.body, { childList: true, subtree: true });
    }
    
    // Перехватываем отправку формы бронирования отеля
    function interceptHotelBooking() {
        const observer = new MutationObserver(function(mutations) {
            const hotelForm = document.getElementById('hotelBookingForm');
            if (hotelForm && !hotelForm.hasAttribute('data-points-listener')) {
                hotelForm.setAttribute('data-points-listener', 'true');
                
                hotelForm.addEventListener('submit', function(e) {
                    // Получаем цену отеля
                    let priceValue = 3500; // значение по умолчанию
                    const priceElement = document.querySelector('#hotelBookingModal [style*="color: #2c5f2d"]');
                    if (priceElement) {
                        const priceText = priceElement.textContent;
                        const priceMatch = priceText.match(/(\d+)/);
                        if (priceMatch) {
                            priceValue = parseInt(priceMatch[0], 10);
                        }
                    }
                    
                    // Получаем название отеля
                    let hotelTitle = 'отель';
                    const hotelNameElement = document.querySelector('#hotelBookingModal [style*="font-weight: 800"][style*="color: #141F6F"]');
                    if (hotelNameElement) {
                        hotelTitle = hotelNameElement.textContent;
                    }
                    
                    setTimeout(() => {
                        addPointsForBooking(priceValue, hotelTitle);
                    }, 500);
                });
            }
        });
        
        observer.observe(document.body, { childList: true, subtree: true });
    }
    
    // Экспортируем функции в глобальный объект
    window.TravelPoints = {
        getPoints: getCurrentPoints,
        addPoints: addPointsForBooking,
        sync: syncPointsOnPageLoad,
        updateDisplay: updateProfilePointsDisplay
    };
    
    // Инициализация при загрузке страницы
    document.addEventListener('DOMContentLoaded', function() {
        syncPointsOnPageLoad();
        interceptRouteBooking();
        interceptHotelBooking();
    });
    
    // Если страница профиля загружается через AJAX, также обновляем
    window.addEventListener('pageshow', function() {
        syncPointsOnPageLoad();
    });
})();
// ========== СИНХРОНИЗАЦИЯ БАЛЛОВ НА ГЛАВНОЙ СТРАНИЦЕ ==========
(function() {
    const POINTS_STORAGE_KEY = 'user_travel_points';
    
    function getCurrentPoints() {
        let points = localStorage.getItem(POINTS_STORAGE_KEY);
        if (points !== null) return parseInt(points, 10);
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.points !== undefined) return currentUser.points;
        return 0;
    }
    
    function updateHeaderPoints() {
        const points = getCurrentPoints();
        const pointsElements = document.querySelectorAll('.points-value, #profilePoints, #headerPoints, .points-display');
        pointsElements.forEach(el => {
            if (el) el.textContent = points;
        });
    }
    
    // Функция начисления баллов (для бронирований на главной)
    window.addTravelPoints = function(priceValue, itemName) {
        const pointsEarned = Math.floor(priceValue / 10);
        const currentPoints = getCurrentPoints();
        const newPoints = currentPoints + pointsEarned;
        
        localStorage.setItem(POINTS_STORAGE_KEY, newPoints.toString());
        
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            currentUser.points = newPoints;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }
        
        updateHeaderPoints();
        
        // Сохраняем для синхронизации при переходе в профиль
        sessionStorage.setItem('updatedPoints', newPoints.toString());
        
        // Показать уведомление
        const notif = document.createElement('div');
        notif.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: linear-gradient(135deg, #141F6F, #0f195f);
            color: #FFD966;
            padding: 12px 20px;
            border-radius: 20px;
            font-weight: bold;
            z-index: 10000;
            animation: slideInRight 0.3s ease, fadeOut 0.3s ease 2.7s forwards;
        `;
        notif.innerHTML = `✨ +${pointsEarned} баллов за "${itemName}"! ✨`;
        document.body.appendChild(notif);
        setTimeout(() => notif.remove(), 3000);
        
        return newPoints;
    };
    
    // Обновляем при загрузке
    document.addEventListener('DOMContentLoaded', updateHeaderPoints);
    window.addEventListener('pageshow', updateHeaderPoints);
    
    // Стили для анимации
    if (!document.querySelector('#main-points-styles')) {
        const style = document.createElement('style');
        style.id = 'main-points-styles';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes fadeOut {
                to { opacity: 0; visibility: hidden; }
            }
        `;
        document.head.appendChild(style);
    }
})();
// ========== МОДАЛЬНОЕ ОКНО ДЛЯ КАРТОЧЕК ОТЕЛЕЙ ==========
(function() {
    const hotelsModalData = [
        {
            name: "Богемания",
            location: "Краснодарский край, Анапа",
            rating: "5.0 (1,2k отзывов)",
            price: "от 3 500 ₽",
            amenities: ["Салон красоты", "Бар, ресторан", "Спа-зона", "Консьерж"],
            desc: "Уютный бутик-отель в 5 минутах от моря. Номера с дизайнерским ремонтом. Работает ресторан паназиатской кухни и лаунж-бар с видом на море.",
            img: "/img/Group 44.png"
        },
        {
            name: "Amici Grand Hotel 4★",
            location: "Краснодарский край",
            rating: "4.9 (1,5k отзывов)",
            price: "от 3 200 ₽",
            amenities: ["Бассейн, спа", "Тренажерный зал", "Ресторан", "Детская комната"],
            desc: "Премиальный отель с крытым бассейном и хамамом. Подходит для деловых встреч и семейного отдыха. Завтрак «шведский стол» включён.",
            img: "/img/Group 45.png"
        },
        {
            name: "Дон-Плаза",
            location: "Ростов-на-Дону, центр",
            rating: "4.8 (1,1k отзывов)",
            price: "от 2 700 ₽",
            amenities: ["Сауна, спа", "Тренажерный зал", "Парковка", "Конференц-зал"],
            desc: "Современный бизнес-отель в шаговой доступности от набережной. Финская сауна, фитнес-центр, ресторан донской кухни.",
            img: "/img/Group 46.png"
        },
        {
            name: "Тренд Самара",
            location: "Самара, центр",
            rating: "4.6 (1,7k отзывов)",
            price: "от 2 600 ₽",
            amenities: ["Wi-Fi", "Доставка еды в номер", "Коворкинг", "Круглосуточный ресепшн"],
            desc: "Стильный хостел-отель для молодёжи и digital-номадов. Быстрый интернет, удобные рабочие места, кофе-поинт 24/7.",
            img: "/img/Group 47.png"
        },
        {
            name: "Холидэй Хотел",
            location: "Владивосток, центр",
            rating: "4.5 (1,3k отзывов)",
            price: "от 2 400 ₽",
            amenities: ["Wi-Fi", "Круглосуточная регистрация", "Трансфер", "Камера хранения"],
            desc: "Удобный отель рядом с вокзалом и набережной. Номера с панорамными окнами. Организуем трансфер до аэропорта.",
            img: "/img/Rectangle 27.png"
        },
        {
            name: "Pallada 2",
            location: "Владивосток",
            rating: "4.5 (1,1k отзывов)",
            price: "от 1 900 ₽",
            amenities: ["Wi-Fi", "Круглосуточная регистрация", "Общая кухня", "Эконом-класс"],
            desc: "Бюджетный вариант для путешественников. Чисто, комфортно, дружелюбный персонал. Есть общая зона отдыха и кухня.",
            img: "/img/Rectangle 30.png"
        }
    ];

    const hotelCards = document.querySelectorAll('.foto10');
    const hotelModal = document.getElementById('hotelCardModal');
    const hotelModalImg = document.getElementById('hotelModalImg');
    const hotelModalTitle = document.getElementById('hotelModalTitle');
    const hotelModalLocation = document.getElementById('hotelModalLocation');
    const hotelModalRating = document.getElementById('hotelModalRating');
    const hotelModalPrice = document.getElementById('hotelModalPrice');
    const hotelModalAmenities = document.getElementById('hotelModalAmenities');
    const hotelModalDesc = document.getElementById('hotelModalDesc');
    const closeHotelModal = document.getElementById('closeHotelModalBtn');
    const hotelBookBtn = document.getElementById('hotelBookBtn');

    function openHotelModal(index) {
        const hotel = hotelsModalData[index];
        if (!hotel) return;
        
        hotelModalImg.src = hotel.img;
        hotelModalTitle.textContent = hotel.name;
        hotelModalLocation.textContent = hotel.location;
        hotelModalRating.textContent = hotel.rating;
        hotelModalPrice.textContent = hotel.price;
        
        hotelModalAmenities.innerHTML = '';
        hotel.amenities.forEach(amenity => {
            const span = document.createElement('span');
            span.className = 'hotel-amenity';
            span.textContent = amenity;
            hotelModalAmenities.appendChild(span);
        });
        
        hotelModalDesc.textContent = hotel.desc;
        hotelModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeHotelModalFunc() {
        hotelModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    hotelCards.forEach((card, idx) => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
            e.stopPropagation();
            openHotelModal(idx);
        });
    });

    if (closeHotelModal) {
        closeHotelModal.addEventListener('click', closeHotelModalFunc);
    }

    hotelModal.addEventListener('click', (e) => {
        if (e.target === hotelModal) {
            closeHotelModalFunc();
        }
    });

    if (hotelBookBtn) {
        hotelBookBtn.addEventListener('click', () => {
            const hotelName = hotelModalTitle.textContent;
            alert(`✅ Отлично! Вы выбрали "${hotelName}". Наш менеджер свяжется с вами в ближайшее время для подтверждения бронирования. ✨`);
            closeHotelModalFunc();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && hotelModal.classList.contains('active')) {
            closeHotelModalFunc();
        }
    });
})();