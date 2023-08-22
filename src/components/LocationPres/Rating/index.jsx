import emptystar from '../../../assets/Star/star-empty.svg'
import fullstar from '../../../assets/Star/star-full.svg'

function Rating({ rating }) {
    const notes = [1, 2, 3, 4, 5]
    return (
        <div className="rate-contenair">
            {notes.map((note) =>
                note <= rating ? (
                    <img
                        key={note}
                        src={fullstar}
                        alt="étoile remplie"
                        className="star"
                    />
                ) : (
                    <img
                        key={note}
                        src={emptystar}
                        alt="étoile vide"
                        className="star"
                    />
                )
            )}
        </div>
    )
}

export default Rating
