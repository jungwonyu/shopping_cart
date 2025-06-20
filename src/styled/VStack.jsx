import styled, { css } from 'styled-components';

const StyledDiv = styled.div`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || '0px'};
  ${(props) => props.acenter && css`align-items: center;`}
  ${(props) => props.jcenter && css`justify-content: center;`}
`

function VStack({ children, ...props }) {
  return <StyledDiv {...props}>{children}</StyledDiv>
}

export default VStack;