import { splitImageIntoTiles, shuffleArray, array1dTo2d, isFinnished, array2dTo1d } from "../scripts/gameLogic";
import { useEffect, useState } from "react";
import Button from "./Button";

export default function Grid({img, numCols, numRows, moves, timer}){
  const [gameStatus,setGameSatus] = useState("readyToStart");
  const [tiles,setTiles] = useState([]);
  const [selectedTile,setSelectedTile] = useState(false);

  useEffect(_=>{//pocięcie i pomieszanie obrazka
    async function cut(){
      const array = await splitImageIntoTiles(img, numCols, numRows);
      shuffleArray(array);
      setTiles(array1dTo2d(array,numCols));
    };
    cut();
  },[numCols, numRows]);

  function handleSelect(x,y) {
    if(!selectedTile){//nic jeszcze nie jest zaznaczone, w JS {} jest truthy
      setSelectedTile({x:x,y:y})
    }else{
      if(selectedTile.x === x && selectedTile.y === y){ // odznaczenie puzzla
        setSelectedTile(false); 
      }else{//zaznaczenie 2 puzzla
        //TODO animacja
        setTiles(state=>{
          [state[y][x], state[selectedTile.y][selectedTile.x]] = [state[selectedTile.y][selectedTile.x], state[y][x]];//zamiana 2 puzzli
          if(isFinnished(state)){
            handleFinnish();
          };
          return state;
        })
        moves("increment");
        setSelectedTile(false);
      }
    }
  }

  function handleStart(){
    setGameSatus("onGoing");
    timer("start");
  }

  function handleFinnish(){
    setGameSatus("finished");
    timer("stop");
  }

  function handleReset(){
    timer("reset");
    moves("reset");
    const array = array2dTo1d(tiles);
    shuffleArray(array);
    setTiles(array1dTo2d(array,numCols));
    setGameSatus("onGoing");
    timer("start");
  }

  return(
    <div className="flex flex-col">
      {
        gameStatus === "readyToStart" ? 
        <div className="flex justify-center items-center">
          <img draggable="false" src={img} className={"inline blur-sm select-none "} />
          <ul className="absolute">
            <Button Type="button" onClick={handleStart}>Start!</Button>
          </ul>
        </div>:undefined
      }
      {
        gameStatus === "onGoing" ? 
        tiles.map((col, c)=>{
          return(
            <div className="flex flex-row" key={c}>
              {col.map((puzzle, p)=> {
                return(
                  <img onClick={_=>{handleSelect(p,c)}} key={p} draggable="false" src={puzzle.img} className={`${selectedTile.x===p&&selectedTile.y===c?"animate-select shadow-lg":""} inline border select-none hover:cursor-pointer`} />
                )
              })}
            </div>
          ) 
        }):undefined
      }
      {
        gameStatus === "finished" ? 
        <div className="flex justify-center items-center">
          <img draggable="false" src={img} className={"inline blur-sm select-none "} />
          <ul className="absolute">
            <Button Type="button" onClick={handleReset}>Play again!</Button>
          </ul>
        </div>:undefined
      }
    </div>
  ) 
}