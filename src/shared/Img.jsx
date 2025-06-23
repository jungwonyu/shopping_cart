import styled from 'styled-components';

const Img = styled.img`
  width: ${(props) => props.$width || '100%'};
  height: ${(props) => props.$height || 'auto'};
  object-fit: ${(props) => props.$objectFit || 'cover'};
  border-radius: ${(props) => props.$borderRadius || '0px'};
`;

export default function Image({ src, alt, ...props }) {
  return <Img src={src} alt={alt} {...props} />;
}