 import React from 'react'
import Card from './Component/Card';
 const App = () => {
   return (
     <div>
       <Card name="Card" btn="Close" />
        <Card name="Main-card" btn="submit"/>
        <Card name="Container-card" btn="Click Me"/>
     </div>
   )
 }
 
 export default App