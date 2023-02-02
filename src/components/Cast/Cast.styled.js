import styled from 'styled-components';

export const Img = styled.img`
  display: block;
  margin: auto;
  width: 100%;
`;
export const Title = styled.h4`
  font-size: 18px;
  display: inline-block;
  margin: 8px auto;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  color: #000000;
  list-style: none;
  text-align: center;
  margin-bottom: 16px;

  width: 100px;
  &:last-child {
    margin-bottom: 0;
  }
`;
