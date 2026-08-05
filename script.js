document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const downloadBtn = document.getElementById('lightbox-download');
    const closeBtn = document.querySelector('.lightbox-close');

    // Sélection de l'ensemble des cartes d'images
    const photoCards = document.querySelectorAll('.photo-card');

    photoCards.forEach(card => {
        card.addEventListener('click', () => {
            const img = card.querySelector('img');

            if (img) {
                const imgSrc = img.getAttribute('src');
                const imgAlt = img.getAttribute('alt') || 'Image Shining Star Center';

                // Remplissage de la fenêtre modale
                modalImg.src = imgSrc;
                modalImg.alt = imgAlt;
                downloadBtn.href = imgSrc;

                // Nom de fichier propre pour le téléchargement
                const cleanFileName = imgAlt.toLowerCase().replace(/[^a-z0-9]/g, '-') + '.jpg';
                downloadBtn.setAttribute('download', cleanFileName);

                // Activation de la vue plein écran
                modal.classList.add('active');
            }
        });
    });

    // Fermeture avec la croix (X)
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    // Fermeture au clic en dehors de l'image
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }

    // Fermeture avec la touche Échap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
});