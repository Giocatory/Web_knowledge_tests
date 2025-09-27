export function quest(){
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
];

return questions;
}