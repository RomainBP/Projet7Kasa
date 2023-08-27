import { useParams } from 'react-router-dom'
import { appartments } from '../../datas/appartments'
import Carrousel from '../../components/LocationPres/Carroussel'
import Tag from '../../components/LocationPres/Tag'
import Host from '../../components/LocationPres/Host'
import Rating from '../../components/LocationPres/Rating'
import Collapse from '../../components/Collapse'
import { Navigate } from 'react-router-dom'

function Appartment() {
    const { locationId } = useParams()
    const location = appartments.find(
        (appartment) => locationId === appartment.id
    )
    if (location === undefined) {
        return <Navigate to="/404" />
    }
    return (
        <main>
            <Carrousel pictures={location.pictures} />
            <section className="locationpres">
                <div className="location">
                    <div className="location-localisation">
                        <h1>{location.title}</h1>
                        <h2>{location.location}</h2>
                        <div className="tag-wrapper">
                            <Tag tag={location.tags} />
                        </div>
                    </div>
                    <div className="location-host">
                        <Host host={location.host} />
                        <Rating rating={location.rating} />
                    </div>
                </div>
                <div className="collapse">
                    <Collapse label="Description" text={location.description} />
                    <Collapse label="Équipments" text={location.equipments} />
                </div>
            </section>
        </main>
    )
}

export default Appartment
