import FaixaTrilha from "../FaixaTrilha/FaixaTrilha"
import coleta from "./imagens/coleta.jpg"
import raioX from "./imagens/raiox.jpg"
import ultrassom from "./imagens/ultrassom.jpg"

function Agendamentos(){
    return(
        <section>
            <div id="agendamentos">
                <h3>Escolha seu Exame:</h3>
                <div className="exames">
                    <div>
                        Coleta de sangue
                        <br/>
                        <button className="botao">
                            <img src={coleta} className="image"/>
                            
                        </button>
                    </div>
                    <div>
                        Raio-X
                        <br/>
                        <button className="botao">
                            <img src={raioX} className="image"/>
                        </button>
                    </div>
                    <div>
                        Ultrassom
                        <br/>
                        <button className="botao">
                            <img src={ultrassom} className="image"/>
                        </button>
                    </div>
                </div>

                <div className="agendar">
                    <input id="nome" className="inputs" type="text" placeholder="Digite seu nome"/>

                    <input id="consulta" className="inputs" type="text" placeholder="Insira um dia para a consulta"/>

                    <input id="horario" className="inputs" type="text" placeholder="Insira um horário"/>
                </div>
                <br/>
                <button id="enviar">Enviar</button>
            </div>
        </section>
    )
}

export default Agendamentos