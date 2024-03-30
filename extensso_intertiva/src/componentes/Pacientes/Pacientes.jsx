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
                            <img src="../Imagens/coleta.jpg" className="image"/>
                        </button>
                    </div>  

                    <div>
                        RAIO-X
                        <br/>
                        <button className="botao">
                            <img src="../Imagens/raiox.jpg" className="image"/>
                        </button>
                    </div>
                </div>

                <div className="baixo">
                    <div>
                        ULTRASSOM
                        <br/>
                        <button className="botao">
                            <img src="../Imagens/ultrassom.jpg" className="image"/>
                        </button>
                    </div>
        
                    <div>
                        AGENDAMENTOS
                        <br/>
                        <a href="../Agendamentos/agendamentos.html"><button className="botao">
                            <img src="../Imagens/agendamento.jpg" className="image"/>
                        </button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pacientes