import { Link } from "react-router-dom";

export default function NavItem({children, to}) {
  return(
    <li>
      <h3 className="py-2 px-4 text-2xl rounded-full bg-gradient-to-t from-transparent via-emerald-400 to-cyan-200">
        <Link to={to}>{children}</Link>
      </h3>
    </li>
  )
}