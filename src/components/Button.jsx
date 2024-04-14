import { Link } from "react-router-dom";
export default function Button({Type = Link, to="/", children, ...props}) {
  return(
    <li className="text-center my-6">
      <Type to={to} {...props} className="block py-4 px-6 rounded-full text-white text-2xl font-bold bg-gradient-to-br from-pink-500 to-orange-400 transition hover:scale-110 focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
        {children}
      </Type>
    </li>
  )
}