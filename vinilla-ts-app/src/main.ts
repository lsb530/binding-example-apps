import './style.css'
import kkobuki from '/kko.png'
import { setupCounter } from './counter.ts'
import {setupStringUpdate} from "./updateString.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://code-boki.tistory.com/" target="_blank">
      <img src="${kkobuki}" class="logo" alt="Vite logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <h2>        from Boki</h2>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <h2>Two Way Binding Text Input</h2>
    <input id="my-input" type="text" placeholder="Enter text here" />
    <p id="string-display"></p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
setupStringUpdate(
    document.querySelector<HTMLInputElement>('#my-input')!,
    document.querySelector<HTMLParagraphElement>('#string-display')!
)