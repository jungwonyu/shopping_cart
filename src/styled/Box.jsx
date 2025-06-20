import styled from 'styled-components';
import { space, color, width, minWidth, maxWidth, height, minHeight, maxHeight, flex, order, alignSelf, borders, borderColor, borderRadius, overflow, position, display, boxShadow } from 'styled-system';

const Box = styled.div`
  ${space}
  ${color}
  ${width}
  ${maxWidth}
  ${minWidth}
  ${height}
  ${minHeight}
  ${maxHeight}
  ${flex}
  ${order}
  ${alignSelf}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${overflow}
  ${position}
  ${display}
  ${boxShadow}
  box-sizing: border-box;

  /* ${(props) => props.gap &&
    `
      & > * { margin: ${props.gap / 2}px; }
    `} */
`;

export default Box;