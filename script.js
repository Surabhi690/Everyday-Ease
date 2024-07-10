let currentIndex = 0;
const reviews = document.querySelectorAll('.review');

function changeReview(n) {
    reviews[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + n + reviews.length) % reviews.length;
    reviews[currentIndex].style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', () => {
    reviews.forEach((review, index) => {
        if (index !== currentIndex) {
            review.style.display = 'none';
        }
    });

    document.querySelectorAll('.faq-question').forEach((question) => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });
});
