import styled from "styled-components";

export const FancyButton = styled.button`
  padding: 10px 18px;
  background: ${(props) => (props.bg ? props.bg : "#4b7bec")};
  border: none;
  color: white;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    opacity: 0.85;
    transform: translateY(-2px);
  }
`;

export const CardHover = styled.div`
  transition: 0.3s;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.15);
  }
`;
