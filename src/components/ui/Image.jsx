import React from 'react';
import styled from 'styled-components';

const SetImages = styled.img`
  ${({ width, height }) => `width: ${width}; height: ${height};`}
  ${( borderRadius ) => `border-radius: ${borderRadius}`}
`

function Image({ width, height, borderRadius, src, alt }) {
  return (
    <SetImages
      width={width}
      height={height}
      borderRadius={borderRadius}
      src={src}
      alt={alt}
    />
  )
}

export default Image