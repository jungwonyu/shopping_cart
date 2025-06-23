import styled from 'styled-components';
import Box from './Box';

const StyledVStack = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap || '0px'};
  padding: ${(props) => props.$padding || '0px'};
  ${(props) => props.$alignItems && `align-items: ${props.$alignItems};`}
  ${(props) => props.$justifyContent && `justify-content: ${props.$justifyContent};`}
`;

export default function VStack({ children, ...props }) {
  return <StyledVStack {...props}>{children}</StyledVStack>;
}