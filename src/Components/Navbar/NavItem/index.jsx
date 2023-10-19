import styled from "styled-components";

export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  list-style-type: none;
  color: #283b40;
  font-size: 1rem;
  letter-spacing: 2.4px;
  font-weight: 400;
  line-height: 4rem;
  text-transform: uppercase;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NavItemContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
