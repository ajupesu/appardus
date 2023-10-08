import React from "react"

/* const Hello = props => {
  const { name } = props
  return <div>TERE, selen mina {name}</div>
} */

const Hello = ({ name, age }) => (
  <div>
    TERE, selen mina {name} {age}
  </div>
)

export default Hello
