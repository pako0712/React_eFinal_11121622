import styled from "styled-components";

const LayoutWrapper = styled.div`
  padding: 30px;
  max-width: 1400px;
  margin: auto;
`;

export default function Layout({ children }) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}
