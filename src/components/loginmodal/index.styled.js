import styled from "styled-components"
import { Link } from "react-router-dom";

const ModalWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: ${({ show }) => show === true ? 1 : 0};
    visibility: ${({ show }) => show === true ? 'visible' : 'hidden'};
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalContent = styled.div`
    flex: 0 1 300px;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0px 3px 3px 0 rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    padding: 35px;
    width: 300px;
    position: relative;
    z-index: 1;
`

const Overlay = styled.div`
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.6);
    left: 0;
    top: 0;
`

const Form = styled.form`
    h3{
        text-align: center;
        margin: 0;
        margin-bottom: 22px;
        color: #1c48a7;
        font-size: 16px;
        text-transform: uppercase;
        font-weight: normal;
    }
    input[type='password'],
    input[type='text']{
        width: 100%;
        box-sizing: border-box;
        border: 0 none;
        background-color: #ebebeb;
        border-radius: 10px;
        padding: 14px 18px;
    }
    p{
        margin: 20px 0;
    }
`

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
    display: block;
    width: 100%;
    box-sizing: border-box;
    &:hover{
        background: linear-gradient(to right, rgba(54,215,251,1) 0%, rgba(47,124,239,1) 100%);;
    }
`

const FormOption = styled.div`
    color: #929292;
    font-size: 12px;
    a{
        color: #929292;
        font-size: 12px;
        text-decoration: none;
    }
    input{
        vertical-align: middle;
        margin: 0;
        margin-right: 5px;
    }
`

export {
    ModalWrapper,
    ModalContent,
    Overlay,
    Form,
    ButtonBlue,
    FormOption
}