import styled from "styled-components"
import { Link } from "react-router-dom"

const Menu = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const MenuDropdown = styled.div`
    position: relative;
    width: 100%;
    transition: all .3s;
    height: ${({active, h}) => active === true ? `${h}px` : '0' };
    overflow: hidden;
`

const MenuItemSizes = {
    '1': `
        font-size: 16px;
        font-weight: 900;
    `,
    '2': `
        font-size: 16px;
        font-weight: 500;
        padding-left: 70px;
    `,
    '3': `
        font-size: 14px;
        font-weight: 500;
        padding-left: 110px;
        background-color: #e6e6e6;
    `,
}
const activeMenuItem = {
    '1': `
        border-left-color: #184099;
        color: #184099;
    `,
    '2': `
        color: #1d1d1d;
        background-color: #e6e6e6;
        span {
            color: #2f7cef;
        }
    `,
    '3': `
        color: #2f7cef;
        background-color: #d9d9d9;
    `,
}

const MenuItemRules = ({level,active}) => `
    display: block;
    width: 100%;
    padding: 15px 20px 15px 30px;
    color: #929292;
    border: 0 none;
    text-align: left;
    border-left: 5px solid transparent;
    border-bottom: 1px solid #ebebeb;
    text-decoration: none;
    cursor: pointer;
    font-weight: 900;
    ${ MenuItemSizes[level]}
    ${ active === true ? activeMenuItem[level] : ''}
    span{
        display: inline-block;
        margin-right: 8px;
    }
    .icon-arrow{
        float: right;
        font-size: 10px;
        padding: 5px 0;
        transform: rotate( ${ active === true ? '180deg' : '0' } );
    }
`

const MenuItemLink = styled(Link)`
    ${ props => MenuItemRules(props) }
`

const MenuItem = styled.button`
    ${ props => MenuItemRules(props) }
`

export {
    Menu,
    MenuDropdown,
    MenuItem,
    MenuItemLink
}