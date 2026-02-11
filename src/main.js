import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Panel de Ejemplo</h1>
    <p>Esta es una página de demostración que muestra un contador interactivo.</p>
    
    <div class="card">
      <button id="counter" type="button"></button>
      <p>Presiona el botón para aumentar el contador.</p>
    </div>

    <p class="read-the-docs">
      Puedes aprender más sobre las tecnologías usadas haciendo clic en los logos:
    </p>

    <div class="logos">
      <a href="https://vite.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
