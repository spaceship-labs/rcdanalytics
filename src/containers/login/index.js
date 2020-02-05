import React, { Fragment } from "react"
import { LoginWrapper, Rows, Row, LoginData } from "./index.styled"
import { Container, ButtonBlue } from "../../theme/layout.styled"
import Logo from "../../theme/images/rcd-analytics-big.png"
import Ilustracion from "../../theme/images/ilustracion.png"

import LoginHeader from "../../components/loginheader"

const LoginContainer = () => <LoginWrapper>
    <LoginHeader />
    <Container>
        <Rows verticalAlign id="LoginContainer" className='login_container'>
            <Row className="WhiteSection">
                <LoginData>
                    <p><img alt='RCD Analytics' src={Logo} /></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <p><ButtonBlue to="/home">ACCEDER</ButtonBlue></p>
                </LoginData>
            </Row>
            <Row>
                <img alt='RCD Analytics' src={Ilustracion} />
            </Row>
        </Rows>
    </Container>
</LoginWrapper>

export default LoginContainer