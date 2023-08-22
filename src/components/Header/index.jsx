import { Link } from 'react-router-dom'
import LogoOrange from '../../assets/Logo/LogoOrange.svg'

function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img className="homelogo" src={LogoOrange} alt="Logo de Kasa" />
            </Link>
            <nav>
                <Link className="navlink" to="/">
                    Accueil
                </Link>
                <Link className="navlink" to="/Concerning">
                    A propos
                </Link>
            </nav>
        </header>
    )
}

export default Header
