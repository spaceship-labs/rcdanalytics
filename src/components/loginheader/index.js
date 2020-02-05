import React from "react"
import { Link } from "react-router-dom"
import { Header, Rows, Row, Menu } from "./index.styled"
import Logo from "../../theme/images/rcd-analytics-inline.png"

const LoginHeader = () => <Header>
    <Rows>
        <Row>
            <img alt='RCD Analytics' src={Logo} />
        </Row>
        <Row>
            <Menu>
                <li><Link to="/home">Item 1</Link></li>
                <li><Link to="/home">Item 2</Link></li>
                <li><Link to="/home">Item 3</Link></li>
            </Menu>
        </Row>
    </Rows>
</Header>

export default LoginHeader