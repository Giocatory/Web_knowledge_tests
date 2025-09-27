// База вопросов (100 вопросов)
const questions = [
  {
    question: "Что означает аббревиатура HTML?",
    options: [
      "HyperText Markup Language",
      "HighTech Modern Language",
      "HyperTransfer Markup Language",
    ],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания ссылки?",
    options: ["<link>", "<a>", "<href>"],
    correct: 1,
  },
  {
    question: "Какой атрибут используется для задания адреса ссылки?",
    options: ["src", "link", "href"],
    correct: 2,
  },
  {
    question: "Какой тег используется для вставки изображения?",
    options: ["<pic>", "<img>", "<image>"],
    correct: 1,
  },
  {
    question: "Какой атрибут тега <img> задает источник изображения?",
    options: ["src", "href", "source"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания упорядоченного списка?",
    options: ["<ul>", "<ol>", "<li>"],
    correct: 1,
  },
  {
    question: "Какой тег используется для создания таблицы?",
    options: ["<table>", "<tab>", "<grid>"],
    correct: 0,
  },
  {
    question: "Какой тег определяет строку в таблице?",
    options: ["<row>", "<tr>", "<td>"],
    correct: 1,
  },
  {
    question: "Какой тег используется для создания заголовка первого уровня?",
    options: ["<h1>", "<head>", "<header>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания абзаца?",
    options: ["<p>", "<par>", "<text>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания формы?",
    options: ["<form>", "<input>", "<fieldset>"],
    correct: 0,
  },
  {
    question: "Какой атрибут тега <input> определяет тип поля ввода?",
    options: ["type", "kind", "input-type"],
    correct: 0,
  },
  {
    question: "Какой тип input используется для создания кнопки?",
    options: ["button", "submit", "click"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания выпадающего списка?",
    options: ["<list>", "<select>", "<dropdown>"],
    correct: 1,
  },
  {
    question:
      "Какой тег используется для создания многострочного текстового поля?",
    options: ["<textarea>", "<input type='multiline'>", "<textfield>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания нижнего колонтитула?",
    options: ["<footer>", "<bottom>", "<end>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания навигационного меню?",
    options: ["<menu>", "<nav>", "<navigation>"],
    correct: 1,
  },
  {
    question: "Какой тег используется для создания секции документа?",
    options: ["<div>", "<section>", "<part>"],
    correct: 1,
  },
  {
    question: "Какой тег используется для вставки JavaScript кода?",
    options: ["<js>", "<script>", "<javascript>"],
    correct: 1,
  },
  {
    question: "Какой тег используется для подключения CSS стилей?",
    options: ["<style>", "<css>", "<link>"],
    correct: 2,
  },
  {
    question:
      "Какой атрибут используется для задания уникального идентификатора элемента?",
    options: ["class", "id", "name"],
    correct: 1,
  },
  {
    question: "Какой атрибут используется для задания класса элемента?",
    options: ["class", "id", "type"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания цитаты?",
    options: ["<quote>", "<q>", "<cite>"],
    correct: 1,
  },
  {
    question: "Какой тег используется для создания жирного текста?",
    options: ["<bold>", "<strong>", "<b>"],
    correct: 1,
  },
  {
    question: "Какой тег используется для создания курсива?",
    options: ["<i>", "<italic>", "<em>"],
    correct: 2,
  },
  {
    question: "Какой тег используется для создания подчеркнутого текста?",
    options: ["<u>", "<underline>", "<line>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания переноса строки?",
    options: ["<br>", "<newline>", "<lb>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания горизонтальной линии?",
    options: ["<line>", "<hr>", "<hline>"],
    correct: 1,
  },
  {
    question: "Какой тег используется для создания заголовка документа?",
    options: ["<head>", "<header>", "<title>"],
    correct: 2,
  },
  {
    question: "Какой тег используется для создания мета-информации?",
    options: ["<info>", "<meta>", "<metadata>"],
    correct: 1,
  },
  {
    question: "Какой атрибут тега <meta> используется для указания кодировки?",
    options: ["encoding", "charset", "type"],
    correct: 1,
  },
  {
    question: "Какой тег используется для создания комментария в HTML?",
    options: ["<!-- -->", "<comment>", "<note>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания блока кода?",
    options: ["<code>", "<pre>", "<snippet>"],
    correct: 0,
  },
  {
    question:
      "Какой тег используется для создания заголовка группы полей формы?",
    options: ["<label>", "<legend>", "<fieldtitle>"],
    correct: 1,
  },
  {
    question: "Какой тег используется для создания группы полей формы?",
    options: ["<fieldgroup>", "<fieldset>", "<formgroup>"],
    correct: 1,
  },
  {
    question: "Какой тип input используется для скрытого поля?",
    options: ["hidden", "secret", "none"],
    correct: 0,
  },
  {
    question:
      "Какой атрибут тега <a> используется для открытия ссылки в новой вкладке?",
    options: ["target='_blank'", "newtab='true'", "open='new'"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания описания термина?",
    options: ["<dd>", "<dt>", "<dl>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания ячейки таблицы?",
    options: ["<cell>", "<td>", "<th>"],
    correct: 1,
  },
  {
    question:
      "Какой тег используется для создания заголовочной ячейки таблицы?",
    options: ["<td>", "<th>", "<header>"],
    correct: 1,
  },
  {
    question:
      "Какой атрибут тега <table> используется для задания отступов между ячейками?",
    options: ["padding", "spacing", "cellspacing"],
    correct: 2,
  },
  {
    question:
      "Какой атрибут тега <table> используется для задания отступов внутри ячеек?",
    options: ["padding", "cellpadding", "inner-spacing"],
    correct: 1,
  },
  {
    question:
      "Какой тег используется для создания области для ввода данных в форме?",
    options: ["<input>", "<textfield>", "<data>"],
    correct: 0,
  },
  {
    question: "Какой тип input используется для выбора цвета?",
    options: ["color", "palette", "picker"],
    correct: 0,
  },
  {
    question: "Какой тип input используется для выбора даты?",
    options: ["calendar", "date", "day"],
    correct: 1,
  },
  {
    question: "Какой тег используется для создания прогресс-бара?",
    options: ["<progress>", "<bar>", "<meter>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания шкалы измерения?",
    options: ["<scale>", "<meter>", "<range>"],
    correct: 1,
  },
  {
    question:
      "Какой тег используется для создания детализированной информации?",
    options: ["<info>", "<details>", "<more>"],
    correct: 1,
  },
  {
    question: "Какой тег используется для создания всплывающей подсказки?",
    options: ["<tooltip>", "<abbr>", "<tip>"],
    correct: 1,
  },
  // Дополнительные вопросы (51-100)
  {
    question:
      "Какой тег используется для создания контейнера для встроенных элементов?",
    options: ["<div>", "<span>", "<container>"],
    correct: 1,
  },
  {
    question: "Какой тег используется для создания списка определений?",
    options: ["<dl>", "<def>", "<dlist>"],
    correct: 0,
  },
  {
    question:
      "Какой тег используется для создания термина в списке определений?",
    options: ["<dt>", "<term>", "<def>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания подписи к рисунку?",
    options: ["<caption>", "<figcaption>", "<picturetext>"],
    correct: 1,
  },
  {
    question: "Какой тег используется для создания независимого контента?",
    options: ["<article>", "<independent>", "<content>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания боковой панели?",
    options: ["<sidebar>", "<aside>", "<side>"],
    correct: 1,
  },
  {
    question:
      "Какой тег используется для создания основного контента документа?",
    options: ["<content>", "<main>", "<body>"],
    correct: 1,
  },
  {
    question: "Какой тег используется для создания заголовка документа?",
    options: ["<head>", "<header>", "<title>"],
    correct: 2,
  },
  {
    question: "Какой тег используется для создания подвала документа?",
    options: ["<footer>", "<bottom>", "<end>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания встроенного фрейма?",
    options: ["<iframe>", "<frame>", "<embed>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания аудиоплеера?",
    options: ["<audio>", "<sound>", "<music>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания видеоплеера?",
    options: ["<video>", "<movie>", "<media>"],
    correct: 0,
  },
  {
    question:
      "Какой тег используется для создания источника медиа для тегов <audio> или <video>?",
    options: ["<source>", "<src>", "<media>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания canvas для рисования?",
    options: ["<canvas>", "<draw>", "<graphic>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания SVG графики?",
    options: ["<svg>", "<vector>", "<graphic>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания заголовка таблицы?",
    options: ["<thead>", "<tablehead>", "<header>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания тела таблицы?",
    options: ["<tbody>", "<tablebody>", "<body>"],
    correct: 0,
  },
  {
    question:
      "Какой тег используется для создания нижнего колонтитула таблицы?",
    options: ["<tfoot>", "<tablefoot>", "<footer>"],
    correct: 0,
  },
  {
    question:
      "Какой атрибут используется для объединения ячеек по горизонтали?",
    options: ["colspan", "rowspan", "merge"],
    correct: 0,
  },
  {
    question: "Какой атрибут используется для объединения ячеек по вертикали?",
    options: ["colspan", "rowspan", "merge"],
    correct: 1,
  },
  {
    question: "Какой тег используется для создания элемента списка?",
    options: ["<li>", "<item>", "<listitem>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания ненумерованного списка?",
    options: ["<ul>", "<ol>", "<list>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания кнопки в форме?",
    options: ["<button>", "<input type='button'>", "Оба варианта верны"],
    correct: 2,
  },
  {
    question: "Какой атрибут тега <form> определяет метод отправки данных?",
    options: ["method", "action", "send"],
    correct: 0,
  },
  {
    question: "Какой метод отправки формы передает данные в URL?",
    options: ["GET", "POST", "SEND"],
    correct: 0,
  },
  {
    question: "Какой метод отправки формы передает данные в теле запроса?",
    options: ["GET", "POST", "SEND"],
    correct: 1,
  },
  {
    question:
      "Какой атрибут тега <input> делает поле обязательным для заполнения?",
    options: ["required", "mandatory", "necessary"],
    correct: 0,
  },
  {
    question: "Какой атрибут тега <input> задает текст-подсказку в поле?",
    options: ["placeholder", "hint", "tip"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания подписи к полю формы?",
    options: ["<label>", "<caption>", "<description>"],
    correct: 0,
  },
  {
    question: "Какой атрибут тега <label> связывает его с элементом формы?",
    options: ["for", "id", "link"],
    correct: 0,
  },
  {
    question:
      "Какой тег используется для создания выпадающего списка с возможностью множественного выбора?",
    options: ["<select multiple>", "<multiselect>", "<list multiple>"],
    correct: 0,
  },
  {
    question:
      "Какой тег используется для создания группы опций в выпадающем списке?",
    options: ["<optgroup>", "<optiongroup>", "<group>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания опции в выпадающем списке?",
    options: ["<option>", "<choice>", "<item>"],
    correct: 0,
  },
  {
    question:
      "Какой атрибут тега <meta> используется для задания описания страницы?",
    options: ["description", "content", "summary"],
    correct: 1,
  },
  {
    question:
      "Какой атрибут тега <meta> используется для задания ключевых слов страницы?",
    options: ["keywords", "content", "keys"],
    correct: 1,
  },
  {
    question:
      "Какой тег используется для создания горячих точек на изображении-карте?",
    options: ["<area>", "<map>", "<hotspot>"],
    correct: 0,
  },
  {
    question:
      "Какой тег используется для создания клиентской карты изображений?",
    options: ["<map>", "<imagemap>", "<areamap>"],
    correct: 0,
  },
  {
    question: "Какой атрибут тега <img> связывает его с картой изображений?",
    options: ["usemap", "map", "imagemap"],
    correct: 0,
  },
  {
    question:
      "Какой тег используется для создания контейнера для векторной графики?",
    options: ["<svg>", "<canvas>", "<vector>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания рисунка с подписью?",
    options: ["<figure>", "<fig>", "<picture>"],
    correct: 0,
  },
  {
    question:
      "Какой тег используется для создания детализированного содержимого?",
    options: ["<details>", "<summary>", "<expand>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания заголовка для <details>?",
    options: ["<summary>", "<header>", "<title>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания диалогового окна?",
    options: ["<dialog>", "<modal>", "<popup>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания выделенного текста?",
    options: ["<mark>", "<highlight>", "<em>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания времени или даты?",
    options: ["<time>", "<date>", "<datetime>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания контейнера для контента?",
    options: ["<div>", "<span>", "<container>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания нижнего индекса?",
    options: ["<sub>", "<sup>", "<low>"],
    correct: 0,
  },
  {
    question: "Какой тег используется для создания верхнего индекса?",
    options: ["<sub>", "<sup>", "<high>"],
    correct: 1,
  },
  {
    question: "Какой тег используется для создания небольшого текста?",
    options: ["<small>", "<tiny>", "<little>"],
    correct: 0,
  },
  {
    question:
      "Какой тег используется для создания семантически важного текста?",
    options: ["<strong>", "<b>", "<important>"],
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
// Заменить существующую функцию finishQuiz на эту:
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
    resultMessage.textContent = "Отлично! Вы отлично знаете HTML!";
  } else if (correctCount >= 7) {
    resultMessage.textContent = "Хорошо! Но есть над чем поработать.";
  } else if (correctCount >= 5) {
    resultMessage.textContent =
      "Удовлетворительно. Вам нужно больше практиковаться с HTML.";
  } else {
    resultMessage.textContent =
      "Неудовлетворительно. Рекомендуем изучить HTML более основательно.";
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
