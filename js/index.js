const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const images1 = document.querySelectorAll(".slide1 .image");
const images2 = document.querySelectorAll(".slide2 .image");

let activeSlide = slide1; // Изначально активен первый слайд

leftButton.addEventListener("click", () => {
  if (activeSlide === slide2) {
    slide2.style.opacity = 0;
    slide1.style.opacity = 1;
    images1.forEach((image) => (image.style.opacity = 1));
    images2.forEach((image) => (image.style.opacity = 0));
    activeSlide = slide1;

    leftButton.classList.add("active");
    rightButton.classList.remove("active");
  }
});

rightButton.addEventListener("click", () => {
  if (activeSlide === slide1) {
    slide1.style.opacity = 0;
    slide2.style.opacity = 1;
    images1.forEach((image) => (image.style.opacity = 0));
    images2.forEach((image) => (image.style.opacity = 1));
    activeSlide = slide2;

    rightButton.classList.add("active");
    leftButton.classList.remove("active");
  }
});

// Здесь объявим menuItems для навигационного меню
const menuItemsNavigation = document.querySelectorAll(".nav_menu_fix ul");
const scrollDownButton = document.getElementById("scroll-down-button");

// Здесь объявим menuItems для бургер-меню
const burger = document.querySelector(".burger");
const menuItemsBurger = document.querySelectorAll(
  ".search, .buttons, .company, .product, .dealers, .info-center, .authenticity, .contacts, .product-dropdown"
);

const playButton = document.getElementById("play-button");
const youtubeLink = document.getElementById("youtube-link");

// Устанавливаем язык по умолчанию
let currentLang = "rus";

// Функция для смены языка
function toggleLanguage() {
  if (currentLang === "rus") {
    // Переключаем на английский
    currentLang = "eng";
    // Здесь добавьте логику для смены текста и контента на английский
    // Например, измените тексты на английский язык
    document.getElementById("header-title").textContent = "Our Products";
    // И так далее...
  } else {
    // Переключаем на русский
    currentLang = "rus";
    // Здесь добавьте логику для смены текста и контента на русский
    // Например, измените тексты на русский язык
    document.getElementById("header-title").textContent = "Наша продукция";
    // И так далее...
  }
}

const scrollLeftButton = document.getElementById("scroll-left-button");
const scrollRightButton = document.getElementById("scroll-right-button");
const productCards = document.querySelectorAll(".product-card");
let currentProduct = 0;

function hideAllProductCards() {
  productCards.forEach((card) => {
    card.style.display = "none";
  });
}

function handleScrollEvent() {
  if (window.innerWidth >= 391) {
    if (currentProduct > 0) {
      hideAllProductCards();
      currentProduct--;
      productCards[currentProduct].style.display = "block";
    }
  }
}

scrollLeftButton.addEventListener("click", handleScrollEvent);
scrollRightButton.addEventListener("click", handleScrollEvent);

window.addEventListener("load", handleScrollEvent);
window.addEventListener("resize", handleScrollEvent);

// Добавляем обработчик для открытия/закрытия бургер-меню
burger.addEventListener("click", () => {
  menuItemsBurger.forEach((item) => {
    item.style.display = item.style.display === "none" ? "block" : "none";
  });
  document.querySelector(".product-dropdown").style.display = "none";
});

// Добавляем обработчик события для кнопки "Play"
playButton.addEventListener("click", () => {
  // При нажатии на кнопку "Play" показываем ссылку на YouTube
  youtubeLink.style.display = "inline";
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider_tverdomer");
  const leftButton = document.getElementById("left-button");
  const rightButton = document.getElementById("right-button");
  const slides = document.querySelectorAll(".slide");

  leftButton.addEventListener("click", () => {
    slides[0].style.transform = "translateX(0%)";
    slides[1].style.transform = "translateX(50%)";

    leftButton.classList.add("active");
    rightButton.classList.remove("active");
  });

  rightButton.addEventListener("click", () => {
    slides[0].style.transform = "translateX(-20%)";
    slides[1].style.transform = "translateX(0%)";

    rightButton.classList.add("active");
    leftButton.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollToggle = document.getElementById("scrollToggle");
  const footer = document.getElementById("footer");
  const toggleText = document.getElementById("toggleText");

  // Проверка, была ли страница прокручена до футера
  window.addEventListener("scroll", function () {
    const windowHeight = window.innerHeight;
    const footerPosition = footer.getBoundingClientRect().top;

    // Если футер виден на экране, включаем переключатель и меняем текст
    if (footerPosition < windowHeight) {
      scrollToggle.checked = true;
      toggleText.textContent = "Вниз";
    } else {
      scrollToggle.checked = false;
      toggleText.textContent = "Вверх";
    }
  });

  // Обработчик события для переключения
  scrollToggle.addEventListener("change", function () {
    if (scrollToggle.checked) {
      // Плавная прокрутка к футеру
      footer.scrollIntoView({ behavior: "smooth" });
    } else {
      // Плавная прокрутка к заголовку
      const header = document.getElementById("header");
      header.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Функция для скрытия всех карточек товаров
function hideAllProductCards() {
  productCards.forEach((card) => {
    card.style.display = "none";
  });
}

// Функция для обработки событий прокрутки
function handleScrollEvent() {
  // Проверяем ширину экрана браузера
  if (window.innerWidth >= 765) {
    // Ваш код для обработки события прокрутки
    if (currentProduct > 0) {
      hideAllProductCards();
      currentProduct--;
      productCards[currentProduct].style.display = "block";
    }
  }
}

// Добавляем обработчик события для кнопки прокрутки влево
scrollLeftButton.addEventListener("click", handleScrollEvent);

// Добавляем обработчик события для кнопки прокрутки вправо
scrollRightButton.addEventListener("click", handleScrollEvent);

// Запускаем функцию handleScrollEvent при загрузке страницы
window.addEventListener("load", handleScrollEvent);

// Запускаем функцию handleScrollEvent при изменении размера окна браузера
window.addEventListener("resize", handleScrollEvent);

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const newsCards = document.querySelectorAll(".news-card");
let currentCard = 0;

leftArrow.addEventListener("click", () => {
  if (currentCard > 0) {
    newsCards[currentCard].style.display = "none";
    currentCard--;
    newsCards[currentCard].style.display = "block";
  }
});

rightArrow.addEventListener("click", () => {
  if (currentCard < newsCards.length - 1) {
    newsCards[currentCard].style.display = "none";
    currentCard++;
    newsCards[currentCard].style.display = "block";
  }
});
