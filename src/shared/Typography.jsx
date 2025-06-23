import styled from 'styled-components';

const Typography = styled.span`
  line-height: ${(props) => props.$lineHeight || '1.5'};
  text-align: ${textAlign => textAlign || 'left'};
  font-size: ${(props) => {
    switch (props.kind) {
      case 'title':
        return '20px';
      case 'subTitle':
        return '16px';
      default:
        return props.$fontSize || '14px';
    }
  }};
  font-weight: ${(props) => {
    switch (props.kind) {
      case 'title':
      case 'subTitle':
        return 'bold';
      default:
        return props.$fontWeight || 'normal';
    }
  }};
  color: ${(props) => {
    switch (props.kind) {
      case 'title':
      case 'subTitle':
        return 'var(--color-starbucks-green)';
      case 'desc':
        return 'var(--color-dark-gray)';
      case 'price':
        return 'var(--color-goldenrod)';
      default:
        return props.$color || 'black';
    }
  }};
`;

export default Typography;