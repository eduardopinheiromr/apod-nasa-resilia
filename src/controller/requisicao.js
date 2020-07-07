const date = document.querySelector(".date")
const title = document.querySelector(".title")
const media = document.querySelector(".media")
const explanation = document.querySelector(".explanation")
const copyright = document.querySelector(".copyright")
const inputData = document.querySelector("#input-data")
const endpoint = 'https://api.nasa.gov/planetary/apod?api_key=NzfVaG557Ncb8GFI3y5KPJ1VsGSxuz6Z5aS6HU3x'

window.addEventListener('load', start)
inputData.addEventListener('input', handleData)

function start() {
  requestJSON(endpoint)
}

function requestJSON(endpoint) {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => render(data))
}

function render(data) {
  let res = new Conteudo(data);
  date.innerText = res.date
  title.innerText = res.title
  media.style.backgroundImage = `url(${res.url})`
  explanation.innerText = res.explanation
  copyright.innerText = res.copyright
  endpoint.innerText = res.endpoint
}

function translate(text) {
  const options = {
    method: "POST",
    body: {
      "q": JSON.stringify(text),
      "source": "en",
      "target": "es",
      "format": "text"
    }
  }
  fetch("https://translation.googleapis.com/language/translate/v2?key=AIzaSyAgp46CwbWpD001K8Zm2Z82Ar_6PKDLqZI", options)
    .then((response) => response.json())
    .then((data) => console.log(data))
}

function handleData(event) {
  const date = `${endpoint}&date=${event.target.value}`
  requestJSON(date)
}