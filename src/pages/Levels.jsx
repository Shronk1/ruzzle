import { useContext } from "react";
import { LevelsContext } from "../components/App";
import LevelIcon from "../components/LevelIcon";

export default function Levels() {
  const levelsList = useContext(LevelsContext);
  return(
    <div className="flex-1 flex justify-center items-center">
      <div className="gap-6 flex justify-center w-9/12 max-w-screen-md flex-wrap">
        {levelsList.map((lvl,i)=><LevelIcon key={i} level={lvl} number={i+1}/>)}
      </div>
    </div>
  )
}