import { Link } from 'react-router-dom'
import LogoWhite from '../../assets/Logo/LogoWhite.svg'

function Footer() {
    return (
        <section className="footcontainer">
            <Link to="/">
                <img
                    className="homelogowhite"
                    src={LogoWhite}
                    alt="logo de Kasa"
                />
            </Link>
            <span> © 2020 Kasa. All rights reserved </span>
        </section>
    )
}

export default Footer
