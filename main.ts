const skillsButton = document.getElementById('skills-button') as HTMLButtonElement;
const skillsDiv = document.getElementById('skills') as HTMLDivElement;

skillsButton.addEventListener('click', () => {
    if (skillsDiv.style.display === 'none') {
        skillsDiv.style.display = 'block';
        skillsButton.textContent = 'Hide Skills';
    } else {
        skillsDiv.style.display = 'none';
        skillsButton.textContent = 'Show Skills';
    }
  });
