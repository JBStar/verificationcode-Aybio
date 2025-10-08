(() => {
    'use strict';
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            const formData = new FormData(form);
            fetch('/contact.php', {
                method: 'POST',
                body: formData
            })
                .then(res => res.text())
                .then(data => alert('Message sent successfully!'))
                .catch(err => alert('Error sending message.'));
        }
        form.classList.add('was-validated');
    }, false);
})();