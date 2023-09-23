import logo from "./logo.svg"
import "./App.css"
import Hello from "./components/Hello"
import Maths from "./components/Maths"
import Info from "./components/Info"
import New from "./components/New"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <New />
        <Info />
        <Maths />
      </header>
    </div>
  )
}

export default App
