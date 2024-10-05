function ContentSection() {
    return (
        <section>
            <div className="content-section debug-transparent">
                <p className="mais-tocadas">As Mais Tocadas!</p>
                <div className="mscs">
                    <img className="doze" src="lugardistante.jpg" Lugar Distante/>
                    <img src="maquinadotempo.jpg" className="doze1"/>
                    <img src="horasiguais.jpg" className="doze1"/>
                    <img src="anosluz.jpg" className="doze1"/>
                    <img src="autotune.jpg" className="doze1"/>
                </div>
                <div>
                    <a href="#" className="nomes">Lugar Distante</a>
                    <a href="#" className="nomes1">É sal</a>
                    <a href="#" className="nomes5">Horas Iguais</a>
                    <a href="#" className="nomes2">Anos Luz</a>
                    <a href="#" className="nomes3">A morte do Autotune</a>
                </div>
            </div>
        </section>
    )
}

export default ContentSection