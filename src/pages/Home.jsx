import MenuButton from "../components/MenuButton"

export default function Home() {
  return(
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="flex-1">Ruzzle</h1>
      <ul className="flex-1">
        <MenuButton to="/play">Play</MenuButton>
        <MenuButton to="/settings">Settings</MenuButton>
        <MenuButton to="/authors">Authors</MenuButton>
      </ul>
      <div className="flex-1"/>
    </div>
  )
}