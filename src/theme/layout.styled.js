import styled from "styled-components"

import { Link } from "react-router-dom";

const ContentWrapper = styled.div`
    display: flex;
    flex: 1 0 auto;
`

const Content = styled.div`
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    background-color: #ebebeb;
    padding: 40px 55px;
    section{
        flex: 1 0 auto;
        background-color: #fafafa;
        padding: 30px;
        border-radius: 20px;
    }
`

const Container = styled.div`
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;
`

const Rows = styled.div`
    display: flex;
    flex-direction: row;
    ${ ({ verticalAlign }) => `align-items:${verticalAlign ? 'center':'stat'};` }
`

const Row = styled.div``

const ButtonBlue = styled(Link)`
    border: 0 none;
    background: linear-gradient(to right, rgba(54,215,251,1) 0%, rgba(47,124,239,1) 50%, rgba(24,65,153,1) 100%);
    color: #fff;
    display: inline-block;
    padding: 10px 50px;
    border-radius: 20px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
`

export {
    ContentWrapper,
    Content,
    Container,
    Rows,
    Row,
    ButtonBlue,
}