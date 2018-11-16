import React from 'react';
import styled from 'styled-components';
//
const H4 = styled.h4`
  font-family: ${props => props.theme.type.h4.fontFamily};
  font-weight: ${props => props.theme.type.h4.fontWeight};
  font-size: ${props => props.theme.type.h4.fontSize};
  line-height: ${props => props.theme.type.h4.lineHeight};
`;

export default props => <H4 {...props}>{props.children}</H4>;
