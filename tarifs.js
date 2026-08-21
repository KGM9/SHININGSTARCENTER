// ==========================================================================
// FILTRAGE INTERACTIF DES CATEGORIES TARIFAIRES
// ==========================================================================
function filterCategory(categoryName) {
    // Gestion de l'activation des boutons d'onglets
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    event.currentTarget.classList.add('active');

    // Filtrage des sections de prix
    const sections = document.querySelectorAll('.category-box');
    sections.forEach(section => {
        const categories = section.getAttribute('data-category');
        if (categoryName === 'all' || categories.includes(categoryName)) {
            section.style.display = 'flex';
        } else {
            section.style.display = 'none';
        }
    });
}

// ==========================================================================
// SECURITE ANTI-INSPECTION (SECOURS OPTIONNEL)
// ==========================================================================
document.addEventListener('contextmenu', (e) => e.preventDefault());

document.addEventListener('keydown', (e) => {
    if (e.key === 'F12') e.preventDefault();
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) e.preventDefault();
    if (e.ctrlKey && e.key === 'u') e.preventDefault();
});