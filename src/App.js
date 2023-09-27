import logo from "./logo.svg"
import "./App.css"
import Hello from "./components/Hello"
import Maths from "./components/Maths"
import Info from "./components/Info"
import New from "./components/New"
import Toggle from "./components/Toggle"
import { useState } from "react"
import Show from "./components/Show"

function App() {
  const [show, setShow] = useState(true)

  const toggleShow = () => setShow(previousShow => !previousShow)

  return (
    <div className="Container">
      <h1>Hi</h1>
      <New />
      <Info />
      <Maths />
      <Toggle toggleShow={toggleShow} />
      <Show show={show} />
    </div>
  )
}

export default App
