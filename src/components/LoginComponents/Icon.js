import styled from "styled-components";

export default function Icon({ color, children }) {
  return <StyledIcon background={color}>{children}</StyledIcon>;
}

const StyledIcon = styled.div`
  height: 3rem;
  width: 3rem;
  background: ${(props) => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  color: white;
  cursor: pointer;
  svg {
    width: 1.4rem;
    height: 1.4rem;
  }
`;
