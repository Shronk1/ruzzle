import Button from "../components/Button"

export default function Home() {
  return(
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-cyan-500 via-violet-600 to-blue-500">
      <div className="flex-1 flex justify-center items-center flex-col">
        <h1 className="text-center font-bold text-6xl my-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-amber-600">Ruzzle</h1>
        <h2 className="text-center font-bold text-4xl">Puzzle in React</h2>
      </div>
      <ul className="flex-1">
        <Button to="/level/1">Play</Button>
        <Button to="/levels">Choose Level</Button>
        <Button to="/authors">Authors</Button>
      </ul>
      <div className="flex-1"/>
    </div>
  )
}