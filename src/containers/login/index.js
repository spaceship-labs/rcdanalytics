import React, { useState } from "react"
import { LoginWrapper, Rows, Row, LoginData } from "./index.styled"
import { Container, ButtonBlue } from "../../theme/layout.styled"
import Logo from "../../theme/images/rcd-analytics-big.png"
import Ilustracion from "../../theme/images/ilustracion.png"

import LoginHeader from "../../components/loginheader"
import LoginModalComponent from "../../components/loginmodal"

const LoginContainer = () => {
    const [modal, setModal] = useState(false)
    return (
        <LoginWrapper>
            <LoginHeader />
            <Container>
                <Rows verticalAlign id="LoginContainer" className='login_container'>
                    <Row className="WhiteSection">
                        <LoginData>
                            <p><img alt='RCD Analytics' src={Logo} /></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <p><ButtonBlue onClick={() => setModal(true)}>ACCEDER</ButtonBlue></p>
                        </LoginData>
                    </Row>
                    <Row>
                        <img alt='RCD Analytics' src={Ilustracion} />
                    </Row>
                </Rows>
            </Container>
            <LoginModalComponent show={modal} hideModal={() => setModal(false)} />
        </LoginWrapper>
    )
}

export default LoginContainer