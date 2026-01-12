document.addEventListener('DOMContentLoaded', () => {
    // Form Handling
    const form = document.getElementById('notifyForm');
    const messageEl = document.getElementById('formMessage');
    const emailInput = document.getElementById('email');
    const submitBtn = form.querySelector('.submit-btn');
    const originalBtnContent = submitBtn.innerHTML;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!emailInput.value) return;

        // Simulate API call
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Joining...</span>';

        // Simpler, faster interaction
        setTimeout(() => {
            submitBtn.innerHTML = '<span>Joined!</span>';
            submitBtn.style.backgroundColor = '#15803d'; // Corporate green matches CSS
            submitBtn.style.color = 'white'; // Increase contrast
            messageEl.textContent = "Thank you. We will notify you when we launch.";
            messageEl.style.opacity = '1';
            emailInput.value = '';

            // Reset after delay
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnContent;
                submitBtn.style.backgroundColor = ''; // Revert
                submitBtn.style.color = ''; // Revert
                messageEl.style.opacity = '0';
            }, 3000);
        }, 1000);
    });
});
