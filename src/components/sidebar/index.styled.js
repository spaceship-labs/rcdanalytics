import styled from "styled-components"

const SidebarWrapper = styled.div`
    flex: 0 1 auto;
    background-color: #f8f8f8;
`

const SidebarScreen = styled.div`
    width: ${({ open }) => open === true ? '300px' : '0' };
    overflow: hidden;
    transition: width .3s;
`

const Sidebar = styled.div`
    width: 300px;
`

export {
    SidebarWrapper,
    SidebarScreen,
    Sidebar
}