import styled from '@emotion/styled';

export const FormStyle = styled.form`
  width: 400px;
  border: 2px solid yellow;
  padding: 20px;
  background-color: transparent;
`;

export const Label = styled.label`
  display: block;
  font-size: 20px;
  color: yellow;
  font-weight: 500;
`;

export const Input = styled.input`
  display: block;
  font-size: 20px;
  margin-bottom: 10px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid yellow;
  outline: none;
  color: yellow;
  caret-color: yellow;
`;

export const Btn = styled.button`
  display: inline-block;
  font-size: 20px;
  background-color: transparent;
  color: yellow;
  border: 2px solid yellow;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 7px;
  margin: 0 auto;
  text-align: center;
  outline: none;
  &:hover {
    border: 2px solid blue;
    color: blue;
  }
`;
