import styled from 'styled-components';
import Box from './Box';

const Card = styled(Box)`
  background: var(--color-white);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  overflow: hidden;
`;

export default Card;