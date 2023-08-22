function Host({ host }) {
    return (
        <div className="host-wrapper">
            <span className="host-wrapper__contenant">{host.name}</span>
            <img src={host.picture} alt="photo du propriétaire du logement" />
        </div>
    )
}

export default Host
