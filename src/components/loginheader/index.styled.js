import styled from "styled-components"
import { Container, Rows as RowsTheme, Row as RowTheme } from "../../theme/layout.styled"

const Header = styled(Container)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding: 20px 0;
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
        padding: 20px 30px;
        font-size: 16px;
        font-weight: 500;
    }
`

export {
    Header,
    Rows,
    Row,
    Menu,
}