document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
        const menuIcon = document.querySelector('.menu-icon');
        const dropdownMenu = document.querySelector('.dropdown-menu');
    
        menuIcon.addEventListener('click', function() {
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });
        document.querySelector('.menu-icon').addEventListener('click', function() {
            this.classList.toggle('clicked');
            document.querySelector('.dropdown-menu').classList.toggle('clicked');
        });
    
        document.querySelectorAll('.nav-link').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                dropdownMenu.style.display = 'none'; 
            });
        });
    
    const starRating = document.querySelector('.star-rating');
    if (starRating) {
        starRating.addEventListener('click', function(e) {
            if (e.target.classList.contains('fa-star')) {
                const star = e.target.getAttribute('data-star');
                rate(star);
            }
        });
    }

    function rate(star) {
        const stars = document.querySelectorAll('.star-rating i');
        stars.forEach(starElement => {
            if (starElement.getAttribute('data-star') <= star) {
                starElement.classList.add('fas');
                starElement.classList.remove('far');
            } else {
                starElement.classList.add('far');
                starElement.classList.remove('fas');
            }
        });
        document.querySelector('.star-rating').setAttribute('data-rating', star);
    }

    const carouselImages = document.querySelector('.carousel-images');
    const carouselText = document.getElementById('carousel-text');
    const texts = [
        "Side Part (Bočni Razdeljak)",
        "Middle Part (Srednji Razdeljak)",
        "Slickback (Zaližena Kosa)"
    ];

    if (carouselImages && carouselText) {
        const totalImages = carouselImages.querySelectorAll('img').length;
        let index = 0;

        function updateCarousel() {
            carouselImages.style.transform = `translateX(-${index * 100}%)`;
            carouselText.textContent = texts[index];
        }

        function moveToNextImage() {
            index = (index + 1) % totalImages;
            updateCarousel();
        }

        setInterval(moveToNextImage, 2000);
        updateCarousel();
    }

    const carouselImages1 = document.querySelector('.carousel-images1');
    const carouselText1 = document.getElementById('carousel-text1');
    const texts1 = [
        "Farbanje",
        "Pramenovi",
    ];

    if (carouselImages1 && carouselText1) {
        const totalImages1 = carouselImages1.querySelectorAll('img').length;
        let index1 = 0;

        function updateCarousel1() {
            carouselImages1.style.transform = `translateX(-${index1 * 100}%)`;
            carouselText1.textContent = texts1[index1];
        }

        function moveToNextImage1() {
            index1 = (index1 + 1) % totalImages1;
            updateCarousel1();
        }

        setInterval(moveToNextImage1, 4000);
        updateCarousel1();
    }

    const carouselImages2 = document.querySelector('.carousel-images2');
    const carouselText2 = document.getElementById('carousel-text2');
    const texts2 = [
        "Mid Fade",
        "Taper Fade",
        "Burst Fade"
    ];

    if (carouselImages2 && carouselText2) {
        const totalImages2 = carouselImages2.querySelectorAll('img').length;
        let index2 = 0;

        function updateCarousel2() {
            carouselImages2.style.transform = `translateX(-${index2 * 100}%)`;
            carouselText2.textContent = texts2[index2];
        }

        function moveToNextImage2() {
            index2 = (index2 + 1) % totalImages2;
            updateCarousel2();
        }

        setInterval(moveToNextImage2, 3000);
        updateCarousel2();
    }

    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
