import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

const cardImg = [
  {"src": "/cards/Ai.png", matched: false},
  {"src": "/cards/Dango.png", matched: false},
  {"src": "/cards/Kamen.png", matched: false},
  {"src": "/cards/Katana.png", matched: false},
  {"src": "/cards/Koi.png", matched: false},
  {"src": "/cards/Onigiri.png", matched: false},
  {"src": "/cards/Sakura.png", matched: false},
  {"src": "/cards/Torii.png", matched: false},
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  const shuffle = () => {
    const shuffledCards = [...cardImg,...cardImg]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}))
    setCards(shuffledCards)
    setTurns(0)
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }
  
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src){
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return{ ...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      }
      else {
        setTimeout(() => resetTurn(), 1000)
      }
    } 
  }, [choiceOne,choiceTwo])

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  } 

  return (
    <div className="App">
      <header className="App-header"> Kami no Memory </header>
      <div className='App-body'>
        <h2>Turns: {turns}</h2>
        <button onClick={shuffle}>New Game</button>
        <div className='card-grid'> 
          {cards.map(card => (
            <Card 
              key={card.id} 
              card={card} 
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
              />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
