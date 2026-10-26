document.addEventListener('DOMContentLoaded', function() {
    // 1. Handle Sina Contact Form on homepage
    var sinaForms = document.querySelectorAll('.sina-contact-form');
    sinaForms.forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var name = form.querySelector('.sina-input-name') ? form.querySelector('.sina-input-name').value : '';
            var email = form.querySelector('.sina-input-email') ? form.querySelector('.sina-input-email').value : '';
            var subject = form.querySelector('.sina-input-subject') ? form.querySelector('.sina-input-subject').value : '';
            var message = form.querySelector('.sina-input-message') ? form.querySelector('.sina-input-message').value : '';

            var successText = form.querySelector('.sina-success-text');
            var processText = form.querySelector('.sina-process-text');
            var errorText = form.querySelector('.sina-error-text');

            if (processText) processText.style.display = 'block';
            if (errorText) errorText.style.display = 'none';

            setTimeout(function() {
                if (processText) processText.style.display = 'none';
                if (successText) {
                    successText.style.display = 'block';
                    successText.innerHTML = 'Thank you <strong>' + (name || 'for contacting us') + '</strong>! Your message has been received. Our team will contact you shortly at <strong>' + email + '</strong>.';
                }
                form.reset();
            }, 500);
        });
    });

    // 2. Handle WPForms on Contact page
    var wpForms = document.querySelectorAll('.wpforms-form');
    wpForms.forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var container = form.closest('.wpforms-container') || form.parentElement;
            var name = form.querySelector('input[name*="[0]"]') ? form.querySelector('input[name*="[0]"]').value : '';
            
            form.style.display = 'none';
            var confirmation = document.createElement('div');
            confirmation.className = 'wpforms-confirmation-container-full wpforms-confirmation-scroll';
            confirmation.style.padding = '20px';
            confirmation.style.background = '#e8f8f0';
            confirmation.style.border = '1px solid #48c774';
            confirmation.style.borderRadius = '8px';
            confirmation.style.color = '#0e5a32';
            confirmation.style.fontSize = '16px';
            confirmation.innerHTML = '<p><strong>Thanks for contacting us' + (name ? ', ' + name : '') + '!</strong> We will be in touch with you shortly at the provided number or email.</p><p><a href="https://wa.me/918929103286" target="_blank" style="color:#0e5a32;font-weight:bold;text-decoration:underline;">Click here to chat directly with us on WhatsApp (+91 8929103286) &rarr;</a></p>';
            container.appendChild(confirmation);
        });
    });
});
