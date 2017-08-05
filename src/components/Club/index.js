import React from 'react'

const Club = ({club, closeModal}) => (
  <section>
    <button onClick={closeModal} className="button-close">
      Close Modal
    </button>

    <h1>{club.name}</h1>


  </section>
)

export default Club
