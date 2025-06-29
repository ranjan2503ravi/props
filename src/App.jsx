import React, { useState } from 'react'
import Card from './Component/Card'
const App = () => {
  let obj = {
    name: "ravi",
    value:12,
  }
  return (
    <div>
      
      <Card username="chai our code" obj1={ obj} btnText="click" />
      <Card/>
     </div>
  )
}

export default App