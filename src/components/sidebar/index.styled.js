import styled from "styled-components"

const SidebarWrapper = styled.div`
    flex: 0 1 auto;
    background-color: #f8f8f8;
`

const SidebarScreen = styled.div`
    position: relative;
`

const Sidebar = styled.div`
    width: 300px;
    position: relative;
    width: ${({ open }) => open === true ? '300px' : '0' };
    overflow: hidden;
    transition: width .3s;
`
const Tooltip = styled.div`
    position: absolute;
    left: 100%;
    margin-left: -15px;
    background-color: #fff;
    box-shadow: 0px 3px 3px 0 rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    color: #929292;
    width: 200px;
    padding: 15px;
    opacity: ${({ show }) => show === true ? 1 : 0};
    visibility: ${({ show }) => show === true ? 'visible' : 'hidden' };
    top: ${({ top }) => top }px;
    transition: all .3s;
    h5{
        font-size: 15px;
        margin: 0 0 10px;
        text-align: center;
    }
    p{
        font-size: 12px;
        margin: 0;
        line-height: 1.35;
    }
`

export {
    SidebarWrapper,
    SidebarScreen,
    Sidebar,
    Tooltip
}