import { useState } from 'react'
import Translator from './components/Translator'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Translator />
    </div>
  )
}

export default App
