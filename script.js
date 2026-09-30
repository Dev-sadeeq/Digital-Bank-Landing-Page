const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const menuBtn = document.getElementById("menu-btn");
const mockups = document.getElementById("mockups");
const mobileImg = document.getElementById("mobile-image");
const overlay = document.getElementById("menu-overlay");

function toggleMobileMenu() {
  const isClosed = mobileMenu.classList.contains("-translate-y-full");

  if (isClosed) {
    mobileMenu.classList.remove("-translate-y-full", "invisible", "opacity-0");
    mobileMenu.classList.add("translate-y-0", "visible", "opacity-100");
    mockups.style.visibility = "hidden";
    mobileImg.style.marginTop = "-200px";

    overlay.classList.remove("hidden");
    document.documentElement.classList.add("overflow-hidden");
    document.body.classList.add("overflow-hidden");
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    mobileMenu.classList.add("-translate-y-full", "invisible", "opacity-0");
    mobileMenu.classList.remove("translate-y-0", "visible", "opacity-100");
    mockups.style.visibility = "visible";
    mobileImg.style.marginTop = "50px";

    overlay.classList.add("hidden");
    document.documentElement.classList.remove("overflow-hidden");
    document.body.classList.remove("overflow-hidden");

    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
}

menuBtn.addEventListener("click", toggleMobileMenu);

overlay.addEventListener("click", toggleMobileMenu);
