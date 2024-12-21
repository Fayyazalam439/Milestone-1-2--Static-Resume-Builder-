var skillsButton = document.getElementById('skills-button');
var skillsDiv = document.getElementById('skills');
skillsButton.addEventListener('click', function () {
    if (skillsDiv.style.display === 'none') {
        skillsDiv.style.display = 'block';
        skillsButton.textContent = 'Hide Skills';
    }
    else {
        skillsDiv.style.display = 'none';
        skillsButton.textContent = 'Show Skills';
    }
});
