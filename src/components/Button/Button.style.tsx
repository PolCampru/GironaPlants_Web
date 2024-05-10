import styled from "styled-components";

const ButtonWrapper = styled.button<{
  onClick: Function;
  disabled: boolean;
  $variant?: "primary" | "secondary";
  theme: any;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 12px 24px;
  width: fit-content;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 14px;
  font-family: ${(props) => props.theme.font.InterMedium};
  background-color: ${(props) =>
    props.$variant === "primary" ? props.theme.color.gpgreen : ""};
  color: white;

  span {
    margin: 0px;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.color.transparent};
    svg {
      background-color: ${(props) => props.theme.color.transparent};
    }
    &:first-of-type {
      margin-right: 6px;
    }
    &:last-of-type {
      margin-left: 6px;
    }
  }
`;

const LinkButtonWrapper = styled.a<{
  theme: any;
  $isSelected: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: fit-content;
  cursor: pointer;
  transition: 0.3s;
  font-size: 16px;
  font-family: ${(props) => props.theme.font.InterMedium};
  color: ${(props) => props.$isSelected && "white"};
  background-color: ${(props) =>
    props.$isSelected
      ? props.theme.color.gpgreen
      : props.theme.color.transparent};
`;

export { ButtonWrapper, LinkButtonWrapper };
