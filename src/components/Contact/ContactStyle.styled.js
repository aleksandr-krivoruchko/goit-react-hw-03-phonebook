import styled from '@emotion/styled';

export const ContactStyle = styled.li`
  display: flex;
  color: yellow;
  font-size: 20px;
  margin-top: 10px;
  text-transform: uppercase;
`;

export const ButtonStyle = styled.button`
  margin-right: 20px;
  color: yellow;
  background-color: transparent;
  border-color: yellow;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  &:hover {
    border: 2px solid blue;
    color: blue;
  }
`;
