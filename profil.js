const POINTS_STORAGE_KEY = 'user_travel_points';

function getCurrentPoints() {
    let points = localStorage.getItem(POINTS_STORAGE_KEY);
    if (points !== null) return parseInt(points, 10);
    return 0;
}

function savePointsToStorage(points) {
    localStorage.setItem(POINTS_STORAGE_KEY, points.toString());
}

function updateProfilePointsDisplay(points) {
    const profilePointsSpan = document.getElementById('profilePoints');
    if (profilePointsSpan) profilePointsSpan.textContent = points;
    
    const headerPointsSpan = document.getElementById('headerPoints');
    if (headerPointsSpan) headerPointsSpan.textContent = points;
    
    const pointsValueElements = document.querySelectorAll('.points-value');
    pointsValueElements.forEach(el => {
        el.textContent = points + ' б.';
    });
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        currentUser.points = points;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
}
function resetPoints() {
    savePointsToStorage('0');
    updateProfilePointsDisplay(0);
    console.log('🗑️ Баллы обнулены при выходе');
}
document.addEventListener('DOMContentLoaded', function() {
    function loadUserDataToForm() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
        if (currentUser && currentUser.name && currentUser.name !== '') {
            if (document.getElementById('profile-name')) {
                document.getElementById('profile-name').value = currentUser.name || '';
            }
            if (document.getElementById('profile-email')) {
                document.getElementById('profile-email').value = currentUser.email || '';
            }
            if (document.getElementById('profile-phone')) {
                document.getElementById('profile-phone').value = currentUser.phone || '';
            }
            console.log('📋 Загружены данные пользователя:', currentUser.name);
        } else {
            if (document.getElementById('profile-name')) {
                document.getElementById('profile-name').value = '';
            }
            if (document.getElementById('profile-email')) {
                document.getElementById('profile-email').value = '';
            }
            if (document.getElementById('profile-phone')) {
                document.getElementById('profile-phone').value = '';
            }
            console.log('🆕 Нет сохраненного пользователя - форма пустая');
        }
    }
    loadUserDataToForm();
    const savedPoints = localStorage.getItem(POINTS_STORAGE_KEY);
    if (savedPoints) {
        updateProfilePointsDisplay(parseInt(savedPoints, 10));
    } else {
        updateProfilePointsDisplay(0);
    }
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
    
    function validatePhone(phone) {
        const re = /^[\d\s\-\+\(\)]{10,15}$/;
        return phone === '' || re.test(phone);
    }
    function showMessage(text, type) {
        let messageContainer = document.querySelector('.message-container');
        if (!messageContainer) {
            messageContainer = document.createElement('div');
            messageContainer.className = 'message-container';
            document.body.appendChild(messageContainer);
        }
        
        const message = document.createElement('div');
        message.className = `message ${type}`;
        message.textContent = text;
        
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: bold;
            z-index: 9999;
            animation: slideIn 0.3s ease-out;
            ${type === 'success' ? 'background-color: #4CAF50; color: white;' : 'background-color: #f44336; color: white;'}
        `;
        
        if (!document.querySelector('#message-styles')) {
            const style = document.createElement('style');
            style.id = 'message-styles';
            style.textContent = `@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`;
            document.head.appendChild(style);
        }
        
        messageContainer.appendChild(message);
        setTimeout(() => { if (message.remove) message.remove(); }, 3000);
    }
    function sendToTelegram(userData) {
        const message = `📋 НОВЫЙ ПОЛЬЗОВАТЕЛЬ%0A%0A👤 Имя: ${encodeURIComponent(userData.name)}%0A📧 Email: ${encodeURIComponent(userData.email)}%0A📞 Телефон: ${encodeURIComponent(userData.phone || 'не указан')}%0A⭐ Баллов: 0%0A%0A🕐 Время: ${encodeURIComponent(new Date().toLocaleString('ru-RU'))}`;
        const botToken = '8764687294:AAGO8k85NoNuncXIvEKA5NREaIP4gOs_PnA';
        const chatId = '6644013583';
        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}&parse_mode=HTML`;
        fetch(url).catch(err => console.error('❌ Ошибка отправки:', err));
    }
    const saveButton = document.getElementById('save-profile');
    if (saveButton) {
        const newSaveButton = saveButton.cloneNode(true);
        saveButton.parentNode.replaceChild(newSaveButton, saveButton);
        
        newSaveButton.addEventListener('click', function() {
            const name = document.getElementById('profile-name').value.trim();
            const email = document.getElementById('profile-email').value.trim();
            const phone = document.getElementById('profile-phone').value.trim();
            
            if (!name) { showMessage('Пожалуйста, введите имя!', 'error'); return; }
            if (!email) { showMessage('Пожалуйста, введите email!', 'error'); return; }
            if (!validateEmail(email)) { showMessage('Пожалуйста, введите корректный email адрес!', 'error'); return; }
            if (phone && !validatePhone(phone)) { showMessage('Пожалуйста, введите корректный номер телефона!', 'error'); return; }
            const newUser = { 
                name: name, 
                email: email, 
                phone: phone, 
                points: 0, 
                pointsHistory: [] 
            };
            localStorage.setItem('currentUser', JSON.stringify(newUser));
            savePointsToStorage('0');
            updateProfilePointsDisplay(0);
            let users = JSON.parse(localStorage.getItem('users')) || [];
            const userIndex = users.findIndex(user => user.email === email);
            if (userIndex === -1) {
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
                console.log('✅ Создан новый пользователь:', name);
            } else {
                showMessage('Пользователь с таким email уже существует!', 'error');
                return;
            }
            
            sendToTelegram(newUser);
            showMessage('Профиль успешно создан!', 'success');
            console.log('✅ Новый профиль создан с 0 баллов');
        });
    }
    const logoutButton = document.getElementById('logout-btn');
    if (logoutButton) {
        const newLogoutButton = logoutButton.cloneNode(true);
        logoutButton.parentNode.replaceChild(newLogoutButton, logoutButton);
        
        newLogoutButton.addEventListener('click', function() {
            if (confirm('Вы уверены, что хотите выйти?')) {
                resetPoints();
                localStorage.removeItem('currentUser');
                localStorage.removeItem('isAuthenticated');
                if (document.getElementById('profile-name')) document.getElementById('profile-name').value = '';
                if (document.getElementById('profile-email')) document.getElementById('profile-email').value = '';
                if (document.getElementById('profile-phone')) document.getElementById('profile-phone').value = '';
                
                showMessage('Вы вышли из системы, баллы обнулены', 'success');
                
                setTimeout(() => {
                    window.location.href = '/index.html-mane/index-mane.html';
                }, 1500);
            }
        });
    }
    ['profile-name', 'profile-email', 'profile-phone'].forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const saveBtn = document.getElementById('save-profile');
                    if (saveBtn) saveBtn.click();
                }
            });
        }
    });
});
window.addEventListener('pageshow', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.name && currentUser.name !== '') {
        if (document.getElementById('profile-name')) document.getElementById('profile-name').value = currentUser.name || '';
        if (document.getElementById('profile-email')) document.getElementById('profile-email').value = currentUser.email || '';
        if (document.getElementById('profile-phone')) document.getElementById('profile-phone').value = currentUser.phone || '';
        const points = localStorage.getItem(POINTS_STORAGE_KEY);
        updateProfilePointsDisplay(points ? parseInt(points, 10) : 0);
    } else {
        if (document.getElementById('profile-name')) document.getElementById('profile-name').value = '';
        if (document.getElementById('profile-email')) document.getElementById('profile-email').value = '';
        if (document.getElementById('profile-phone')) document.getElementById('profile-phone').value = '';
        updateProfilePointsDisplay(0);
    }
});
window.addEventListener('storage', function(e) {
    if (e.key === POINTS_STORAGE_KEY && e.newValue) {
        updateProfilePointsDisplay(parseInt(e.newValue, 10));
    }
});
window.TravelPoints = {
    getPoints: () => parseInt(localStorage.getItem(POINTS_STORAGE_KEY) || '0', 10),
    reset: resetPoints,
    updateDisplay: updateProfilePointsDisplay
};