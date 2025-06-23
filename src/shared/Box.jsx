import styled from 'styled-components';

const Box = styled.div`
  box-sizing: border-box;
  width: ${(props) => props.$width || '100%'};
  ${(props) => props.$maxWidth && `max-width: ${props.$maxWidth};`}
  ${(props) => props.$minWidth && `min-width: ${props.$minWidth};`}
  height: ${(props) => props.$height || '100%'};
  ${(props) => props.$maxHeight && `max-height: ${props.$maxHeight};`}
  ${(props) => props.$minHeight && `min-height: ${props.$minHeight};`}
  ${(props) => props.$color && `color: ${props.$color};`}
  ${(props) => props.$backgroundColor && `background-color: ${props.$backgroundColor};`}
  ${(props) => props.$display && `display: ${props.$display};`}
  ${(props) => props.$position && `position: ${props.$position};`}
  ${(props) => props.$overflow && `overflow: ${props.$overflow};`}
  ${(props) => props.$overflowY && `overflow-y: ${props.$overflowY};`}
  ${(props) => props.$overflowX && `overflow-x: ${props.$overflowX};`}
  ${(props) => props.$boxShadow && `box-shadow: ${props.$boxShadow};`}
  ${(props) => props.$border && `border: ${props.$border};`}
  ${(props) => props.$borderRadius && `border-radius: ${props.$borderRadius};`}
  ${(props) => props.$borderColor && `border-color: ${props.$borderColor};`}
  ${(props) => props.$flex && `flex: ${props.$flex};`}
  ${(props) => props.$order && `order: ${props.$order};`}
  ${(props) => props.$gap && `gap: ${props.$gap};`}
  ${(props) => props.$position && `position: ${props.$position};`}
  ${(props) => props.$top && `top: ${props.$top};`}
  ${(props) => props.$right && `right: ${props.$right};`}
  ${(props) => props.$bottom && `bottom: ${props.$bottom};`}
  ${(props) => props.$left && `left: ${props.$left};`}
`;

export default Box;