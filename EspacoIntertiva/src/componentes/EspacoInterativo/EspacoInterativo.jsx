import FaixaTrilha from "./FaixaTrilha"

function EspacoInterativo(){
    return(
        <section>
            <FaixaTrilha/>

            <div id="interativo">
                <div className="cima">
                    <div>
                        PACIENTE
                        <br/>
                        <a href="../Paciente/paciente.html"><button className="botao">
                            <img src="./imagens/paciente.jpg" className="image"/>
                        </button></a>
                    </div>
    
                    <div>
                        ACOMPANHANTE
                        <br/>
                        <button className="botao">
                            <img src="./imagens/acompanhante.jpg" className="image"/>
                        </button>
                    </div>
                </div>
                <div className="baixo">
                    <div>
                        VOLUNTÁRIO
                        <br/>
                        <button className="botao">
                            <img src="./imagens/voluntario.jpg" className="image"/>
                        </button>
                    </div>

                    <div>
                        SOBRE NÓS
                        <br/>
                        <a href="../Sobre/sobre.html"><button className="botao">
                            <img src="./imagens/sobre.jpg" className="image"/>
                        </button></a>
                    </div>
                </div>
            </div>
        </section>    
    )
}

export default EspacoInterativo