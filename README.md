# Своя JavaScript UI библиотека


### Работа с классами (Файл classes.js)

Методы:

    1. addClass - Добавляет указанный класс(ы) к каждому элементу в наборе соответствующих элементов.
    2. removeClass - Удаляет один класс(ы) из каждого элемента в наборе соответствующих элементов.
    3. toggleClass - Добавляет или удаляет класс из каждого элемента в наборе соответствующих элементов в зависимости от наличия класса или отсутствия класса.


### Работа с видимостью элементов (Файл display.js)

Методы:

    1. show - Делает элемент видимым
    2. hide - Скрывает элемент
    3. toggle - Делает элемент видимым, если он скрыт и срывает, если он виден



### Работа с событиями (Файл handlers.js)

Методы:

    1. on - Добавляет обработчик событий.
    2. off - Удаляет обработчик событий.
    3. ckick - Привязывает обработчик события к событию JavaScript «click» или вызвать это событие для элемента.


### Работа с элементами на странице (Файл actions.js)

Методы:

    1. html - заменяет содержимое элемента (innerHTML)
    2. eq - получение определенного эл-та по номеру (нумерация с 0)
    3. index - получение номера эл-та по порядку 
    4. find - получение определенного эл-та по уже выбранным
    5. closest - Для каждого элемента в наборе, получает первый эл-т, который совпадает с селектором при движении по DOM дереву
    6. siblings - получает соседние эл-ты, не включая сам эл-т


### Работа с анимациями (Файл effects.js)

Методы:

    1. fadeIn - показывает эл-ты через анимацию
    2. fadeOut - скрывает эл-ты через анимацию  
    3. fadeToggle - показывает эл-ты через анимацию, если они скрыты и скрывает, если они показаны 


### Работа со своими компонентами (lib/components)

    1. dropdown.js - выпадающее меню, появляется при нажатии на кнопку
   


