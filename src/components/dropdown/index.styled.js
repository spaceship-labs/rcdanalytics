import styled from "styled-components"

const DropdownWrap = styled.div`
    position: relative;
`

const DropdownAction = styled.button`
    background: transparent;
    border: 0 none;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    img{
        margin-right: 10px;
    }
`

const DropdownScreen = styled.div`
    position: absolute;
    top: 100%;
    top: calc(100% + 40px);
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 3px 3px 0 rgba(0, 0, 0, 0.08);
    width: 100%;
    &:before{
        content: '';
        position: absolute;
        top: -6px;
        right: 40px;
        width: 10px;
        height: 10px;
        background-color: #fff;
        transform: rotate(45deg);
    }
    ul{
        margin: 0;
        padding: 10px 0;
        text-align: center;
        list-style: none;
        a{
            font-size: 15px;
            font-weight: 500;
            display: block;
            padding: 10px;
            color: #929292;
            &.logout{
                border-top: 1px solid #dddddd;
                color: #2f7cef;
            }
        }
    }
`

export {
    DropdownWrap,
    DropdownAction,
    DropdownScreen
}