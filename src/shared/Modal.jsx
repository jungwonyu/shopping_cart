import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  
  & > div {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    width: ${(props) => props.$width || '400px'};
    max-height: ${(props) => props.$maxHeight || '80%'};
    overflow-y: auto;
    position: relative;
  }
`;

export default function Modal({ ...props }) {
  return (
    <StyledModal>
      <div {...props}>
        {props.children}
      </div>
  </StyledModal>
  )
}