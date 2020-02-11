import styled from "styled-components"
import { Container, Rows as RowsTheme, Row as RowTheme } from "../../theme/layout.styled"

const Header = styled(Container)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 30px 0;
    max-width: 1300px;
    @media only screen and (max-width: 680px){
        display: none;
    }
`

const Rows = styled(RowsTheme)`
    justify-content: space-between;
    align-items: center;
`

const Row = styled(RowTheme)`
    flex: 0 1 auto;
`

const Menu = styled.ul`
    li{
        display: inline-block;
    }
    a{
        color: #fff;
        text-decoration: none;
        padding: 10px 30px;
        font-size: 16px;
        font-weight: 500;
        position: relative;
        &:after{
            content: '';
            position: absolute; 
            bottom: 5px;
            right: 0;
            left: 0;
            margin: 0 auto;
            width: 0px;
            height: 3px;
            transition: all .3s;
            background-color: #184099;
        }
        &:hover:after{
            width: 50%;
        }
    }
`

export {
    Header,
    Rows,
    Row,
    Menu,
}