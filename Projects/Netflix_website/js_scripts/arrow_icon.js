// MAIN PAGE
// SET UP THE "GO UP" ICONE
document.addEventListener("DOMContentLoaded", function () {
  var icon = document.querySelector(".icon");
  if (!icon) return;
  // Hide the icon
  // icon.style.display = "none";
  // Show the icon after scrolling down 200px
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      icon.style.display = "block";
    } else {
      icon.style.display = "none";
    }
  });
  // Scroll to the top when clicking the icon
  icon.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
