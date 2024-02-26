let tabItems = document.querySelectorAll(".Tab__item");
let tabContents = document.querySelectorAll(".Tab__content");
for (let i = 0; i < tabItems.length; i++) {
  tabItems[i].onclick = function () {
    removeClasses(); // Перед тем как добавить классы на текущую вкладку удаляем их у всех вкладок
    tabItems[i].classList.add("item-active"); // Добавление класса(чтобы выделить вкладку)
    tabContents[i].classList.add("content-active"); // Показываем содержимое вкладки
  };
}
function removeClasses() {
  for (let i = 0; i < tabItems.length; i++) {
    tabItems[i].classList.remove("item-active"); // Удаление класса у всех выделенных вкладок
    tabContents[i].classList.remove("content-active"); // Скрываем содержимое всез вкладок
  }
}
// ! Выпадающий список
let dropContent = document.querySelector(".drop__content");
let dropTop = document.querySelector(".drop__top");
let dropIcon = document.querySelector(".drop__icon");
let dropItems = document.querySelectorAll(".drop__item");
let dropTitle = document.querySelector(".drop__title");
dropTop.onclick = openContent;
function openContent() {
  dropContent.classList.toggle("drop__content-active"); // Добавляет класс если его ещё нет у элемента и убирает если есть
  dropIcon.classList.toggle("drop__icon-active");
}
for (let i = 0; i < dropItems.length; i++) {
  dropItems[i].onclick = function () {
    dropTitle.innerHTML = dropItems[i].innerHTML;
    openContent();
  };
}
