document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card, index) => {
    card.style.opacity = 0;
    setTimeout(() => {
      card.style.transition = "opacity 0.6s ease";
      card.style.opacity = 1;
    }, index * 200);
  });
});
