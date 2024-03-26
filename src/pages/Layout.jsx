import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return(
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/authors">Authors</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}