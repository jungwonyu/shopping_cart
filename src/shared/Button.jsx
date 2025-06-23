import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: none;
  color: ${(props) => props.$color || 'gray'};
  background: ${(props) => props.$background || 'transparent'};
  cursor: pointer;
`;

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;