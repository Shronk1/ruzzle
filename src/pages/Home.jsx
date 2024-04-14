import Button from "../components/Button"

export default function Home() {
  return(
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="flex-1">Ruzzle</h1>
      <ul className="flex-1">
        <Button to="/play">Play</Button>
        <Button to="/settings">Settings</Button>
        <Button to="/authors">Authors</Button>
      </ul>
      <div className="flex-1"/>
    </div>
  )
}