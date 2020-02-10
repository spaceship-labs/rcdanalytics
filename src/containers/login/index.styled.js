import styled from "styled-components"
import { Rows as RowsTheme, Row as RowTheme } from "../../theme/layout.styled"

import BG from "../../theme/images/white.png"

const LoginWrapper = styled.div`
    background: #2f7cef;
    background:url(${BG}), linear-gradient(135deg, rgba(54,215,251,1) 0%, rgba(47,124,239,1) 50%, rgba(24,65,153,1) 100%);
    background-size: 50% 100%, 100%;
    background-repeat: no-repeat, no-repeat;
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width: 680px){
        background-size: 95% 100%, 100%;
        padding: 80px 20px;
    }
`

const Rows = styled(RowsTheme)`
    flex: 1 0 auto;
    align-items: start;
    @media only screen and (max-width: 680px){
        flex-direction: column;
    }
`

const Row = styled(RowTheme)`
    flex: 0 1 50%;
    max-width: 50%;
    @media only screen and (max-width: 680px){
        max-width: 100%;
    }
`

const LoginData = styled.div`
    p{
        max-width: 400px;
        color: #424242;
        line-height: 1.5;
        margin: 30px 0;
    }
    @media only screen and (max-width: 900px){
        padding-right: 30px;
    }
`

export {
    LoginWrapper,
    Rows,
    Row,
    LoginData,
}