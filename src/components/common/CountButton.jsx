import styled from 'styled-components';
import Typography from '../../shared/Typography';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: none;
  background-color: var(--color-accent-green);
  color: var(--color-white);
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }
`;

export default function CountButton({ onClick, kind }) {
  return (
    <StyledButton onClick={onClick}>
      <Typography $fontSize="14px" $fontWeight="bold" $color="var(--color-white)">{kind === 'plus' ? '+' : '-'}</Typography>
    </StyledButton>
  );
}