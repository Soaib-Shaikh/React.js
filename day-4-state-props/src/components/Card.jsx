import React from 'react'

const Card = ({username, jobTitle}) => {
  return (
    <>
      <div className="card p-3 shadow" style={{width:"18rem"}}>
        <h3>{username}</h3>
        <p>{jobTitle}</p>
      </div>
    </>
  )
}

export default Card
