import React, { useState } from 'react'
import arrowcollapse from '../../assets/Arrow/arrowcollapse.svg'
import arrowcollapseopen from '../../assets/Arrow/arrowcollapseopen.svg'

function Collapse({ label, text }) {
    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(!open)
    }
    return (
        <div className="collapsecard">
            <div className="collapsebanner">
                <h3 className="collapse-title">{label}</h3>
                <button>
                    {open ? (
                        <img
                            src={arrowcollapse}
                            onClick={toggle}
                            alt="flèche de contenu"
                        />
                    ) : (
                        <img
                            src={arrowcollapseopen}
                            onClick={toggle}
                            alt="flèche de contenu"
                        />
                    )}
                </button>
            </div>
            <div className={open ? 'collapse-text' : 'collapse-text__hidden'}>
                {Array.isArray(text) ? (
                    text.map((equipment, index) => {
                        return <p key={index}>{equipment}</p>
                    })
                ) : (
                    <p>{text}</p>
                )}
            </div>
        </div>
    )
}

export default Collapse
