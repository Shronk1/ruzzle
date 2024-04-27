import { Link } from "react-router-dom";
import { getScore } from "../scripts/localstorage";

export default function LevelIcon({level, number}) {
  const score = getScore(number);
  return(
    <div>
      <Link to={`../level/${number}`} className="aspect-square rounded-xl border-4 flex justify-center items-center hover:scale-125 transition-all h-24 w-24">
        <img draggable="false" src={level.img} height={96} width={96} className={"inline blur-sm select-none"} />
        <h3 className="absolute font-bold text-5xl">{number}</h3>
      </Link>
      <div className="flex justify-between font-bold px-2">
        <span>{score.time}</span>
        in
        <span>{score.moves}</span>
      </div>
    </div>
  )
}