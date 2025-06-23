import styled from 'styled-components';
import Typography from '../../shared/Typography';

const StyledButton = styled.button`
  padding: 6px 12px;
  border-radius: 50%;
  border: none;
  background-color: var(--color-goldenrod);
  cursor: pointer;
`;

function AddButton({ onClick }) {
  return (
    <StyledButton onClick={onClick}>
      <Typography $fontSize="14px" $fontWeight="bold" $color="var(--color-white)">+</Typography>
    </StyledButton>
  );
}

export default AddButton;