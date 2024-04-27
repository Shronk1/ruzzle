import { Outlet } from "react-router-dom";
import Button from "../components/Button";

export default function Layout() {
  return(
    <div className="h-full min-h-screen flex flex-col bg-gradient-to-br from-cyan-500 via-violet-600 to-blue-500">
      <nav className="block">
        <ul className="flex gap-6 justify-center">
          <Button to="/">Home</Button>
          <Button to="/levels">Levels</Button>
          <Button to="/authors">Authors</Button>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}