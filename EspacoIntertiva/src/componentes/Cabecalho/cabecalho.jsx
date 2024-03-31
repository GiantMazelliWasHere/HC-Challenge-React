// import './componentes/js/global.js'

function Cabecalho(){
    return(
        <section>
            <div className="barraTop">
            <div className="info">
                <img src="https://icr.usp.br/wp-content/uploads/2017/11/location_ico.png"/>&nbsp;
                AV. DR. ENÉAS CARVALHO DE AGUIAR, 647, SÃO PAULO - SP
                &nbsp;&nbsp;&nbsp;&nbsp;
                <img src="https://icr.usp.br/wp-content/uploads/2017/11/phone_ico.png"/>&nbsp;
                (11) 2661-8500
            </div>

            <div className="pesquisa">
                <input type="text" id="inputPesquisa" className="input" onBlur="esconderBarraDePesquisa()"/> <button className ="button" onClick="apareceBarraDePesquisa()">PESQUISAR</button>
            </div>
        </div>
        
            <br/>

            <div className="logos">
                <img className="logo" src="https://icr.usp.br/wp-content/uploads/2022/04/logo-1.png"/>
                <img className="logo2" src="https://icr.usp.br/wp-content/uploads/2017/11/logos_icr_parceiros.png"/>
            </div>
        </section>
    )
}

export default Cabecalho