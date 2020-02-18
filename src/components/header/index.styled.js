import styled from "styled-components"
import { Row as RowLayout } from "../../theme/layout.styled"

const Header = styled.header`
  background-image: linear-gradient(to left, #36d7fb, #2f7cef, #184099);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 12px 35px;
  color: #fff;
  @media only screen and (max-width: 510px){
    padding: 15px 20px;
  }
`

const Row = styled(RowLayout)`
  flex: 0 1 auto;
`

const Hamburguer = styled.button`
  position: relative;
  float: left;
  width: 22px;
  height: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 3px 30px 0 0;
  cursor: pointer;
  background: transparent;
  border: 0 none;
  padding: 0;
  outline: 0 none!important;
  span {
    display: block;
    border: 1px solid #184099;
    width: 22px;
  }
  @media only screen and (max-width: 510px){
    margin-right: 10px;
  }
`

const Logo = styled.a`
  display: inline-block;
`

export {
    Hamburguer,
    Logo,
    Header,
    Row
}