import './style.css'
import kkobuki from '/kko.png'
import { setupCounter } from './counter.ts'
import {setupStringUpdate} from "./updateString.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://code-boki.tistory.com/" target="_blank">
        <img src="${kkobuki}" class="logo" alt="Blog" />
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
// const { programmaticallyUpdate } =
    setupStringUpdate(
    document.querySelector<HTMLInputElement>('#my-input')!,
    document.querySelector<HTMLParagraphElement>('#string-display')!
)

// 예시: 프로그래매틱 업데이트
// setTimeout(() => {
//     programmaticallyUpdate('프로그램에 의해 변경된 값');
// }, 5000)