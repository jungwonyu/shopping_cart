import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 6px;
  font-size: 1rem;
  line-height: 1.5;
  border: none;
  color: ${(props) => props.$color || 'gray'};
  background: ${(props) => props.$background || 'transparent'};
  border-radius: ${(props) => props.$borderRadius || '4px'};
  cursor: pointer;

  &:hover {
    ${(props) => props.$hover && `filter: brightness(1.2);`}
  }
`;

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;