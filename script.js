document.addEventListener("DOMContentLoaded", () => {
  const CONFIG = {
    whatsapp: "5548998020978",
    message: "Olá, Robertt! Vim pelo site e gostaria de solicitar um orçamento.",
    maps: "https://www.google.com/maps/dir/?api=1&destination=-28.6004901%2C-49.4294435&destination_place_id=ChIJgbitKBSdIZURnt6MxdhD5M4"
  };

  const drawer = document.querySelector("#drawer");
  const overlay = document.querySelector("#drawerOverlay");

  function openDrawer() {
    drawer.classList.add("open");
    overlay.classList.add("open");
    document.body.classList.add("menu-open");
  }
  function closeDrawer() {
    drawer.classList.remove("open");
    overlay.classList.remove("open");
    document.body.classList.remove("menu-open");
  }

  document.querySelector("#menuBtn")?.addEventListener("click", openDrawer);
  document.querySelector("#drawerClose")?.addEventListener("click", closeDrawer);
  overlay?.addEventListener("click", closeDrawer);
  drawer?.querySelectorAll("a").forEach(link => link.addEventListener("click", closeDrawer));

  const whatsappUrl =
    `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.message)}`;

  document.querySelectorAll(".wa-link").forEach(link => {
    link.href = whatsappUrl;
    link.target = "_blank";
    link.rel = "noopener";
  });

  document.querySelectorAll('[href*="google.com/maps/dir"], #mapBtn').forEach(link => {
    link.href = CONFIG.maps;
    link.target = "_blank";
    link.rel = "noopener";
  });
});