import React, { useState } from "react"

const Film = props => {
  const { title, description, rating, director } = props

  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div>
      <h3>{title}</h3>
      <button onClick={toggleExpansion}>
        {isExpanded ? "Collapse" : "Expand"}
      </button>
      {isExpanded && (
        <p>
          <li>Description: {description}</li>
          <li>Rating: {rating}</li>
          <li>Director: {director}</li>
        </p>
      )}
    </div>
  )
}

const FilmList = () => {
  return (
    <div>
      <Film
        title="Oppenheimer"
        description="The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb."
        rating={8.6}
        director="Christopher Nolan"
      />
      <Film
        title="The Wolf of Wall Street"
        description="Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government."
        rating={8.2}
        director="Martin Scorsese"
      />
    </div>
  )
}

export default FilmList
