import './Nav.css';
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";

function Nav({ theme, toggleTheme }){
    return(
        <nav className="Nav">
            <h1 className='Title'>Arzoo Sharma</h1>
            <ul className="List">
                <li><Link className="a" to="/">About</Link></li>
                <li><Link className="a" to="/certificates">Certificates</Link></li>
                <li><Link className="a" to="/contact">Contact</Link></li>
                <li>
                <a
                    className="a"
                    href="https://www.linkedin.com/in/arzoo-sharma-99523b247/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
                </li>
                <li>
                <a
                    className="a"
                    href="https://github.com/Arzoosharma-67/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
                </li>
                <li className="theme-toggle" onClick={toggleTheme}>
                    {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
                </li>
            </ul>
        </nav>
    )
}

export default Nav;