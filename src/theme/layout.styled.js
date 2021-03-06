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
    section{
        min-width: 400px;
        flex: 1 0 auto;
        background-color: #fff;
        padding: 30px;
        box-sizing: border-box;
        overflow: auto;
        max-width: 100%;
        @media only screen and (max-width: 550px){
            min-width: auto;
            padding: 15px;
        }
    }
  @media only screen and (max-width: 550px){
    flex:1;
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
    ${ ({ align }) => `justify-content:${align ? align : 'start'};` }
    ${ ({ verticalAlign }) => `align-items:${verticalAlign ? 'center':'start'};` }
`

const Row = styled.div``

const ButtonBlue = styled.button`
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
    cursor: pointer;
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