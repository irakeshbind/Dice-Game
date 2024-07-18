import React from 'react'
import styled from 'styled-components'
const TotalScore = () => {
  return (
    <ScoreContainer>
        <h1>o</h1>
        <p>Total Score</p>
    </ScoreContainer>
  );
}

export default TotalScore;

const ScoreContainer = styled.div`
text-align: center;
max-width: 200px;
    h1{
        font-size: 100px;
        line-height: 10px;

    }
    p{
        font-size: 24px;
    }
`;