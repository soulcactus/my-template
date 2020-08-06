// https://velog.io/@ki_blank/React-Router-1.-8njzuummrs
import React from 'react';
import styled from 'styled-components';

function App() {
    return <StyledDiv>테스트</StyledDiv>;
}

const StyledDiv = styled.div`
    color: ${(props) => props.theme.color};
`;

export default App;
