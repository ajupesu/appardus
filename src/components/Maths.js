import React, { useState } from "react"

const Maths = () => {
  const [count, setCount] = useState(0)

  const buttonStyle = {
    margin: "5px"
  }
  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center"
  }

  return (
    <React.Fragment>
      <div>{count}</div>
      <div style={buttonContainerStyle}>
        <button
          style={buttonStyle}
          onClick={() => setCount(count + 1)}
        >
          +1
        </button>
        <button
          style={buttonStyle}
          onClick={() => setCount(count + 10)}
        >
          +10
        </button>
        <button
          style={buttonStyle}
          onClick={() => setCount(count + 100)}
        >
          +100
        </button>
        <button
          style={buttonStyle}
          onClick={() => setCount(count - 1)}
        >
          -1
        </button>
        <button
          style={buttonStyle}
          onClick={() => setCount(count - 10)}
        >
          -10
        </button>
        <button
          style={buttonStyle}
          onClick={() => setCount(count - 100)}
        >
          -100
        </button>
        <button
          style={buttonStyle}
          onClick={() => setCount(prevCount => prevCount + 500)}
        >
          +500
        </button>
      </div>
    </React.Fragment>
  )
}
// <button style ={buttonStyle} onClick={() => setCount((prevCount) => prevCount + 500)}>+500</button>
// on parem kasutada, siis tekib vähem buge.
export default Maths
