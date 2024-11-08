import React from 'react'

const ClientCards = ({image, content, name, job }) => {
  return (
    <>
      <div className="client-card text-center">
        <div className="client-img d-flex justify-content-center align-items-center">
          <img src={image} alt="client" />
        </div>
        <div className="client-content">
          <p>{content}</p>
        </div>
        <div className="client-caption">
          <span className='name text-uppercase'>{name} </span>
          <span className='job text-uppercase'>/ {job}</span>
        </div>
      </div>
    </>
  )
}

export default ClientCards