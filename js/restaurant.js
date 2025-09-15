function initRestaurantsCarousel(sectionId) {
  const section = document.querySelector(`#${sectionId}`);
  if (!section) return;

  const grid = section.querySelector(".restaurants-grid");
  const prevBtn = section.querySelector(".carousel-btn.prev");
  const nextBtn = section.querySelector(".carousel-btn.next");

  let scrollAmount = 0;
  const cardWidth = 250;

  prevBtn.addEventListener("click", () => {
    grid.scrollBy({ left: -cardWidth, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    grid.scrollBy({ left: cardWidth, behavior: "smooth" });
  });
}
