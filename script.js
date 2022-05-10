const KEYBOARD_EN = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BACKSPACE'],
  ['TAB', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
  ['CAPSLOCK', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '`', 'ENTER'],
  ['SHIFT', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', ' / ', 'SHIFT', '▲'],
  ['LCTRL', 'RU', 'LALT', 'SPACE', 'RALT', 'RCTRL', '◄', '▼', '►'],
];
const KEYBOARD_RU = [
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'BACKSPACE'],
  ['TAB', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'],
  ['CAPSLOCK', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'ENTER'],
  ['SHIFT', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'SHIFT', '▲'],
  ['LCTRL', 'EN', 'LALT', 'SPACE', 'RALT', 'RCTRL', '◄', '▼', '►'],
];

const KEYBOARD_RU_SHIFT = [
  ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'BACKSPACE'],
  ['TAB', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/'],
  ['CAPSLOCK', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'ENTER'],
  ['SHIFT', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'SHIFT', '▲'],
  ['LCTRL', 'EN', 'LALT', 'SPACE', 'RALT', 'RCTRL', '◄', '▼', '►'],
];

const KEYBOARD_EN_SHIFT = [
  ['~', '!', '@', '$', '%', '%', '^', '&', '*', '(', ')', '_', '+', 'BACKSPACE'],
  ['TAB', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
  ['CAPSLOCK', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'ENTER'],
  ['SHIFT', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'SHIFT', '▲'],
  ['LCTRL', 'RU', 'LALT', 'SPACE', 'RALT', 'RCTRL', '◄', '▼', '►'],
];

const FUNCTIONAL_BTNS = ['Backspace', 'Tab', 'CAPSLOCK', 'Enter', 'LShift', 'LCtrl', 'RCtrl', 'SPACE', 'RU', 'EN'];

const WRAPPER = document.createElement('div');
WRAPPER.classList.add('wrapper');

const TITLE = document.createElement('h1');
TITLE.classList.add('title');
TITLE.textContent = 'RSS Virtual Keyboard';

const EPILOGUE = document.createElement('h3');
EPILOGUE.classList.add('epilogue');
EPILOGUE.innerHTML = 'Привет! <br> Клавиатура сделана на Windows, язык переключает кнопка EN(RU). <br> Я пока не смог связать физическую клавиатуру и реальную <br> Пожалуйста, если Вас не затруднит, проверьте мою работу как можно позже) мой дискорд для связи - niceracer#1693 <br> Заранее спасибо и хорошего Вам дня!';

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
KEYBOARD.append(EPILOGUE);

let lang = 'en';
let isCaps = false;
let isShiftPressed = false;

function printText() {
  document.querySelectorAll('.keyboard__btn').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      switch (event.target.id) {
        case 'backspace':
          TEXTAREA.value = TEXTAREA.value.substring(0, TEXTAREA.value.length - 1);
          break;
        case 'enter':
          TEXTAREA.value += '\n';
          break;
        case 'tab':
          TEXTAREA.value += '\t';
          break;
        case 'space':
          TEXTAREA.value += ' ';
          break;
        case 'capslock':
          TEXTAREA.value += '';
          break;
        case 'ru':
          TEXTAREA.value += '';
          break;
        case 'en':
          TEXTAREA.value += '';
          break;
        case 'rshift':
          TEXTAREA.value += '';
          break;
        case 'rctrl':
          TEXTAREA.value += '';
          break;
        case 'ralt':
          TEXTAREA.value += '';
          break;
        case 'shift':
          TEXTAREA.value += '';
          break;
        case 'lalt':
          TEXTAREA.value += '';
          break;
        case 'lctrl':
          TEXTAREA.value += '';
          break;
        default:
          TEXTAREA.value += btn.textContent;
          break;
      }
    });
  });
}

function initKeyboard(array) {
  KEYBOARD_BODY.innerHTML = '';
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
      for (let j = 0; j < FUNCTIONAL_BTNS.length; j += 1) {
        if (row[i] === 'RU' || row[i] === 'EN') {
          KEYBOARD_BTN.classList.add('lang-switch');
        }
      }
    }
  });
  const switchLangBtn = document.querySelector('.lang-switch');
  switchLangBtn.addEventListener('click', (event) => {
    switch (event.target.id) {
      case 'ru':
        KEYBOARD_BODY.innerHTML = '';
        initKeyboard(KEYBOARD_RU);
        printText();
        lang = 'ru';
        break;
      case 'en':
        KEYBOARD_BODY.innerHTML = '';
        initKeyboard(KEYBOARD_EN);
        printText();
        lang = 'en';
        break;
      default:
        break;
    }
  });
}

if (lang === 'ru') {
  initKeyboard(KEYBOARD_RU);
  lang = 'ru';
} else {
  initKeyboard(KEYBOARD_EN);
  lang = 'en';
}

printText();

