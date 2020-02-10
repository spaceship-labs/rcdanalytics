import React from "react"
import { Header, Row, Hamburguer, Logo } from "./index.styled"
import LogoImg from "../../theme/images/rcd-analytics-white-small.png"
import DropdownComponent from "../dropdown"

const HeaderComponent = ({ sidebarToggle, handleToggleSidebar }) => <Header>
    <Row>
        <Hamburguer open={sidebarToggle} onClick={handleToggleSidebar}>
            <span className="lineTop"></span>
            <span className="lineMiddle"></span>
            <span className="lineBottom"></span>
        </Hamburguer>
        <Logo><img src={LogoImg} /></Logo>
    </Row>
    <Row><DropdownComponent /></Row>
</Header>

export default HeaderComponent