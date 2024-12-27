document.addEventListener('DOMContentLoaded', function() {
    const donationForm = document.getElementById('donationForm');
    donationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your donation!');
        donationForm.reset();
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for getting in touch!');
        contactForm.reset();
    });
});