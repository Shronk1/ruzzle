import { Outlet } from "react-router-dom";
import NavItem from "../components/NavItem";

export default function Layout() {
  return(
    <>
      <nav className="block ">
        <ul className="flex gap-6 justify-center">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/settings">Settings</NavItem>
          <NavItem to="/authors">Authors</NavItem>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}