function toShift() {
  if (isShiftPressed === true && lang === 'en') {
    KEYBOARD_BODY.innerHTML = '';
    initKeyboard(KEYBOARD_EN_SHIFT);
    printText();
  } else if (isShiftPressed === true && lang === 'ru') {
    KEYBOARD_BODY.innerHTML = '';
    initKeyboard(KEYBOARD_RU_SHIFT);
    printText();
  } else if (isShiftPressed === false && lang === 'en') {
    initKeyboard(KEYBOARD_EN);
    printText();
  } else if (isShiftPressed === false && lang === 'ru') {
    initKeyboard(KEYBOARD_RU);
    printText();
  }
}

function toCapsLock() {
  if (isCaps === false) {
    const btns = document.querySelectorAll('.keyboard__btn');
    btns.forEach((btn) => {
      btn.innerHTML = btn.innerHTML.toUpperCase(); // eslint-disable-line no-param-reassign
    });
    isCaps = true;
  } else if (isCaps === true) {
    if (lang === 'en') {
      KEYBOARD_BODY.innerHTML = '';
      initKeyboard(KEYBOARD_EN);
      printText();
      isCaps = false;
    } else if (lang === 'ru') {
      KEYBOARD_BODY.innerHTML = '';
      initKeyboard(KEYBOARD_RU);
      printText();
      isCaps = false;
    }
  }
  const capsLockBtn = document.getElementById('capslock');
  capsLockBtn.classList.add('isPressed');
}
function toLowLock() {
  if (isCaps === true) {
    // const btns = document.querySelectorAll('.keyboard__btn');
    // btns.forEach((btn) => {
    //   btn.innerHTML = btn.innerHTML.toLowerCase(); // eslint-disable-line no-param-reassign
    // });
    if (lang === 'en') {
      KEYBOARD_BODY.innerHTML = '';
      initKeyboard(KEYBOARD_EN);
      printText();
      isCaps = false;
    } else if (lang === 'ru') {
      KEYBOARD_BODY.innerHTML = '';
      initKeyboard(KEYBOARD_RU);
      printText();
      isCaps = false;
    }
    isCaps = false;
  } else if (isCaps === false) {
    if (lang === 'en') {
      KEYBOARD_BODY.innerHTML = '';
      initKeyboard(KEYBOARD_EN);
      printText();
      isCaps = false;
    } else if (lang === 'ru') {
      KEYBOARD_BODY.innerHTML = '';
      initKeyboard(KEYBOARD_RU);
      printText();
      isCaps = false;
    }
  }
  const capsLockBtn = document.getElementById('capslock');
  capsLockBtn.classList.remove('isPressed');
}

let isClicked = false;
let isCapslockClicked = false;

window.addEventListener('click', (e) => {
  if (e.target.id === 'capslock' && isCapslockClicked === false) {
    isCapslockClicked = true;
    toCapsLock();
  } else if (e.target.id === 'capslock' && isCapslockClicked === true) {
    isCapslockClicked = false;
    toLowLock();
  }
  if (e.target.id === 'shift' && isClicked === false) {
    isClicked = true;
    if (lang === 'ru') {
      KEYBOARD_BODY.innerHTML = '';
      initKeyboard(KEYBOARD_RU_SHIFT);
      printText();
    } else if (lang === 'en') {
      KEYBOARD_BODY.innerHTML = '';
      initKeyboard(KEYBOARD_EN_SHIFT);
      printText();
    }
    const shiftBtn = document.getElementById('shift');
    shiftBtn.classList.add('isPressed');
  } else if (e.target.id === 'shift' && isClicked === true) {
    isClicked = false;
    if (lang === 'ru') {
      KEYBOARD_BODY.innerHTML = '';
      initKeyboard(KEYBOARD_RU);
      printText();
    } else if (lang === 'en') {
      KEYBOARD_BODY.innerHTML = '';
      initKeyboard(KEYBOARD_EN);
      printText();
    }
  }
});

// window.addEventListener('keydown', (e) => {
//   const shiftBtn = document.getElementById('shift');
//   const capsLockBtn = document.getElementById('capslock');
//   // pressedButton.classList.add('active');
//   if (capsLockBtn.id === 'capslock') {
//     capsLockBtn.classList.toggle('active');
//     toCapsLock();
//   }
//   if (shiftBtn.id === 'shift') {
//     isShiftPressed = true;
//     toShift();
//   }
// });

// window.addEventListener('keyup', (e) => {
//   const pressedButton = document.getElementById(`${e.key.toLowerCase()}`);
//   // pressedButton.classList.remove('active');
//   if (pressedButton.id === 'shift') {
//     KEYBOARD_BODY.innerHTML = '';
//     isShiftPressed = false;
//     toShift();
//   }
// });

// Local storage

function setLocalStorage() {
  localStorage.setItem('Language', lang);
  localStorage.setItem('array_ru', KEYBOARD_RU);
  localStorage.setItem('array_en', KEYBOARD_EN);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  lang = localStorage.getItem('Language');
  if (lang === 'en') {
    return initKeyboard(KEYBOARD_EN);
  }
  return initKeyboard(KEYBOARD_RU);
}

window.addEventListener('load', getLocalStorage);
window.addEventListener('load', printText);
