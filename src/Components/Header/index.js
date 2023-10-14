import { NavLink } from "react-router-dom";
import './header.css';
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-link" to='/'> All </NavLink>
                    <NavLink className="nav-link" to='/full-stack'> Full Stack Development </NavLink>
                    <NavLink className="nav-link" to='/data'> Data Science </NavLink>
                    <NavLink className="nav-link" to='/cyber'> Cyber Security </NavLink>
                    <NavLink className="nav-link" to='/career'> Career </NavLink>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;