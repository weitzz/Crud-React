import React, { Component } from 'react'
import {Nav,NavLinks,NavbarContainer,NavMenu,NavItem} from './navbarElements'

export default class navbar extends Component {
  render() {
    return (
     
      <Nav >
        <NavbarContainer>
          <NavLinks to="/">Todo List</NavLinks>
        <NavMenu >
          <NavItem >
          <NavLinks to="/">Exercícios</NavLinks>
          </NavItem>
          <NavItem >
          <NavLinks to="/create" >Adicionar exercícios</NavLinks>
          </NavItem>
          <NavItem >
          <NavLinks to="/user">Adicionar Usuário</NavLinks>
          </NavItem>
        </NavMenu>
        </NavbarContainer>
      </Nav>
     
    )
  }
}
