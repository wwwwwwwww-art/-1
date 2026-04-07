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

        document.addEventListener('DOMContentLoaded', function() {
            const modal = document.getElementById('modalMap');
            const worldMapBtn = document.getElementById('worldMapBtn');
            const closeBtn = document.getElementById('closeModalBtn');
            let map = null;

            function addHotelMarkers(mapInstance) {
                const hotels = [
                    {
                        name: " Grand Plaza Hotel",
                        coords: [55.7558, 37.6176],
                        rating: "⭐ 4.9",
                        price: "от 12 500 ₽",
                        description: "Роскошный вид на Красную площадь"
                    },
                    {
                        name: " Арбат Палас",
                        coords: [55.7522, 37.6005],
                        rating: "⭐ 4.7",
                        price: "от 9 800 ₽",
                        description: "Исторический центр, уютные номера"
                    },
                    {
                        name: " Садовая Ривьера",
                        coords: [55.7645, 37.5932],
                        rating: "⭐ 4.8",
                        price: "от 11 200 ₽",
                        description: "Рядом с Патриаршими прудами"
                    },
                    {
                        name: " Метрополь Классик",
                        coords: [55.7582, 37.6218],
                        rating: "⭐ 4.6",
                        price: "от 8 900 ₽",
                        description: "Шикарный сервис, современный стиль"
                    },
                    {
                        name: " Набережный Люкс",
                        coords: [55.7469, 37.6285],
                        rating: "⭐ 4.9",
                        price: "от 14 700 ₽",
                        description: "Панорамный вид на Москву-реку"
                    }
                ];
                const hotelIcon = L.divIcon({
                    className: 'custom-hotel-icon',
                    html: '🏨',
                    iconSize: [32, 32],
                    popupAnchor: [0, -12]
                });
                hotels.forEach(hotel => {
                    const marker = L.marker(hotel.coords, {
                        icon: L.icon({
                            iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
                            shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                            popupAnchor: [1, -34],
                        })
                    }).addTo(mapInstance);
                    const popupContent = `
                        <div style="font-family: 'Mulish', sans-serif; min-width: 200px;">
                            <h3 style="margin: 0 0 5px 0; color: #141F6F; font-weight: 800;">${hotel.name}</h3>
                            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                                <span style="background: #FFD966; padding: 2px 8px; border-radius: 20px; font-weight: bold;">${hotel.rating}</span>
                                <span style="color: #2c5f2d; font-weight: 700;">${hotel.price}</span>
                            </div>
                            <p style="margin: 5px 0; color: #2d3e6e;">${hotel.description}</p>
                            <button style="margin-top: 8px; background: #141F6F; color: white; border: none; padding: 5px 12px; border-radius: 25px; cursor: pointer; font-weight: 600;" onclick="alert('Бронирование: ${hotel.name}')">Забронировать</button>
                        </div>
                    `;
                    marker.bindPopup(popupContent);
                });
            }
            worldMapBtn.addEventListener('click', function(e) {
                e.preventDefault();
                modal.style.display = 'flex';
                
                if (!map) {
                    map = L.map('hotelMap').setView([55.751244, 37.618423], 14);
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '© OpenStreetMap contributors',
                        maxZoom: 19,
                    }).addTo(map);
                    addHotelMarkers(map);
                    L.control.scale().addTo(map);
                } else {
                    map.invalidateSize();
                    if (map.eachLayer) {
                        let markerCount = 0;
                        map.eachLayer(layer => {
                            if (layer instanceof L.Marker) markerCount++;
                        });
                        if (markerCount === 0) addHotelMarkers(map);
                    }
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
        });

         const counters = document.querySelectorAll('.tra');
         let counterItems = [];
    
    counters.forEach(counter => {
        const originalText = counter.innerText.trim(); 
        let rawNumber = 0;
        let prefix = '';
        let suffix = '';
        let hasPlus = false;
        let hasYears = false;
        if (originalText.includes('лет')) {
            const match = originalText.match(/(\d+)\+\s*лет/);
            if (match) {
                rawNumber = parseInt(match[1], 10);
                suffix = '+ лет';
                hasPlus = true;
            } else {
                rawNumber = 10;
                suffix = '+ лет';
            }
        } 
        else if (originalText.includes('+') && !originalText.includes('лет')) {
            let cleaned = originalText.replace(/\s/g, '').replace('+', '');
            rawNumber = parseInt(cleaned, 10);
            if (isNaN(rawNumber)) rawNumber = 12000;
            suffix = '+';
            hasPlus = true;
        }
        else if (originalText.includes('Более')) {
            const match = originalText.match(/Более\s*([\d\s]+)/);
            if (match) {
                let numStr = match[1].replace(/\s/g, '');
                rawNumber = parseInt(numStr, 10);
                prefix = 'Более ';
                if (isNaN(rawNumber)) rawNumber = 20000;
            } else {
                rawNumber = 20000;
                prefix = 'Более ';
            }
        }
        else {
            const digits = originalText.match(/\d+/g);
            if (digits) {
                rawNumber = parseInt(digits.join(''), 10);
            } else {
                rawNumber = 1000;
            }
        }
        if (!hasPlus && !prefix && !suffix && rawNumber === 0 && originalText.includes('000')) {
            let cleaned = originalText.replace(/\s/g, '').replace('+', '');
            rawNumber = parseInt(cleaned, 10);
            if (!isNaN(rawNumber)) suffix = '+';
        }
        counterItems.push({
            element: counter,
            currentValue: 0,
            targetValue: rawNumber,
            prefix: prefix,
            suffix: suffix,
            isAnimated: false,      
            hasPlus: hasPlus,
            originalText: originalText
        });
        if (prefix === 'Более ') {
            counter.innerText = `${prefix}0`;
        } else if (suffix === '+') {
            counter.innerText = `0+`;
        } else if (suffix === '+ лет') {
            counter.innerText = `0+ лет`;
        } else {
            counter.innerText = `0`;
        }
    });
    function animateCounter(item) {
        if (item.isAnimated) return;
        item.isAnimated = true;
        
        const target = item.targetValue;
        const duration = 1500;
        const stepTime = 20;  
        let steps = duration / stepTime;
        let currentStep = 0;
        const increment = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
            currentStep++;
            current += increment;
            let displayValue = Math.floor(current);
            if (displayValue > target) displayValue = target;
            if (item.prefix === 'Более ') {
                item.element.innerText = `${item.prefix}${displayValue.toLocaleString('ru-RU')}`;
            } else if (item.suffix === '+') {
                item.element.innerText = `${displayValue.toLocaleString('ru-RU')}+`;
            } else if (item.suffix === '+ лет') {
                item.element.innerText = `${displayValue}+ лет`;
            } else {
                item.element.innerText = displayValue.toLocaleString('ru-RU');
            }
            
            if (currentStep >= steps || displayValue >= target) {
                if (item.prefix === 'Более ') {
                    item.element.innerText = `${item.prefix}${target.toLocaleString('ru-RU')}`;
                } else if (item.suffix === '+') {
                    item.element.innerText = `${target.toLocaleString('ru-RU')}+`;
                } else if (item.suffix === '+ лет') {
                    item.element.innerText = `${target}+ лет`;
                } else {
                    item.element.innerText = target.toLocaleString('ru-RU');
                }
                clearInterval(timer);
            }
        }, stepTime);
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetElement = entry.target;
                const item = counterItems.find(i => i.element === targetElement);
                if (item && !item.isAnimated) {
                    animateCounter(item);
                }
            }
        });
    }, { threshold: 0.3 }); 
    counters.forEach(counter => {
        observer.observe(counter);
    });
    window.addEventListener('load', () => {
        counterItems.forEach(item => {
            const rect = item.element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const visiblePart = Math.min(1, (Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)) / rect.height);
            if (visiblePart > 0.3 && !item.isAnimated) {
                animateCounter(item);
            }
        });
    });
   
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                counterItems.forEach(item => {
                    if (!item.isAnimated) {
                        const rect = item.element.getBoundingClientRect();
                        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                        const visiblePart = Math.min(1, (Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)) / rect.height);
                        if (visiblePart > 0.3) {
                            animateCounter(item);
                        }
                    }
                });
                ticking = false;
            });
            ticking = true;
        }
    });
    
    