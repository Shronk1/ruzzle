import { Link } from "react-router-dom";

export default function LevelIcon({level, number}) {
  return(
    <Link to={`../level/${number}`} className="aspect-square rounded-xl border-4 flex justify-center items-center hover:scale-125 transition-all h-24 w-24">
      <img draggable="false" src={level.img} height={96} width={96} className={"inline blur-sm select-none"} />
      <h3 className="absolute font-bold text-5xl">{number}</h3>
    </Link>
  )
}