var button1 = document.getElementById('btn-skill');
var skills = document.getElementById('skill');
button1.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
