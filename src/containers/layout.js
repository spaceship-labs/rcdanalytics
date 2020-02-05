import React, { Fragment } from "react"
import HeaderComponent from "../components/header"
import SidebarComponent from "../components/sidebar"
import { ContentWrapper, Content } from "../theme/layout.styled"

const Layout = ({ children }) => <Fragment>
    <HeaderComponent />
    <ContentWrapper>
        <SidebarComponent />
        <Content>
            <section>{children}</section>
        </Content>
    </ContentWrapper>
</Fragment>

export default Layout