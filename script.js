

// script.js

const form = document.getElementById('contact-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const url = '/contact'; // Server-side endpoint URL
    const options = {
        method: 'POST',
        body: formData
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (data.success) {
            alert('Message sent successfully!');
            form.reset();
        } else {
            alert('Error sending message. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error sending message. Please try again.');
    }
});
