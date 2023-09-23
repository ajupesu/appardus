import React, { useState } from "react"

const Info = () => {
  const [name, setName] = useState("Aksel Talvoja")
  const [form, setRandom] = useState("")
  const [message, setMessage] = useState("")
  const [hobbies] = useState(["Programming", "Football", "Traveling"])
  const [backgroundColor, setBackgroundColor] = useState("")

  const handleRandomChange = e => {
    setRandom(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setMessage(`Hello, ${name}! You entered: ${form}`)
  }

  const handleActionClick = () => {
    setBackgroundColor(prevColor => (prevColor === "red" ? "" : "red"))
  }

  return (
    <div style={{ backgroundColor }}>
      <h2>My Name: {name}</h2>
      <ul>
        <p>Things I Like:</p>
        {hobbies.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Enter something:
          <input
            type="text"
            value={form}
            onChange={handleRandomChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
      <button onClick={handleActionClick}>Call to Action</button>
    </div>
  )
}

export default Info
