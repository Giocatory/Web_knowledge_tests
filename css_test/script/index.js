// База вопросов по CSS (100 вопросов)
const questions = [
  {
    question: "Что означает аббревиатура CSS?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style System",
    ],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для изменения цвета текста?",
    options: ["text-color", "color", "font-color"],
    correct: 1,
  },
  {
    question: "Какой селектор используется для выбора элемента с id='header'?",
    options: [".header", "#header", "header"],
    correct: 1,
  },
  {
    question: "Какой свойство CSS используется для изменения фонового цвета?",
    options: ["background-color", "bgcolor", "color-background"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для задания внешних отступов?",
    options: ["padding", "margin", "spacing"],
    correct: 1,
  },
  {
    question:
      "Какой свойство CSS используется для задания внутренних отступов?",
    options: ["padding", "margin", "spacing"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для изменения размера текста?",
    options: ["text-size", "font-size", "text-style"],
    correct: 1,
  },
  {
    question:
      "Какой свойство CSS используется для выравнивания текста по центру?",
    options: ["text-align: center;", "align: center;", "text-center: true;"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для удаления подчеркивания у ссылок?",
    options: [
      "text-decoration: none;",
      "underline: none;",
      "link-decoration: none;",
    ],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для изменения курсора мыши?",
    options: ["mouse-cursor", "cursor", "pointer"],
    correct: 1,
  },
  {
    question: "Какой свойство CSS используется для задания толщины шрифта?",
    options: ["font-weight", "text-weight", "font-size"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для отображения элемента как блочного?",
    options: ["display: block;", "block: true;", "element-display: block;"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для скрытия элемента?",
    options: ["visibility: hidden;", "display: none;", "Оба варианта верны"],
    correct: 2,
  },
  {
    question:
      "Какой свойство CSS используется для задания прозрачности элемента?",
    options: ["transparency", "opacity", "alpha"],
    correct: 1,
  },
  {
    question: "Какой свойство CSS используется для создания тени у текста?",
    options: ["text-shadow", "font-shadow", "shadow"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для создания тени у блока?",
    options: ["block-shadow", "box-shadow", "element-shadow"],
    correct: 1,
  },
  {
    question: "Какой свойство CSS используется для задания скругления углов?",
    options: ["border-radius", "corner-radius", "round-corners"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для задания границы элемента?",
    options: ["border", "element-border", "frame"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для позиционирования элемента?",
    options: ["position", "placement", "layout"],
    correct: 0,
  },
  {
    question:
      "Какое значение свойства position делает элемент абсолютно позиционированным?",
    options: ["absolute", "fixed", "relative"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для задания порядка наложения элементов?",
    options: ["z-index", "layer", "stack-order"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для создания гибкой сетки?",
    options: ["flexbox", "grid", "Оба варианта верны"],
    correct: 2,
  },
  {
    question: "Какой свойство CSS используется для создания flex-контейнера?",
    options: ["display: flex;", "flex: true;", "layout: flex;"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для выравнивания элементов по главной оси в flexbox?",
    options: ["align-items", "justify-content", "flex-align"],
    correct: 1,
  },
  {
    question:
      "Какой свойство CSS используется для выравнивания элементов по поперечной оси в flexbox?",
    options: ["align-items", "justify-content", "flex-align"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для создания grid-контейнера?",
    options: ["display: grid;", "grid: true;", "layout: grid;"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для задания размера колонок в grid?",
    options: ["grid-template-columns", "grid-columns", "columns"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для задания размера строк в grid?",
    options: ["grid-template-rows", "grid-rows", "rows"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для анимации элементов?",
    options: ["animation", "transition", "Оба варианта верны"],
    correct: 2,
  },
  {
    question: "Какой свойство CSS используется для плавного изменения свойств?",
    options: ["transition", "animation", "transform"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для трансформации элементов?",
    options: ["transform", "transition", "animation"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для создания медиа-запросов?",
    options: ["@media", "media-query", "responsive"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для задания семейства шрифтов?",
    options: ["font-family", "text-family", "font-type"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для задания высоты строки?",
    options: ["line-height", "text-height", "font-line"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для задания межбуквенного интервала?",
    options: ["letter-spacing", "text-spacing", "font-spacing"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для задания интервала между словами?",
    options: ["word-spacing", "text-spacing", "font-word-spacing"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для преобразования текста в верхний регистр?",
    options: [
      "text-transform: uppercase;",
      "text-case: upper;",
      "font-transform: uppercase;",
    ],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для задания отступа первой строки абзаца?",
    options: ["text-indent", "paragraph-indent", "first-line-indent"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для управления переносом слов?",
    options: ["word-wrap", "text-wrap", "line-wrap"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для задания направления текста?",
    options: ["direction", "text-direction", "writing-mode"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для вертикального выравнивания inline или table-cell элементов?",
    options: ["vertical-align", "align-vertical", "v-align"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для управления видимостью элемента?",
    options: ["visibility", "display", "opacity"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для задания минимальной ширины элемента?",
    options: ["min-width", "width-min", "minimum-width"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для задания максимальной ширины элемента?",
    options: ["max-width", "width-max", "maximum-width"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для задания минимальной высоты элемента?",
    options: ["min-height", "height-min", "minimum-height"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для задания максимальной высоты элемента?",
    options: ["max-height", "height-max", "maximum-height"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для управления переполнением содержимого?",
    options: ["overflow", "content-overflow", "scroll"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для задания типа маркера списка?",
    options: ["list-style-type", "list-marker", "marker-type"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для задания изображения в качестве маркера списка?",
    options: ["list-style-image", "list-image", "marker-image"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для задания позиции маркера списка?",
    options: ["list-style-position", "list-position", "marker-position"],
    correct: 0,
  },
  // Дополнительные вопросы (51-100)
  {
    question: "Какой свойство CSS используется для создания градиентного фона?",
    options: [
      "background: linear-gradient();",
      "gradient-background",
      "bg-gradient",
    ],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для задания режима наложения фона?",
    options: ["background-blend-mode", "bg-blend", "blend-mode"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для задания размера фонового изображения?",
    options: ["background-size", "bg-size", "image-size"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для задания позиции фонового изображения?",
    options: ["background-position", "bg-position", "image-position"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для задания повторения фонового изображения?",
    options: ["background-repeat", "bg-repeat", "image-repeat"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для создания псевдоэлемента before?",
    options: ["::before", ":before", "before-element"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для создания псевдоэлемента after?",
    options: ["::after", ":after", "after-element"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для стилизации первого символа текста?",
    options: ["::first-letter", ":first-letter", "first-char"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для стилизации первой строки текста?",
    options: ["::first-line", ":first-line", "first-row"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для стилизации выделенного текста?",
    options: ["::selection", ":selection", "selected-text"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для стилизации placeholder текста?",
    options: ["::placeholder", ":placeholder", "placeholder-text"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для создания счетчиков?",
    options: ["counter-increment", "counter-reset", "Оба варианта верны"],
    correct: 2,
  },
  {
    question:
      "Какой свойство CSS используется для отображения значения счетчика?",
    options: ["content: counter();", "counter-display", "show-counter"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для создания колонок в тексте?",
    options: ["column-count", "text-columns", "multi-column"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для задания промежутка между колонками?",
    options: ["column-gap", "columns-gap", "col-gap"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для задания разделителя между колонками?",
    options: ["column-rule", "columns-rule", "col-rule"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для управления переносом содержимого между колонками?",
    options: ["break-inside", "column-break", "content-break"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для создания фильтров?",
    options: ["filter", "css-filter", "effect"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для применения эффекта размытия?",
    options: ["filter: blur();", "blur-effect", "css-blur"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для применения эффекта затемнения?",
    options: ["filter: brightness();", "darken-effect", "css-brightness"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для применения эффекта контрастности?",
    options: ["filter: contrast();", "contrast-effect", "css-contrast"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для применения эффекта тени?",
    options: ["filter: drop-shadow();", "shadow-effect", "css-shadow"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для применения grayscale эффекта?",
    options: ["filter: grayscale();", "grayscale-effect", "css-grayscale"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для применения hue-rotate эффекта?",
    options: ["filter: hue-rotate();", "hue-effect", "css-hue"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для применения инверсии цветов?",
    options: ["filter: invert();", "invert-effect", "css-invert"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для применения opacity эффекта?",
    options: ["filter: opacity();", "opacity-effect", "css-opacity"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для применения saturation эффекта?",
    options: ["filter: saturate();", "saturation-effect", "css-saturate"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для применения sepia эффекта?",
    options: ["filter: sepia();", "sepia-effect", "css-sepia"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для создания clip-path?",
    options: ["clip-path", "css-clip", "path-clip"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для создания маски?",
    options: ["mask", "css-mask", "element-mask"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для создания shape-outside?",
    options: ["shape-outside", "css-shape", "text-wrap-shape"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для создания переменных?",
    options: ["--variable-name", "var()", "Оба варианта верны"],
    correct: 2,
  },
  {
    question: "Какой свойство CSS используется для использования переменной?",
    options: ["var()", "use-var", "css-var"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для задания режима наложения элементов?",
    options: ["mix-blend-mode", "blend-mode", "element-blend"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для создания backdrop-filter?",
    options: ["backdrop-filter", "bg-filter", "background-filter"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для создания perspective?",
    options: ["perspective", "3d-perspective", "css-perspective"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для создания transform-style?",
    options: ["transform-style", "3d-style", "css-3d"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для создания backface-visibility?",
    options: ["backface-visibility", "3d-backface", "css-backface"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для создания grid-area?",
    options: ["grid-area", "area-grid", "css-grid-area"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для создания grid-template-areas?",
    options: ["grid-template-areas", "areas-grid", "css-grid-areas"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для создания gap в grid?",
    options: ["gap", "grid-gap", "Оба варианта верны"],
    correct: 2,
  },
  {
    question:
      "Какой свойство CSS используется для создания justify-items в grid?",
    options: ["justify-items", "grid-justify", "items-justify"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для создания align-items в grid?",
    options: ["align-items", "grid-align", "items-align"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для создания justify-self в grid?",
    options: ["justify-self", "grid-self-justify", "self-justify"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для создания align-self в grid?",
    options: ["align-self", "grid-self-align", "self-align"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для создания grid-auto-flow?",
    options: ["grid-auto-flow", "auto-grid-flow", "css-grid-flow"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для создания order в flexbox?",
    options: ["order", "flex-order", "item-order"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для создания flex-grow?",
    options: ["flex-grow", "grow-flex", "item-grow"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для создания flex-shrink?",
    options: ["flex-shrink", "shrink-flex", "item-shrink"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для создания flex-basis?",
    options: ["flex-basis", "basis-flex", "item-basis"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для создания flex-direction?",
    options: ["flex-direction", "direction-flex", "flex-flow-direction"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для создания flex-wrap?",
    options: ["flex-wrap", "wrap-flex", "flex-flow-wrap"],
    correct: 0,
  },
  {
    question: "Какой свойство CSS используется для создания flex-flow?",
    options: ["flex-flow", "flow-flex", "flex-direction-wrap"],
    correct: 0,
  },
  {
    question:
      "Какой свойство CSS используется для создания align-content в flexbox?",
    options: ["align-content", "content-align", "flex-align-content"],
    correct: 0,
  },
];

// Переменные состояния приложения
let currentQuestions = [];
let userAnswers = [];
let timer;
let timeLeft = 300; // 5 минут в секундах

// Элементы DOM
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startBtn = document.getElementById("start-btn");
const submitBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");
const timerDisplay = document.getElementById("timer");
const questionsContainer = document.getElementById("questions-container");
const scoreDisplay = document.getElementById("score");
const resultMessage = document.getElementById("result-message");
const progressBar = document.getElementById("progress-bar");

// Функция для выбора случайных 10 вопросов из 100
function getRandomQuestions() {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 10);
}

// Функция для отображения таймера
function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  // Добавляем предупреждение при малом времени
  if (timeLeft <= 30) {
    timerDisplay.classList.add("time-warning");
  } else {
    timerDisplay.classList.remove("time-warning");
  }

  // Обновление прогресс-бара
  const progress = ((300 - timeLeft) / 300) * 100;
  progressBar.style.width = `${progress}%`;

  if (timeLeft <= 0) {
    clearInterval(timer);
    finishQuiz();
  } else {
    timeLeft--;
  }
}

// Функция для отображения вопросов
function displayQuestions() {
  questionsContainer.innerHTML = "";
  userAnswers = new Array(currentQuestions.length).fill(null);

  currentQuestions.forEach((question, index) => {
    const questionElement = document.createElement("div");
    questionElement.className = "question";

    const questionNumber = document.createElement("div");
    questionNumber.className = "question-number";
    questionNumber.textContent = `Вопрос ${index + 1}: ${question.question}`;

    const optionsContainer = document.createElement("div");
    optionsContainer.className = "options";

    question.options.forEach((option, optionIndex) => {
      const optionElement = document.createElement("div");
      optionElement.className = "option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question-${index}`;
      input.value = optionIndex;
      input.id = `q${index}-option${optionIndex}`;

      input.addEventListener("change", () => {
        userAnswers[index] = optionIndex;
        checkAllAnswered();
      });

      const label = document.createElement("label");
      label.htmlFor = `q${index}-option${optionIndex}`;
      label.textContent = option;

      optionElement.appendChild(input);
      optionElement.appendChild(label);
      optionsContainer.appendChild(optionElement);
    });

    questionElement.appendChild(questionNumber);
    questionElement.appendChild(optionsContainer);
    questionsContainer.appendChild(questionElement);
  });
}

// Функция проверки, все ли вопросы отвечены
function checkAllAnswered() {
  const allAnswered = userAnswers.every((answer) => answer !== null);
  submitBtn.disabled = !allAnswered;
}

// Функция завершения теста
function finishQuiz() {
  clearInterval(timer);

  // Подсчет правильных ответов
  let correctCount = 0;
  currentQuestions.forEach((question, index) => {
    if (userAnswers[index] === question.correct) {
      correctCount++;
    }
  });

  // Отображение результатов
  scoreDisplay.textContent = `${correctCount}/10`;

  // Сообщение в зависимости от результата
  if (correctCount >= 9) {
    resultMessage.textContent = "Отлично! Вы отлично знаете CSS!";
  } else if (correctCount >= 7) {
    resultMessage.textContent = "Хорошо! Но есть над чем поработать.";
  } else if (correctCount >= 5) {
    resultMessage.textContent =
      "Удовлетворительно. Вам нужно больше практиковаться с CSS.";
  } else {
    resultMessage.textContent =
      "Неудовлетворительно. Рекомендуем изучить CSS более основательно.";
  }

  // Отображение деталей результатов
  const resultsDetails = document.getElementById("results-details");
  resultsDetails.innerHTML = "<h3>Детали результатов:</h3>";

  currentQuestions.forEach((question, index) => {
    const userAnswerIndex = userAnswers[index];
    const isCorrect = userAnswerIndex === question.correct;

    const questionResult = document.createElement("div");
    questionResult.className = "question-result";

    // Вопрос
    const questionText = document.createElement("div");
    // Экранируем HTML в вопросе и оборачиваем теги в <code>
    const escapedQuestion = question.question.replace(
      /<([^>]+)>/g,
      "<code>&lt;$1&gt;</code>"
    );
    questionText.innerHTML = `<strong>Вопрос ${
      index + 1
    }:</strong> ${escapedQuestion}`;
    questionResult.appendChild(questionText);

    // Ответ пользователя
    const userAnswerText = document.createElement("div");
    userAnswerText.className = `user-answer ${
      isCorrect ? "correct" : "incorrect"
    }`;

    if (userAnswerIndex !== null) {
      // Экранируем HTML в ответе пользователя
      const escapedUserAnswer = question.options[userAnswerIndex].replace(
        /<([^>]+)>/g,
        "<code>&lt;$1&gt;</code>"
      );
      userAnswerText.innerHTML = `Ваш ответ: ${escapedUserAnswer} ${
        isCorrect ? "✓" : "✗"
      }`;
    } else {
      userAnswerText.innerHTML = `Ваш ответ: Нет ответа ✗`;
    }
    questionResult.appendChild(userAnswerText);

    // Если ответ неверный, показываем правильный ответ
    if (!isCorrect) {
      const correctAnswerText = document.createElement("div");
      correctAnswerText.className = "correct-answer";
      // Экранируем HTML в правильном ответе
      const escapedCorrectAnswer = question.options[question.correct].replace(
        /<([^>]+)>/g,
        "<code>&lt;$1&gt;</code>"
      );
      correctAnswerText.innerHTML = `Правильный ответ: ${escapedCorrectAnswer}`;
      questionResult.appendChild(correctAnswerText);
    }

    resultsDetails.appendChild(questionResult);
  });

  quizScreen.style.display = "none";
  resultScreen.style.display = "block";
}

// Обработчики событий
startBtn.addEventListener("click", () => {
  currentQuestions = getRandomQuestions();
  userAnswers = new Array(currentQuestions.length).fill(null);
  timeLeft = 300;

  // Очищаем детали предыдущих результатов
  const resultsDetails = document.getElementById("results-details");
  if (resultsDetails) {
    resultsDetails.innerHTML = "";
  }

  startScreen.style.display = "none";
  quizScreen.style.display = "block";

  displayQuestions();
  updateTimer();
  timer = setInterval(updateTimer, 1000);
});

submitBtn.addEventListener("click", finishQuiz);

restartBtn.addEventListener("click", () => {
  resultScreen.style.display = "none";
  startScreen.style.display = "block";
});
