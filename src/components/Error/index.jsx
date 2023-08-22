import { Link } from 'react-router-dom'

function Error() {
    return (
        <section className="errorwrapper">
            <h1 className="errortitle"> 404 </h1>
            <h2 className="errorsubtitle">
                Oups ! La page que vous demandez n'existe pas.
            </h2>
            <Link className="styledlinkerror" to="/">
                Retourner sur la page d'accueil
            </Link>
        </section>
    )
}

export default Error
