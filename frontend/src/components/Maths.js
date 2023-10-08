import { Button } from "@mui/material"
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
        <Button
          variant="contained"
          style={buttonStyle}
          onClick={() => setCount(count + 1)}
          sx={{ marginBottom: 3 }}
        >
          +1
        </Button>
        <Button
          variant="contained"
          style={buttonStyle}
          onClick={() => setCount(count + 10)}
          sx={{ marginBottom: 3 }}
        >
          +10
        </Button>
        <Button
          variant="contained"
          style={buttonStyle}
          onClick={() => setCount(count + 100)}
          sx={{ marginBottom: 3 }}
        >
          +100
        </Button>
        <Button
          variant="contained"
          style={buttonStyle}
          onClick={() => setCount(count - 1)}
          sx={{ marginBottom: 3 }}
        >
          -1
        </Button>
        <Button
          variant="contained"
          style={buttonStyle}
          onClick={() => setCount(count - 10)}
          sx={{ marginBottom: 3 }}
        >
          -10
        </Button>
        <Button
          variant="contained"
          style={buttonStyle}
          onClick={() => setCount(count - 100)}
          sx={{ marginBottom: 3 }}
        >
          -100
        </Button>
        <Button
          variant="contained"
          style={buttonStyle}
          onClick={() => setCount(prevCount => prevCount + 500)}
          sx={{ marginBottom: 3 }}
        >
          +500
        </Button>
      </div>
    </React.Fragment>
  )
}
// <button style ={buttonStyle} onClick={() => setCount((prevCount) => prevCount + 500)}>+500</button>
// on parem kasutada, siis tekib vähem buge.
export default Maths
