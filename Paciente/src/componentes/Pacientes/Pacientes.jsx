import FaixaTrilha from "../FaixaTrilha/FaixaTrilha"
import ExameSangue from "./imagens/coleta.jpg"
import RaioX from "./imagens/raiox.jpg"
import Ultrassom from "./imagens/ultrassom.jpg"
import Agendamentos from "./imagens/agendamento.jpg"

function Pacientes(){
    return(
        <section>

            <div id="interativo">
                <div className="cima">
                    <div>
                        EXAMES DE SANGUE
                        <br/>
                        <button className="botao">
                            <img src={ExameSangue} className="image"/>
                        </button>
                    </div>  

                    <div>
                        RAIO-X
                        <br/>
                        <button className="botao">
                            <img src={RaioX} className="image"/>
                        </button>
                    </div>
                </div>

                <div className="baixo">
                    <div>
                        ULTRASSOM
                        <br/>
                        <button className="botao">
                            <img src={Ultrassom} className="image"/>
                        </button>
                    </div>
        
                    <div>
                        AGENDAMENTOS
                        <br/>
                        <a href="../../../../Agendamentos/index.html"><button className="botao">
                            <img src={Agendamentos} className="image"/>
                        </button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pacientes