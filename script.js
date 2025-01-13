const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        576: { // Mobile devices
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        768: { // Tablets
            slidesPerView: 2,
            spaceBetween: 15,

        },
        1200: { // Desktops
            slidesPerView: 3, 
            spaceBetween: 20,
        },
    },
});

document.getElementById('readMoreBtn').addEventListener('click', function () {
    const bioText = document.getElementById('bioText');
    const hiddenText = bioText.querySelector('.hidden-text');
    const btn = this;

    if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
        hiddenText.style.display = 'inline';
        btn.textContent = 'Read Less';
    } else {
        hiddenText.style.display = 'none';
        btn.textContent = 'Read More';
    }
});



 document.querySelector("form").addEventListener("submit", function(event) {
        let formValid = true;

        // Validate Name
        if (!document.getElementById("user_name").value) {
            document.getElementById("name_error").textContent = "Name is required.";
            formValid = false;
        }

        // Validate Phone
        if (!document.getElementById("user_phone").value) {
            document.getElementById("phone_error").textContent = "Phone number is required.";
            formValid = false;
        }

        // Validate Email
        const email = document.getElementById("user_email").value;
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            document.getElementById("email_error").textContent = "A valid email is required.";
            formValid = false;
        }

        // Validate Message
        if (!document.getElementById("user_message").value) {
            document.getElementById("message_error").textContent = "Message is required.";
            formValid = false;
        }

        // If form is invalid, prevent submission
        if (!formValid) {
            event.preventDefault();
        }
    });

// Automatically open the modal with a delay
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const modal = new bootstrap.Modal(document.getElementById('imageModal'));
        modal.show();
    }, 1500);
});
