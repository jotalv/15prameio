import capa from "../assets/333.jpg"

function HeroSection() {
    return (
        <section className="section">
            <div className="hero-section">
                <div className="atual">
                    <img src={capa} className="capa"/>
                    <div>
                        <p className="matue">1993 - Matuê</p>
                        <p className="album">Escute 333 no site da 30!</p>
                </div>
                </div>
            </div>

        </section>
    )
}

export default HeroSection