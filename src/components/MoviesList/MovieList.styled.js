import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Item = styled.li`
  color: #ffffff;
`;

export const Link = styled(NavLink)`
  color: #000000;
  font-size: 18px;
  line-height: 1.3;
  text-decoration: none;
  &:hover,
  &focus {
    color: #ff0000;
  }
`;
