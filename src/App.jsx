import { puppyList } from './data'
import { useState } from 'react'



function App() {
  console.log(puppyList);

  const [puppies, setPuppies] = useState(puppyList);

  console.log(puppies)

  return (
      <div className="App">
        {
          puppies.map((puppy) => {
            return <p>{puppy.name}</p>
          })
        }

      </div>
  )
}

export default App
