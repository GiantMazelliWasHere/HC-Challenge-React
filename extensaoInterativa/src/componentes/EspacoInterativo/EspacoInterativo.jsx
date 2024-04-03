import paciente from "./imagens/paciente.jpg"
import acompanhante from "./imagens/acompanhante.jpg"
import voluntario from "./imagens/voluntario.jpg"
import sobre from "./imagens/sobre.jpg"

function EspacoInterativo(){
    return(
        <section>

            <div id="interativo">
                <div className="cima">
                    <div>
                        PACIENTE
                        <br/>
                        <a href="../Paciente/paciente.html"><button className="botao">
                            <img src={paciente} className="image"/>
                        </button></a>
                    </div>
    
                    <div>
                        ACOMPANHANTE
                        <br/>
                        <button className="botao">
                            <img src={acompanhante} className="image"/>
                        </button>
                    </div>
                </div>
                <div className="baixo">
                    <div>
                        VOLUNTÁRIO
                        <br/>
                        <button className="botao">
                            <img src={voluntario} className="image"/>
                        </button>
                    </div>

                    <div>
                        SOBRE NÓS
                        <br/>
                        <a href="../Sobre/sobre.html"><button className="botao">
                            <img src={sobre} className="image"/>
                        </button></a>
                    </div>
                </div>
            </div>
        </section>    
    )
}

export default EspacoInterativo