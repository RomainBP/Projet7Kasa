import Collapse from '../../components/Collapse'
import { kasaInformations } from '../../datas/kasaInformations'
import Banner from '../../components/Banner'

function Concerning() {
    return (
        <main>
            <section className="concerning">
                <Banner />
                <div className="concerning-collapse">
                    {kasaInformations.map((info) => (
                        <Collapse
                            key={info.id}
                            label={info.label}
                            text={info.content}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Concerning
