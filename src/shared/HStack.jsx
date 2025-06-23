import styled from 'styled-components';
import Box from './Box';

const StyledHStack = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.$gap || '0px'};
  padding: ${(props) => props.$padding || '0px'};
  ${(props) => props.$alignItems && `align-items: ${props.$alignItems};`}
  ${(props) => props.$justifyContent && `justify-content: ${props.$justifyContent};`}
`;

export default function HStack({ children, ...props }) {
  return <StyledHStack {...props}>{children}</StyledHStack>;
}