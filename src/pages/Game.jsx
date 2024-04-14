import { useReducer, useRef, useState } from "react";
import Grid from "../components/Grid";
import { formatTime } from "../scripts/gameLogic";
import placeholder from "../data/imgs/placeholder.jpg";

function movesReducer(state, action) {
  if(action === "increment"){
    return state + 1;
  }
  if(action === "reset"){
    return 0;
  }
  throw Error('Unknown action.');
}

export default function Game({levelData={img:placeholder,x:3,y:3}, level}) {
  const timerRef = useRef(null);
  const [time,setTimer] = useState(0);
  const [moves,moveDispatcher] = useReducer(movesReducer,0);

  function timerDispatcher(action){
    switch (action) {
      case "start":
        const id = setInterval(() => {
          setTimer(time=>time+1);
        }, 1000);
        timerRef.current = id;
        return;
      case "stop":
        if (timerRef.current) clearInterval(timerRef.current);
        return;
      case "reset":
        if (timerRef.current) clearInterval(timerRef.current);
        setTimer(0);
        return;
      default:
        throw Error('Unknown action.');
    }
  }
  return(
    <div className="flex-1 flex justify-center items-center">
      <div className="flex justify-center flex-col">
        <div className="flex justify-between items-end mb-6">
          <h3 className="text-2xl font-bold">Time - {formatTime(time)}</h3>
          <h2 className="text-3xl font-bold">Level {level}</h2>
          <h3 className="text-2xl font-bold">Moves - {moves}</h3>
        </div>
        <Grid level={level} img={levelData.img} numCols={levelData.cols} numRows={levelData.rows} moves={moveDispatcher} timer={timerDispatcher}/>
      </div>
    </div>
  )
}