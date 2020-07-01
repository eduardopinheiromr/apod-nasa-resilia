window.addEventListener('load', requestURL)

// const apiKey = 'NzfVaG557Ncb8GFI3y5KPJ1VsGSxuz6Z5aS6HU3x';

const info = document.querySelector('.informacoes')
const media = document.querySelector('.media')

function requestURL() {
  fetch('https://api.nasa.gov/planetary/apod?api_key=NzfVaG557Ncb8GFI3y5KPJ1VsGSxuz6Z5aS6HU3x')
    .then((response) => response.json())
    .then((data) => resposta(data));
}

function resposta(dados) {
  const div = document.createElement('div');
  if (dados.media_type == 'video') {
    const mensagem = `
    <h2><strong>Título:</strong> ${dados.title}</h2>
    <iframe width="853" height="480" src="${dados.url}"></iframe><br>
    <p><strong>Explanation:</strong> <span class="explanation">${dados.explanation}</span></p>
    <p><strong>Copyright</strong> ${dados.copyright}</p>
  `;
    div.innerHTML = mensagem;
  } else {
    const mensagem = `
    <h2><strong>Título:</strong> ${dados.title}</h2>
    <img width="853" height="480" src="${dados.url}"/><br>
    <p><strong>Explanation:</strong> <span class="explanation">${dados.explanation}</span></p>
    <p><strong>Copyright</strong> ${dados.copyright}</p>
    `;
    div.innerHTML = mensagem;
  }

  info.appendChild(div);
}