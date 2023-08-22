import React, { useState } from 'react'
import Arrowleft from '../../../assets/Arrow/Arrow-left.svg'
import Arrowright from '../../../assets/Arrow/Arrow-right.svg'

function Carrousel({ pictures }) {
    const [currentPicture, setCurrentPicture] = useState(0)
    const length = pictures.length

    const nextPicture = () =>
        setCurrentPicture(
            currentPicture === length - 1 ? 0 : currentPicture + 1
        )
    const previousPicture = () =>
        setCurrentPicture(
            currentPicture === 0 ? length - 1 : currentPicture - 1
        )

    if (length <= 0) {
        return (
            <p>Il n'y a pas encore d'images disponibles pour ce logement...</p>
        )
    }
    return (
        <section className="slide">
            {length > 1 && (
                <p className="arrow" onClick={previousPicture}>
                    <img
                        src={Arrowleft}
                        className="arrow-left"
                        alt="lien pour photo précédente"
                    />
                </p>
            )}
            {length > 1 && (
                <p className="arrow" onClick={nextPicture}>
                    <img
                        src={Arrowright}
                        className="arrow-right"
                        alt="lien pour photo précédente"
                    />
                </p>
            )}
            <div className="slide__image">
                {pictures.map((picture, index) => (
                    <div key={index}>
                        {index === currentPicture && (
                            <img src={picture} alt="Vue de l'appartement" />
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Carrousel
