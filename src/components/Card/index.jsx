import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Card({ title, cover, id }) {
    return (
        <div className="cardwrapper">
            <Link className="cardlink" to={`/Appartment/${id}`}>
                <img className="cardimage" src={cover} alt="appartment" />
                <h2 className="cardtitle">{title}</h2>
            </Link>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
    title: 'Titre de la location',
    picture: '',
}

export default Card
