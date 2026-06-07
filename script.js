document.getElementById('toggle-btn').addEventListener('click', function() {
    const circle = document.querySelector('.toggle-circle');
    circle.classList.toggle('active');
    document.body.classList.toggle('light-mode');
});