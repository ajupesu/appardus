import logo from "../logo.svg"
import "../App.css"
import Hello from "../components/Hello"
import Maths from "../components/Maths"
import Info from "../components/Info"
import New from "../components/New"
import Toggle from "../components/Toggle"
import { useState } from "react"
import Show from "../components/Show"
import MyForm from "../components/MyForm"
import Appbar from "../components/Appbar"

function App() {
  const [show, setShow] = useState(true)

  const toggleShow = () => setShow(previousShow => !previousShow)

  return (
    <div>
      <div className="Container">
        <h1>Hi</h1>
        <New />
        <Info />
        <Maths />
        <Toggle toggleShow={toggleShow} />
        <Show show={show} />
        <MyForm />
      </div>
    </div>
  )
}

export default App
