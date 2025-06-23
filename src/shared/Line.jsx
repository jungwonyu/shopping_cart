import styled from 'styled-components';

const StyledLine = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.$color || 'var(--color-gray)'};
  border: none;
  margin: ${(props) => props.$margin || '0'};
`;

export default function Line({ src, alt, ...props }) {
  return <StyledLine {...props} />;
}