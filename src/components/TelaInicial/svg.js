function AnimacaoSvg() {
    return ( 
        <svg width="100%" height="100%" viewBox="30 -50 600 500">
            <path id="path">
                    <animate attributeName="d" from="m0,110 h0" to="m0,110 h1100" dur="6.8s" begin="0s" repeatCount="indefinite"/>
                </path>
                <text font-size="26" font-family="Montserrat" fill='hsla(0, 0%, 100%, 1)'>
                    <textPath href="#path">Seja bem-vindo(a) ao App MyWallet</textPath>
                </text>
        </svg> 
    );
}

export default AnimacaoSvg;