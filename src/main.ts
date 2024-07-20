import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setElements } from './color-generator.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="main-container">
    <h1>Random Color Generator</h1>
    <div id="card-container" class="card-container">
    </div>
    <button id="generate-more-btn" class="generate-more-btn">Generate more colors</button>
  </div>
`

setElements(document.querySelector<HTMLButtonElement>('#card-container')!,document.querySelector<HTMLButtonElement>('#generate-more-btn')!)
