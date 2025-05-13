// Navigation
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.getElementById('navLinks');
    
    // Toggle menu when hamburger is clicked
    hamburgerMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
        
        // Toggle aria-expanded for accessibility
        const isExpanded = navLinks.classList.contains('active');
        hamburgerMenu.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburgerMenu.classList.remove('active');
            hamburgerMenu.setAttribute('aria-expanded', false);
        }
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburgerMenu.classList.remove('active');
            hamburgerMenu.setAttribute('aria-expanded', false);
        }
    });
});

// Slider functionality
function initSlider() {
    const slider = document.querySelector('.slider');
    if (!slider) return; // Slider yoksa fonksiyondan çık

    const slides = slider.querySelectorAll('.slide');
    const nav = slider.querySelector('.slider-nav');
    let currentSlide = 0;
    let slideInterval;
    let touchStartX = 0;
    let touchEndX = 0;
    let isDragging = false;
    let startTime;
    let currentTranslate = 0;

    // Slider görselleri
    const slideImages = [
        './public/images/kapakresmi.jpg',
        './public/images/diyetisyenkapak.png',
        './public/images/diyetlerkapak.jpg',
        './public/images/proteinmuffin.jpg',
        './public/images/onlinediyet.png'
    ];

    // Touch olayları
    slider.addEventListener('touchstart', touchStart);
    slider.addEventListener('touchmove', touchMove);
    slider.addEventListener('touchend', touchEnd);

    // Mouse olayları
    slider.addEventListener('mousedown', touchStart);
    slider.addEventListener('mousemove', touchMove);
    slider.addEventListener('mouseup', touchEnd);
    slider.addEventListener('mouseleave', touchEnd);

    function touchStart(e) {
        isDragging = true;
        startTime = new Date();
        touchStartX = getPositionX(e);
        slider.style.transition = 'none';
    }

    function touchMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        const currentPosition = getPositionX(e);
        const diff = currentPosition - touchStartX;
        const movePercent = (diff / slider.offsetWidth) * 100;
        currentTranslate = movePercent;
        updateSliderPosition();
    }

    function touchEnd() {
        if (!isDragging) return;
        isDragging = false;
        const endTime = new Date();
        const timeElapsed = endTime - startTime;
        
        // Hızlı kaydırma için eşik değeri
        const swipeThreshold = 50; // pixel
        const timeThreshold = 300; // milliseconds
        
        if (Math.abs(currentTranslate) > swipeThreshold && timeElapsed < timeThreshold) {
            if (currentTranslate > 0) {
                goToSlide(currentSlide - 1);
            } else {
                goToSlide(currentSlide + 1);
            }
        } else {
            // Yavaş kaydırma için eşik değeri
            if (Math.abs(currentTranslate) > 25) {
                if (currentTranslate > 0) {
                    goToSlide(currentSlide - 1);
                } else {
                    goToSlide(currentSlide + 1);
                }
            } else {
                goToSlide(currentSlide);
            }
        }
        
        currentTranslate = 0;
        slider.style.transition = 'transform 0.3s ease-out';
        updateSliderPosition();
    }

    function getPositionX(e) {
        return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    }

    function updateSliderPosition() {
        slider.style.transform = `translateX(${currentTranslate}%)`;
    }

    // Slide'ları hazırla
    slides.forEach((slide, index) => {
        // Her slide için bir dot oluştur
        const dot = document.createElement('div');
        dot.className = 'slider-dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        nav.appendChild(dot);

        // Slide'a tıklama olayı ekle
        slide.addEventListener('click', (e) => {
            if (!isDragging && Math.abs(currentTranslate) < 5) {
                const link = slide.getAttribute('data-link');
                if (link) window.location.href = link;
            }
        });

        // Her slayta arka plan görselini ata
        slide.style.backgroundImage = `url('${slideImages[index]}')`;
        // 4. slayt (Tarifler) ve 5. slayt (İletişim) için özel ayarlar
        if (index === 3) {
            slide.style.backgroundColor = '#fff';
        }
        if (index === 4) {
            slide.style.backgroundSize = 'contain';
            slide.style.backgroundRepeat = 'no-repeat';
            slide.style.backgroundPosition = 'center';
            slide.style.backgroundColor = '#fff';
        }
    });

    // İlk slide'ı aktif yap
    slides[0].classList.add('active');

    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        nav.children[currentSlide].classList.remove('active');
        
        currentSlide = (n + slides.length) % slides.length;
        
        slides[currentSlide].classList.add('active');
        nav.children[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    // Otomatik geçiş başlat
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000); // Her 5 saniyede bir geç
    }

    // Mouse üzerine gelince dur
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    // Mouse ayrılınca devam et
    slider.addEventListener('mouseleave', () => {
        if (!isDragging) {
            startSlideShow();
        }
    });

    // Slider'ı başlat
    startSlideShow();
}

// Sayfa yüklendiğinde slider'ı başlat
document.addEventListener('DOMContentLoaded', initSlider);