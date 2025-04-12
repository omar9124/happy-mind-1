let readMoreButtons = document.querySelectorAll('.read-more-btn');

readMoreButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();

        let cardBody = button.closest('.card-body');
        let extraText = cardBody.querySelector('.extra-description');

        if (extraText.style.display === 'none' || extraText.style.display === '') {
            extraText.style.display = 'block';
            button.textContent = 'Read less';
        } else {
            extraText.style.display = 'none';
            button.textContent = 'Read more';
        }
    });
});
