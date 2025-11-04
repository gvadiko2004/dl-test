// header
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".header__btn");
  const menu = document.querySelector(".menu__inner");
  const items = document.querySelectorAll(".menu__list-item");

  btn.addEventListener("click", () => {
    const isActive = menu.classList.toggle("active");
    btn.classList.toggle("active");

    if (isActive) {
      resetItems();

      setTimeout(() => {
        animateItems();
      }, 500);
    } else {
      resetItems();
    }
  });

  function animateItems() {
    items.forEach((item, index) => {
      setTimeout(() => {
        item.style.transition = "opacity 0.4s ease, transform 0.4s ease";
        item.style.opacity = "1";
        item.style.transform = "translateX(0)";
      }, index * 150);
    });
  }

  function resetItems() {
    items.forEach((item) => {
      item.style.transition = "none";
      item.style.opacity = "0";
      item.style.transform = "translateX(-40px)";
    });
  }

  // ЧТОБЫ ЗАКРЫВАТЬ МЕНЮ ПРИ КЛИКЕ ПО ITЕМУ — СТАВИМ ОБРАБОТЧИК ОТДЕЛЬНО!
  items.forEach((item) => {
    item.addEventListener("click", () => {
      menu.classList.remove("active");
      btn.classList.remove("active");
      resetItems();
    });
  });
});

// Slide 1

document.addEventListener("DOMContentLoaded", () => {
  const bubble = document.querySelector(".hero-img__content");
  const element = document.getElementById("typing-text");
  const text = element.innerHTML.trim();
  element.innerHTML = "";

  let index = 0;

  function type() {
    element.innerHTML = text.slice(0, index);
    index++;

    if (index <= text.length) {
      setTimeout(type, 50);
    }
  }

  // ⏳ через 3 секунды: показываем тучу и запускаем typing
  setTimeout(() => {
    bubble.classList.add("show");
    type();
  }, 2000);
});

// Slide 2

document.addEventListener("DOMContentLoaded", () => {
  const targetImg = document.querySelector(".present__end .end img");
  const targetTitle = document.querySelector(".present__info-title");
  const targetSubtitle = document.querySelector(".present__info-subtitle");

  const items = Array.from(
    document.querySelectorAll(".present-choose__items-item")
  );

  // Тексты для каждого варианта (по порядку картинок)
  const presentContent = [
    {
      title: "Best sock ever",
      text: "Regular sock never hides a gift inside. But ours can. Feel the real magic of holidays.",
    },
    {
      title: "Magic winter gift",
      text: "Not just a present — a piece of happiness wrapped in warmth. Choose it and smile :)",
    },
    {
      title: "Premium Christmas mystery",
      text: "Better than expectations. Warmer than winter. More pleasant than you imagine.",
    },
  ];

  function activate(item, index) {
    items.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");

    const img = item.querySelector("img");
    if (img && targetImg) {
      targetImg.src = img.getAttribute("src");
    }

    // Меняем текст
    if (presentContent[index]) {
      targetTitle.textContent = presentContent[index].title;
      targetSubtitle.textContent = presentContent[index].text;
    }
  }

  items.forEach((item, index) => {
    item.addEventListener("mouseenter", () => activate(item, index));
    item.addEventListener("click", () => activate(item, index));
  });

  if (items.length) activate(items[0], 0);
});

// FORM

document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("agree");
  const button = document.getElementById("sendBtn");

  checkbox.addEventListener("change", () => {
    button.disabled = !checkbox.checked;
  });
});
