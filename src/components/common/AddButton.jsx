import styled from 'styled-components';
import Typography from '../../shared/Typography';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background-color: var(--color-goldenrod);
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }
`;

export default function AddButton({ onClick }) {
  return (
    <StyledButton onClick={onClick}>
      <Typography $fontSize="14px" $fontWeight="bold" $color="var(--color-white)">+</Typography>
    </StyledButton>
  );
}