import React from "react"
import MenuComponent from "../menu"
import { SidebarWrapper, SidebarScreen, Sidebar } from "./index.styled"

const SidebarComponent = ({ sidebarToggle }) => <SidebarWrapper>
    <SidebarScreen open={sidebarToggle}>
        <Sidebar>
            <MenuComponent />
        </Sidebar>
    </SidebarScreen>
</SidebarWrapper>

export default SidebarComponent