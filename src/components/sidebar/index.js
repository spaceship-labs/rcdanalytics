import React, { useState } from "react"
import MenuComponent from "../menu"
import { SidebarWrapper, SidebarScreen, Sidebar, Tooltip } from "./index.styled"

const SidebarComponent = ({ sidebarToggle }) => {
    const [hoveritem, setHoveritem] = useState({
        title: 'the title',
        description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
        show: false,
        top: 0
    })
    const handleOnMouseOver = (item, ref) => {
        if( !item.description ) return 
        const newItem = { ...item, show: true, top: ref.current.offsetTop }
        setHoveritem(newItem)
    }
    const handleOnMouseLeave = () => {
        const newItem = { ...hoveritem, show: false }
        setHoveritem(newItem)
    }
    return (<SidebarWrapper>
        <SidebarScreen >
            <Sidebar open={sidebarToggle}>
                <MenuComponent
                    handleOnMouseOver={handleOnMouseOver}
                    handleOnMouseLeave={handleOnMouseLeave}
                />
            </Sidebar>
            <Tooltip show={hoveritem.show} top={hoveritem.top - 10}>
                <h5>{hoveritem.title}</h5>
                <p>{hoveritem.description}</p>
            </Tooltip>
        </SidebarScreen>
    </SidebarWrapper >)
}

export default SidebarComponent