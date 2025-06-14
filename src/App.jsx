import { useState } from 'react'
import quotes from './quote.json'
import './App.css'

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandQuotes = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }

  return (
    <>
      <h1>Gossip Girl Quote Generator</h1>
      <h1>"{quote.text} xoxo"</h1>
      <h1>- {quote.author}</h1>
      <button onClick={getRandQuotes}>Click Me!</button>
    </>
  )
}

export default App
