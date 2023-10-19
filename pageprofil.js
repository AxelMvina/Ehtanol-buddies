const addBadgeButton = document.getElementById('add-badge-button');
const badgesContainer = document.querySelector('.badges');

addBadgeButton.addEventListener('click', (e) => {
    e.preventDefault();
    const badgeName = prompt('Nom du badge :');
    console.log(badgeName);
    if (badgeName) {
        const newBadge = document.createElement('div');
        newBadge.className = 'badge';
        newBadge.textContent = badgeName;

        badgesContainer.appendChild(newBadge);
    }
});