document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const item = header.parentElement;
            const content = item.querySelector(".accordion-content");

            // Fermeture des autres accordéons + mise en pause des médias (audio/vidéo)
            document.querySelectorAll(".accordion-item").forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains("active")) {
                    otherItem.classList.remove("active");
                    const otherContent = otherItem.querySelector(".accordion-content");
                    otherContent.style.maxHeight = null;

                    // Mettre en pause les vidéos et audios des volets fermés
                    otherItem.querySelectorAll("audio, video").forEach(media => media.pause());
                }
            });

            // Ouvrir / Fermer le volet actuel
            item.classList.toggle("active");

            if (item.classList.contains("active")) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
                item.querySelectorAll("audio, video").forEach(media => media.pause());
            }
        });
    });
});