// SET UP THE ICONE
document.addEventListener("DOMContentLoaded", () => {
  const icon = document.querySelector(".icon") as HTMLElement | null;

  if (!icon) return;

  // Hide the icon
  icon.style.display = "none";

  // Show the icon after scrolling down 200px
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      icon.style.display = "block";
    } else {
      icon.style.display = "none";
    }
  });

  // Scroll to the top when clicking the icon
  icon.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
