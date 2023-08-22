import ConcerningIllustration from '../../assets/ConcerningIllustration.svg'
import Collapse from '../../components/Collapse'
import { kasaInformations } from '../../datas/kasaInformations'

function Concerning() {
    return (
        <main>
            <section className="concerning">
                <banner className="concerning-banner">
                    <img src={ConcerningIllustration} alt="paysage" />
                </banner>
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
