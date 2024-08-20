import styled from "@emotion/styled";

export const StyledButton = styled.button`
  background-color: #0070f3;
  color: ${(props) => props.color || "#fff"};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;
