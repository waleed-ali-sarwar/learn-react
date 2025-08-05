import './App.css'
import Card from './components/card'

function App() {
  // using props in card

  return (
    <>
      <Card
        title="Its Title"
        desc="Desc of the card"
        action={() => alert('Alert')}
        btnTxt="Click" />
    </>
  )
}

export default App
