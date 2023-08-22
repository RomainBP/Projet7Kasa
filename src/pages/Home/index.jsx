import HomeIllustration from '../../assets/HomeIllustration.svg'
import Card from '../../components/Card'
import { appartments } from '../../datas/appartments'

function Home() {
    return (
        <main>
            <section className="homecontainer">
                <banner className="hometitle">
                    <h1>Chez vous, partout et ailleurs</h1>
                    <img src={HomeIllustration} alt="paysage" />
                </banner>
                <div className="cardscontainer">
                    {appartments.map((appartment) => (
                        <Card
                            key={`${appartment.id}`}
                            title={appartment.title}
                            cover={appartment.cover}
                            id={appartment.id}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Home
