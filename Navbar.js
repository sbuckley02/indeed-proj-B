import { Link } from "react-router-dom"

export default function Navbar(){
    return (
        <nav className = "nav">
            <Link href="/" className="GT Club Hunt"> GT Club Hunt</Link>
            < ul>
               
                <CustomLink href="/Find Jobs"> Find Clubs </CustomLink>
               
               
                <CustomLink href="/Find Executive Positions"> Find Executive Positions</CustomLink>
            
            </ul>
        </nav>
    )
}  

function CustomLink({ to, children, ...props }) {
    const path = window.Location.pathname

    return (
        <li className={ path == to ? "active" : ""}>
            <Link to={to} {...props}>
                {children }
            </Link>
        </li>
    )
}
