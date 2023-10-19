const addBadgeButton = document.getElementById('add-badge-button');
const badgesContainer = document.getElementById('badges');

addBadgeButton.addEventListener('click', (e) => {
    e.preventDefault();
    const badgeName = prompt('Nom du badge :');
    if (badgeName) {
        const newBadge = document.createElement('div');
        newBadge.className = 'badge';
        newBadge.textContent = badgeName;

        badgesContainer.appendChild(newBadge);
    }
});