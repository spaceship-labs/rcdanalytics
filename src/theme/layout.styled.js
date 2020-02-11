import styled from "styled-components"

import { Link } from "react-router-dom";

const ContentWrapper = styled.div`
    display: flex;
    flex: 1 0 auto;
    overflow: hidden;
`

const Content = styled.div`
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    background-color: #ebebeb;
    padding: 40px 55px;
    section{
        min-width: 400px;
        flex: 1 0 auto;
        background-color: #fafafa;
        padding: 30px;
        border-radius: 20px;
        box-sizing: border-box;
        @media only screen and (max-width: 550px){
            min-width: 250px;
        }
    }
    @media only screen and (max-width: 550px){
        padding: 30px 20px;
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
    border: 2px solid #fff;
    transition: all .3s;
    &:hover{
        background: linear-gradient(to right, rgba(54,215,251,1) 0%, rgba(47,124,239,1) 100%);;
    }
`

export {
    ContentWrapper,
    Content,
    Container,
    Rows,
    Row,
    ButtonBlue,
}