import Card from '../../components/Card'
import { appartments } from '../../datas/appartments'
import Banner from '../../components/Banner'

function Home() {
    return (
        <main>
            <section className="homecontainer">
                <Banner />
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
