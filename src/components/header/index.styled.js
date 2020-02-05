import styled from "styled-components"
import { Row as RowLayout } from "../../theme/layout.styled"

const Header = styled.header`
    background-image: linear-gradient(to right, #36d7fb, #2f7cef, #184099);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 25px 5%;
    color: #fff;
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
  span {
    display: block;
    border: 1px solid #184099;
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