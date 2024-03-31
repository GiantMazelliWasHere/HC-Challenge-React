import FaixaTrilha from "./FaixaTrilha";

function Pacientes(){
    return(
        <section>
            
            <FaixaTrilha/>

            <div id="interativo">
                <div className="cima">
                    <div>
                        EXAMES DE SANGUE
                        <br/>
                        <button className="botao">
                            <img src="./imagens/coleta.jpg" className="image"/>
                        </button>
                    </div>  

                    <div>
                        RAIO-X
                        <br/>
                        <button className="botao">
                            <img src="./imagens/raiox.jpg" className="image"/>
                        </button>
                    </div>
                </div>

                <div className="baixo">
                    <div>
                        ULTRASSOM
                        <br/>
                        <button className="botao">
                            <img src="./imagens/ultrassom.jpg" className="image"/>
                        </button>
                    </div>
        
                    <div>
                        AGENDAMENTOS
                        <br/>
                        <a href="../../../../Agendamentos/index.html"><button className="botao">
                            <img src="./imagens/agendamento.jpg" className="image"/>
                        </button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pacientes