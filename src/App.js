import { useState, useEffect } from "react";
import Card from "./components/Card";
import Win from "./components/Win";


function App() {
  const [main, setMain] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O")
  const [result, setResult] = useState({winner: "none", state: "none"})

  const chooseCard = (cardIndex) => {
    setMain(main.map((card, index) => {
      if(index === cardIndex && card === ""){
        return player
      }

      return card
    }))
  }

  useEffect(() => {
    checkWin()
    checkTie()

    if(player === "X"){
      setPlayer("0")
    }else{
      setPlayer("X")
    }
  }, [main])

  useEffect(() => {
    if(result.state !== 'none'){
      alert(`Game finished! Winning player: ${result.winner}`)
    }
    restart()
  }, [result])

  const checkWin = () => {
    Win.forEach((currWin) => {
      const firstPlayer = main[currWin[0]]
      if(firstPlayer === "") return;
      let foundWin = true
      currWin.forEach((index) => {
        if(main[index] !== firstPlayer){
          foundWin = false
        }
      })

      if(foundWin){
        setResult({winner: player, state: "won"})
      }
    })
  }

  const checkTie = () => {
    let filled = true;
    main.forEach((card) => {
      if(card === ""){
        filled = false
      }
    })

    if(filled){
      setResult({winner: "No one", state: "Tie"})
    }
  }

  const restart = () => {
    setMain(["", "", "", "", "", "", "", "", ""])
    setPlayer("X")
  }

  return (
    <div className="App">
      <div className="main">
        <div className="row">
          <Card
            val={main[0]}
            chooseCard={() => chooseCard(0)}
          />
          <Card
            val={main[1]}
            chooseCard={() => chooseCard(1)}
          />
          <Card
            val={main[2]}
            chooseCard={() => chooseCard(2)}
          />
        </div>
        <div className="row">
          <Card
            val={main[3]}
            chooseCard={() => chooseCard(3)}
          />
          <Card
            val={main[4]}
            chooseCard={() => chooseCard(4)}
          />
          <Card
            val={main[5]}
            chooseCard={() => chooseCard(5)}
          />
        </div>
        <div className="row">
          <Card
            val={main[6]}
            chooseCard={() => chooseCard(6)}
          />
          <Card
            val={main[7]}
            chooseCard={() => chooseCard(7)}
          />
          <Card
            val={main[8]}
            chooseCard={() => chooseCard(8)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
