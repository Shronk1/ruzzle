import { splitImageIntoTiles, shuffleArray, array1dTo2d, isFinnished, array2dTo1d } from "../scripts/gameLogic";
import { useContext, useEffect, useState } from "react";
import Button from "./Button";
import { LevelsContext } from "./App";
import { setLastLevel, setScore } from "../scripts/localstorage.js";

export default function Grid({img, level, numCols, numRows, moves, moveDispatcher, timer}){
  const [gameStatus,setGameSatus] = useState("readyToStart");
  const [tiles,setTiles] = useState([]);
  const [selectedTile,setSelectedTile] = useState(false);
  const levelsList = useContext(LevelsContext);

  useEffect(_=>{
    async function cut(){
      const array = await splitImageIntoTiles(img, numCols, numRows);
      shuffleArray(array);
      setTiles(array1dTo2d(array,numCols));
    };
    cut();
  },[numCols, numRows]);// numCols numRows are constant, but their are here to prevent warning

  function handleSelect(x,y) {
    if(!selectedTile){// select 1st piece; in JS {} is truthy
      setSelectedTile({x:x,y:y})
    }else{
      if(selectedTile.x === x && selectedTile.y === y){ // unselect
        setSelectedTile(false); 
      }else{// 2nd piece selected
        //TODO animation
        
        // state update
        setTiles(state=>{
          [state[y][x], state[selectedTile.y][selectedTile.x]] = [state[selectedTile.y][selectedTile.x], state[y][x]];// switch pieces
          if(isFinnished(state)){
            handleFinnish();
          };
          return state;
        })
        moveDispatcher("increment");
        setSelectedTile(false);
      }
    }
  }

  function handleStart(){
    setGameSatus("onGoing");
    timer("start");
    setLastLevel(level);
  }

  function handleFinnish(){// TODO new best
    setGameSatus("finished");
    timer("stop");
    setScore(level, timer("get"), moves);
    setLastLevel(levelsList.length===level? 1 : level+1);
  }

  function handleReset(){
    timer("reset");
    moveDispatcher("reset");
    const array = array2dTo1d(tiles);
    shuffleArray(array);
    setTiles(array1dTo2d(array,numCols));
    setGameSatus("onGoing");
    timer("start");
  }

  function handleNext(){
    timer("reset");
    moveDispatcher("reset");
    const array = array2dTo1d(tiles);
    shuffleArray(array);
    setTiles(array1dTo2d(array,numCols));
    setGameSatus("readyToStart");
  }

  return(
    <div className="flex flex-col">
      {
        gameStatus === "readyToStart" ? 
        <div className="flex justify-center items-center">
          <img draggable="false" src={img} className={"inline blur-sm select-none shadow-2xl"} />
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
          <img draggable="false" src={img} className={"inline blur-sm select-none shadow-2xl"} />
          <ul className="absolute">
            {
              levelsList.length === level ? 
              <Button to={"/levels"}>Levels</Button>
              :
              <Button to={`/level/${level+1}`} onClick={handleNext}>Next Level</Button>
            }
            <Button Type="button" onClick={handleReset}>Play again!</Button>
          </ul>
        </div>:undefined
      }
    </div>
  ) 
}