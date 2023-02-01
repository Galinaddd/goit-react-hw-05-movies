import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 20px;
  box-shadow: 1px 4px 6px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 4px 6px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 4px 6px 0px rgba(0, 0, 0, 0.75);
`;
export const StyledLink = styled(NavLink)`
  padding: 8px 8px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: red;
  }
`;
