import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import DifficultyDropdown from './components/Difficulty.js';
import Header from './components/Header.js';

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
  // const [difficulty, setDifficulty] = useState(options[1]); 

  const shuffle = () => {
    const shuffledCards = [...cardImg,...cardImg]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}))
    setChoiceOne(null)
    setChoiceTwo(null)
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

  useEffect(() => {
    shuffle()
  },[])

  const handleDifficultyChange = (value) => {
    console.log('Selected difficulty:', value);
  };

  return (
    <div className="App">
      <Header/>
      <div className='App-body'>
        <div className='game-start'>
          <DifficultyDropdown
            onDifficultyChange={handleDifficultyChange}
          />
          <button onClick={shuffle} className='ng'>New Game</button>
          <div className='turn-counter'>
            Turns: {turns}
          </div>
        </div>
        <div style={{alignItems:"center", justifyContent:"center"}}>
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
    </div>
  );
}

export default App;
