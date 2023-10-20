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

const openModalButton = document.getElementById('open-modal');
const modal = document.getElementById('myModal');
const closeModalButton = document.getElementById('close-modal');
const addCategoryButton = document.getElementById('add-category-button');
const categoryNameInput = document.getElementById('category-name');

openModalButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

addCategoryButton.addEventListener('click', () => {
    const categoryName = categoryNameInput.value;
    if (categoryName) {
        const newCategory = document.createElement('div');
        newCategory.className = 'category';
        newCategory.textContent = categoryName;
        modal.style.display = 'none';
    }
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});