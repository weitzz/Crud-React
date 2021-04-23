import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const Nav = styled.nav `
  background: #000;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
 
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height:88px;
  width:100%;
  padding:0 24px;
  max-width:1180px;
  z-index: 1;
`;

export const NavMenu = styled.ul`
    display:flex;
    align-items:center;
    list-style:none;
    text-align:center;
    margin-right:-22px;

`; 

export const NavItem = styled.li`
  height:80px;
`;

export const NavLinks = styled(LinkR)`
  color:#fff;
  display:flex;
  align-items:center;
  text-decoration:none;
  padding:0 1rem;
  height: 100%;
  cursor: pointer;
  transition:0.5s;
&:hover{
  color: #01bf71;
}
`;