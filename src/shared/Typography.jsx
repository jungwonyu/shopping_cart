import styled from 'styled-components';

const Typography = styled.span`
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
  line-height: ${(props) => props.$lineHeight || '1.5'};
  text-align: left;
  color: ${(props) => {
    switch (props.kind) {
      case 'title':
      case 'subTitle':
        return 'var(--color-starbucks-green)';
      case 'desc':
        return 'var(--color-dark-gray)';
      default:
        return props.$color || 'black';
    }
  }};
`;

export default Typography;