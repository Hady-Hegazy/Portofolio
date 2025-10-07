// ------------------------------
// Smooth Scroll for internal links
// ------------------------------
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }

    // لو القائمة مفتوحة في الموبايل، اقفلها بعد الضغط
    var navList = document.getElementById("nav-list");
    if (navList.classList.contains("active")) {
      navList.classList.remove("active");
    }
  });
});

// ------------------------------
// Toggle Menu (for mobile)
// ------------------------------
var toggle = document.getElementById("menu-toggle");
var navList = document.getElementById("nav-list");

if (toggle) {
  toggle.addEventListener("click", function () {
    navList.classList.toggle("active");
  });
}
