import { NavItem, Nav, NavItemContainer } from "./NavItem";
import { Logo } from "../Logo";

export const Navbar = () => {
  return (
    <Nav>
      <Logo />
      <NavItemContainer>
        <NavItem>Benefícios</NavItem>
        <NavItem>Como funciona</NavItem>
        <NavItem>Exemplos</NavItem>
      </NavItemContainer>
    </Nav>
  );
};
