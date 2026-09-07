document.addEventListener("DOMContentLoaded", () => {
  const CONFIG = {
    whatsapp: "5548998020978",
    whatsappMessage: "Olá, Robertt! Vim pelo site e gostaria de solicitar um orçamento.",
    maps: ""
  };

  const drawer = document.querySelector("#drawer");
  const overlay = document.querySelector("#drawerOverlay");
  const menuBtn = document.querySelector("#menuBtn");
  const drawerClose = document.querySelector("#drawerClose");

  function openMenu() {
    drawer?.classList.add("open");
    overlay?.classList.add("open");
    drawer?.setAttribute("aria-hidden", "false");
    document.body.classList.add("menu-open");
  }

  function closeMenu() {
    drawer?.classList.remove("open");
    overlay?.classList.remove("open");
    drawer?.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-open");
  }

  menuBtn?.addEventListener("click", openMenu);
  drawerClose?.addEventListener("click", closeMenu);
  overlay?.addEventListener("click", closeMenu);
  drawer?.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));

  const whatsappUrl =
    `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;

  document.querySelectorAll(".wa-link").forEach(link => {
    link.href = whatsappUrl;
    link.target = "_blank";
    link.rel = "noopener";
  });

  document.querySelector(".map-link")?.addEventListener("click", event => {
    if (!CONFIG.maps) {
      event.preventDefault();
      alert("A localização do Robertt será adicionada nos próximos ajustes.");
      return;
    }
    event.currentTarget.href = CONFIG.maps;
    event.currentTarget.target = "_blank";
    event.currentTarget.rel = "noopener";
  });
});
