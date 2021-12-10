function genetateRadiusBox(top_left, top_right, bottom_left, bottom_right) {
    document.querySelector('.item .preview-border-rad').style.borderTopLeftRadius = top_left + 'px';
    document.querySelector('.item .preview-border-rad').style.borderTopRightRadius = top_right + 'px';
    document.querySelector('.item .preview-border-rad').style.borderBottomLeftRadius = bottom_left + 'px';
    document.querySelector('.item .preview-border-rad').style.borderBottomRightRadius = bottom_right + 'px';

    document.querySelector('#border_radius_result').value = 'border-top-left-radius: ' + top_left + 'px;' +'\nborder-top-right-radius: ' + top_right + 'px;' +'\nborder-bottom-left-radius: ' + bottom_left + 'px;' +'\nborder-bottom-right-radius: ' + bottom_right + 'px;';
}
genetateRadiusBox(75, 0, 0, 0);

for(let item of document.querySelectorAll('.item input')) {
    item.addEventListener('input', function(e) {
        let top_left = document.querySelector('.item #top_left').value; 
        let top_right = document.querySelector('.item #top_right').value; 
        let bottom_left = document.querySelector('.item #bottom_left').value; 
        let bottom_right = document.querySelector('.item #bottom_right').value; 
        
        genetateRadiusBox(top_left, top_right, bottom_left, bottom_right);
    })
}

function generateTextShadow() {
    let offsetShadowX = document.getElementById('offsetShadowX').value;
    let offsetShadowY = document.getElementById('offsetShadowY').value;
    let colorShadow = document.getElementById('colorShadow').value;
    let opacityShadow = document.getElementById('opacityShadow').value;

    let red = parseInt(colorShadow.slice(1,3), 16); 
    let green = parseInt(colorShadow.slice(3,5), 16);  
    let blue = parseInt(colorShadow.slice(5,7), 16);
    
    let str = document.getElementById('text-shadow-result').value = 'text-shadow:' + ' ' + `${offsetShadowX}px ${offsetShadowY}px rgba(${red}, ${green}, ${blue}, ${opacityShadow});`; 

    document.getElementById('test').setAttribute('style', str);
   
}


for(let item of document.querySelectorAll('#text-shad input')) {
    item.addEventListener('input', generateTextShadow);
}
generateTextShadow();


function generateCss() {
    let inset = document.getElementById('inset').checked; // проверяем чекбокс
    inset = inset ? ' inset' : ''; // меняем булевое значение строкой

    let offsetX = document.getElementById('offsetX').value; // получаем значения ползунков
    let offsetY = document.getElementById('offsetY').value;
    let blur = document.getElementById('blur').value;
    let stretch = document.getElementById('stretch').value;

    let color = document.getElementById('color').value; // получаем 16-ричный код цвета
    let red = parseInt(color.slice(1,3), 16); // конвертируем красный цвет в 10-ричную 
    let green = parseInt(color.slice(3,5), 16); // конвертируем зеленый цвет в 10-ричную 
    let blue = parseInt(color.slice(5,7), 16); // конвертируем синий цвет в 10-ричную 
    let opacity = document.getElementById('opacity').value;

    let result = document.getElementById('box-shadow-result');
    let textarea = document.getElementById('box-shadow-css-result');

    let str = `${inset} ${offsetX}px ${offsetY}px ${blur}px ${stretch}px rgba(${red}, ${green}, ${blue}, ${opacity})`;

    textarea.value = 'box-shadow:' + str;
    result.style.boxShadow = str;
  }
  for(let item of document.querySelectorAll('input')) {
    item.addEventListener('input', generateCss);
  }

generateCss();

function generateTriangle(position, color, width) {
    let basic = `
    width: 0;
    height: 0;
    border-style: solid;`
    let result;

    switch(position) {
        case 'top-left':
            result = `${basic}
    border-width: ${width}px ${width}px 0 0;
    border-color: ${color} transparent transparent transparent;`
        break;
        case 'top':
            result = `${basic}
    border-width: 0 ${width/2}px ${width}px ${width/2}px;
    border-color: transparent transparent ${color} transparent;`
        break;
        case 'top-right':
            result = `${basic}
    border-width: 0 ${width}px ${width}px 0;
    border-color: transparent ${color} transparent transparent;`
        break;
        case 'left':
            result = `${basic}
    border-width: ${width/2}px ${width}px ${width/2}px 0;
    border-color: transparent ${color} transparent transparent;`
        break;
        case 'right':
            result = `${basic}
    border-width: ${width/2}px 0 ${width/2}px ${width}px;
    border-color: transparent transparent transparent ${color};`
        break;
        case 'bottom-left':
            result = `${basic}
    border-width: ${width}px 0 0 ${width}px;
    border-color: transparent transparent transparent ${color};`
        break;
        case 'bottom':
            result = `${basic}
    border-width: ${width}px ${width/2}px 0 ${width/2}px;
    border-color: ${color} transparent transparent transparent;`
        break;
        case 'bottom-right':
            result = `${basic}
    border-width: 0 0 ${width}px ${width}px;
    border-color: transparent transparent ${color} transparent;`
        break;
    }
    let textarea = `.trian-css-result {
        ${result}
    }`;
    document.querySelector('.trian-css-result').value = textarea;
    document.querySelector('.preview-trian').style = result;
}

for(let item of document.querySelectorAll('.trian-generator input')) {
        item.addEventListener('input', function() {
          let position = document.querySelector('input[name="triangle"]:checked').value;
          let color = document.querySelector('.trian-generator input[type="color"]').value;
          let width = document.querySelector('.trian-generator input[type="range"]').value;
          generateTriangle(position, color, width);
        })
      }


let lastColor = theme.getAttribute('href');
if(lastColor == 'DZ.css') {
    generateTriangle('top-left', '#ff7700', '60');
} else {
    generateTriangle('top-left', '#00d9ff', '60');
}