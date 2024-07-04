// Массив событий для демонстрации
const eventsStore = [
  {
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    description: "Being an INFJ",
    date: new Date(2024, 2, 23, 15),
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w",
    type: "offline",
    attendees: 99,
    category: "Hobbies and Passions",
    distance: 50,
  },
  {
    title:
      "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
    description: "New York AI Users",
    date: new Date(2024, 2, 23, 11, 30),
    image:
      "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    type: "offline",
    attendees: 43,
    category: "Technology",
    distance: 25,
  },
  {
    title: "Book 40+ Appointments Per Month Using AI and Automation",
    description: "New Jersey Business Network",
    date: new Date(2024, 2, 16, 14),
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    category: "Technology",
    distance: 10,
  },
  {
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2024, 2, 13, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 77,
    category: "Business",
    distance: 100,
  },
  {
    title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 140,
    category: "Social Activities",
    distance: 75,
  },
  {
    title: "All Nations - Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "offline",
    category: "Health and Wellbeing",
    distance: 15,
  },
];

/// Функция фильтрации событий
function filterEvents() {
  // Получение значений выбранных фильтров из выпадающих меню
  const type =
    document
      .querySelector("#type-dropdown .selected")
      ?.getAttribute("data-value") || "";
  const distance =
    document
      .querySelector("#distance-dropdown .selected")
      ?.getAttribute("data-value") || "";
  const category =
    document
      .querySelector("#category-dropdown .selected")
      ?.getAttribute("data-value") || "";

  // Фильтрация массива событий на основе выбранных фильтров
  const filteredEvents = eventsStore.filter((event) => {
    return (
      (type === "" || event.type === type) && // Фильтрация по типу события
      (distance === "" || event.distance === parseInt(distance)) && // Фильтрация по расстоянию
      (category === "" || event.category === category) // Фильтрация по категории
    );
  });

  // Отображение отфильтрованных событий
  displayEvents(filteredEvents);
}

// Функция отображения событий
function displayEvents(events) {
  // Получение элемента списка событий
  const eventsList = document.getElementById("events-list");
  // Очистка текущего содержимого списка событий
  eventsList.innerHTML = "";

  // Проход по каждому событию и создание элемента для отображения
  events.forEach((event) => {
    const eventElement = document.createElement("div");
    eventElement.classList.add("event");
    if (event.type === "online") {
      // Добавление класса "online-event" для онлайн-событий
      eventElement.classList.add("online-event");
    }

    // Проверка наличия количества участников и создание соответствующего HTML
    const attendeesHTML = event.attendees
      ? `<p class="event-attendees">${event.attendees} attendees</p>`
      : "";
    eventElement.innerHTML = `
      <img src="${event.image}" alt="${event.title}" class="event-image"> 
      <div class="event-details">
        <p class="event-date">${event.date.toDateString()} - ${event.date.toLocaleTimeString()}</p> 
        <h4 class="event-title">${event.title}</h4> 
        <p class="event-category">${event.category}</p> 
        ${attendeesHTML}  
      </div> `;
    // Добавление элемента события в список событий
    eventsList.appendChild(eventElement);
  });
}

// Функция переключения отображения выпадающего меню
function toggleDropdown(dropdown) {
  const menu = dropdown.querySelector(".dropdown-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block"; // Переключение видимости меню
}

// Функция выбора опции из выпадающего меню
function selectOption(event, dropdown) {
  const value = event.target.getAttribute("data-value"); // Получение значения выбранной опции
  const toggle = dropdown.querySelector(".dropdown-toggle");
  toggle.textContent = event.target.textContent; // Установка текста выбранной опции в заголовок меню

  // Удаление класса selected со всех элементов списка и добавление его к выбранному
  dropdown
    .querySelectorAll(".dropdown-menu li")
    .forEach((li) => li.classList.remove("selected"));
  event.target.classList.add("selected");

  // Скрытие выпадающего меню и фильтрация событий
  dropdown.querySelector(".dropdown-menu").style.display = "none";
  filterEvents();
}

// Добавление обработчиков событий для каждого выпадающего меню
document.querySelectorAll(".dropdown").forEach((dropdown) => {
  const toggle = dropdown.querySelector(".dropdown-toggle");
  toggle.addEventListener("click", () => toggleDropdown(dropdown)); // Обработчик клика для открытия/закрытия меню

  const options = dropdown.querySelectorAll(".dropdown-menu li");
  options.forEach(
    (option) =>
      option.addEventListener("click", (event) => selectOption(event, dropdown)) // Обработчик выбора опции из меню
  );
});

// Первоначальная фильтрация и отображение всех событий
filterEvents();
