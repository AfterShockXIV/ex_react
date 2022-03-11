import React from 'react'

const Photopage = () => {
  return (
    <div>
      <img src={new URL("../Asset/login.png",import.meta.url).href}></img>
    </div>
  )
}

export default Photopage