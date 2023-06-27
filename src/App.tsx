import { Navbar, TipCalculatorApp } from './components'
import './App.css'

function App() {

  return (
    <div className="principal-container">
      <header>
        <Navbar />
      </header>
      <main>
        <TipCalculatorApp />
      </main>
      <footer>
        Challenge by{" Kenfu03 "}
        <a href="https://www.frontendmentor.io/profile/Kenfu03" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" Kenneth Fuentes "}
        <a
          target="_blank"
          href="https://github.com/Kenfu03/TipCalculator"
        >
          GitHub
        </a>
        .
      </footer>
    </div>
  )
}

export default App
