let checkbox = document.querySelector('.theme-checkbox');
    if(localStorage.getItem('theme') == 'true') { // проверка наличия установленного ранее чекбокса темной темы
      theme.setAttribute('href', `DZ.css`);
      checkbox.checked = true;
    }
    checkbox.onchange = function() { // выполнение функции при постановке галочки
      if(this.checked) {
        localStorage.setItem('theme', true); // добавление или изменение переменной в локальном хранилище
        theme.setAttribute('href', 'DZ.css'); // изменение ссылки в атрибуте на css с темной темой
        color1.value = '#ff7700';
      } else {
        localStorage.setItem('theme', false);
        theme.setAttribute('href', 'white.css');
        color1.value = '#00d9ff';
      }
    }