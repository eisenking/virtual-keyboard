const KEYBOARD_EN = [
  ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
  ['Capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '`', ' \\ ', 'Enter'],
  ['LShift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', ' / ', 'RShift', '▲'],
  ['LCtrl', 'RU', 'LALT', 'SPACE', 'RALT', 'RCTRL', '◄', '▼', '►'],
];
const KEYBOARD_RU = [
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
  ['Capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\\', 'Enter'],
  ['LShift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'RShift', '▲'],
  ['LCtrl', 'EN', 'LALT', 'SPACE', 'RALT', 'RCTRL', '◄', '▼', '►'],
];

const FUNCTIONAL_BTNS = ['Backspace', 'Tab', 'Capslock', 'Enter', 'Lshift', 'RShift', 'LCtrl', 'RCtrl', 'SPACE', 'RU', 'EN'];

const WRAPPER = document.createElement('div');
WRAPPER.classList.add('wrapper');

const TITLE = document.createElement('h1');
TITLE.classList.add('title');
TITLE.textContent = 'RSS Virtual Keyboard';

const TEXTAREA = document.createElement('textarea');
TEXTAREA.className = 'textarea';

const KEYBOARD = document.createElement('div');
KEYBOARD.classList.add('keyboard');

const KEYBOARD_BODY = document.createElement('div');
KEYBOARD_BODY.classList.add('keyboard__body');

document.body.append(WRAPPER);
WRAPPER.append(KEYBOARD);
KEYBOARD.append(TITLE);
KEYBOARD.append(TEXTAREA);
KEYBOARD.append(KEYBOARD_BODY);

const lang = 'en';

function printText() {
  document.querySelectorAll('.keyboard__btn').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      switch (event.target.id) {
        case 'backspace':
          TEXTAREA.value = TEXTAREA.value.substring(0, TEXTAREA.value.length - 1);
          break;
        default:
          TEXTAREA.value += btn.textContent;
          break;
      }

      // if (event.target.id === 'backspace') {
      //   console.log('yay');
      //   TEXTAREA.value = TEXTAREA.value.substring(0, TEXTAREA.value.length - 1);
      // } else {
      //   console.log(event.target);
      //   const input = btn.textContent;
      //   let text = TEXTAREA.textContent;
      //   text += input;
      //   TEXTAREA.textContent = text;
      // }
    });
  });
}

function initKeyboard(array) {
  array.forEach((row) => {
    const KEYBOARD_ROW = document.createElement('div');
    KEYBOARD_ROW.classList.add('keyboard__row');
    KEYBOARD_BODY.append(KEYBOARD_ROW);
    for (let i = 0; i < row.length; i += 1) {
      const KEYBOARD_BTN = document.createElement('div');
      KEYBOARD_BTN.classList.add('keyboard__btn');
      KEYBOARD_BTN.setAttribute('id', `${row[i].toLowerCase()}`);
      KEYBOARD_ROW.append(KEYBOARD_BTN);
      KEYBOARD_BTN.innerHTML += row[i];
      // for (let j = 0; j < FUNCTIONAL_BTNS.length; j += 1) {
      //   if (row[i] === FUNCTIONAL_BTNS[j]) {
      //     KEYBOARD_BTN.setAttribute('data-id', `${FUNCTIONAL_BTNS[j]}`);
      //   }
      // }
      for (let j = 0; j < FUNCTIONAL_BTNS.length; j += 1) {
        if (row[i] === 'RU' || row[i] === 'EN') {
          KEYBOARD_BTN.classList.add('lang-switch');
          const switchLangBtn = document.querySelector('.lang-switch');
          switchLangBtn.addEventListener('click', (event) => {
            switch (event.target.id) {
              case 'ru':
                KEYBOARD_BODY.innerHTML = '';
                initKeyboard(KEYBOARD_RU);
                printText();
                break;
              case 'en':
                KEYBOARD_BODY.innerHTML = '';
                initKeyboard(KEYBOARD_EN);
                printText();
                break;
              default:
                break;
            }
            // if (event.target.id === 'ru') {
            //   KEYBOARD_BODY.innerHTML = '';
            //   initKeyboard(KEYBOARD_RU);
            // } else if (event.target.id === 'en') {
            //   KEYBOARD_BODY.innerHTML = '';
            //   initKeyboard(KEYBOARD_EN);
            // }
          });
        }
      }
    }
  });
}

if (lang === 'ru') {
  initKeyboard(KEYBOARD_RU);
} else {
  initKeyboard(KEYBOARD_EN);
}

printText();

// const switchLangBtn = document.querySelector('.lang-switch');
// switchLangBtn.addEventListener('click', (event) => {
//   if (event.target.id === 'ru') {
//     KEYBOARD_BODY.innerHTML = '';
//     initKeyboard(KEYBOARD_RU);
//   } else if (event.target.id === 'en') {
//     KEYBOARD_BODY.innerHTML = '';
//     initKeyboard(KEYBOARD_EN);
//   }
// });

window.addEventListener('keydown', (e) => {
  // e.preventDefault();
  console.log(e.key);
  // console.log(e.code);
  const pressedButton = document.getElementById(`${e.key.toLowerCase()}`);
  pressedButton.classList.add('active');
  console.log(pressedButton);
});

window.addEventListener('keyup', (e) => {
  // e.preventDefault();
  console.log(e.key);
  // console.log(e.code);
  const pressedButton = document.getElementById(`${e.key.toLowerCase()}`);
  pressedButton.classList.remove('active');
  console.log(pressedButton);
});
