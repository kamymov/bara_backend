import styled from "styled-components";
export default function Input({ type, placeholder }) {
  return <StyledInput type={type} placeholder={placeholder} />;
}

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 5rem;
  padding: 1rem;
  margin: 1% 0;
  border: none;
  outline: none;
  color: #3c354e;
  font-family: "peydaNormal", sans-serif;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    font-family: "peydaNormal", sans-serif;
    letter-spacing: 0.05rem;
    color: #03217b;
    opacity: 60%;
    font-weight: 100;
    font-size: 1.3rem;
  }
`;
