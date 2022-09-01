import React from 'react'

function Child(props) {
  return (
    <div>
      <button onClick={() => props.helloParent('Sujit')}> Welcome</button>
    </div>
  )
}

export default Child