// *** CAROUSEL ***
const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");
const premierItem = document.querySelector(".carousel__item");

// Largeur de défilement d’un item (calculée au moment du clic,
// pour rester correcte si la taille de l'écran change)
function getScrollAmount() {
  return premierItem.clientWidth;
}

if (carousel) {
  // Scroll au clic sur le bouton précédent
  prevButton.addEventListener("click", () => {
    carousel.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
  });

  // Scroll au clic sur le bouton suivant
  nextButton.addEventListener("click", () => {
    carousel.scrollBy({ left: +getScrollAmount(), behavior: "smooth" });
  });
}
