import React from 'react'

function Button({
  className="",
  name
}) {
  return <>
    <button className={`${className}`}>
      {name}
    </button>
  </>
}

export default Button;