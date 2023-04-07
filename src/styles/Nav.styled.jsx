import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
  padding: 1rem;
 
`;

export const NavLink = styled(Link)`
  color: #444;
  text-decoration: none;
  margin-left: 1rem;
  margin-right: 30px;

  &:hover {
    color: #000;
  }
`;