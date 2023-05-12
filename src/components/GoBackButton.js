import React from 'react'
import { useNavigate } from 'react-router-dom'

const GoBckButton = () => {
    const navigate = useNavigate()

  return (
    <div>
        <h4 onClick={()=>navigate(-1)} >Go Back </h4>
    </div>
  )
}

export default GoBckButton

// style={{backgroundColor: 'yellow', color: 'black', margin: '5px'}}