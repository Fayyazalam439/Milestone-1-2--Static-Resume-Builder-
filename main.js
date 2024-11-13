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
// const skillsButton = document.getElementById('skills-button') as HTMLElement;
// const skillsDiv = document.getElementById('skills') as HTMLElement;
// if (skillsButton && skillsDiv) {
//     skillsDiv.style.display = "block";
//     skillsButton.addEventListener('click', () => {
//         if (skillsDiv.style.display === "block") {
//             skillsDiv.style.display = "none";
//         } else {
//             skillsDiv.style.display = "block";
//         }
//     });
// }
