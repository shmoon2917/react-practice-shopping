import React, { Profiler } from 'react';

import { HomePageContainer } from './homepage.styles';
import Directory from '../../components/directory/directory.component';

const HomePage = () => {
  return (
    <HomePageContainer>
      <Profiler
        id='Directory'
        onRender={(id, phase, actualDuration) => {
          console.log({
            id,
            phase,
            actualDuration,
          });
        }}
      >
        <Directory />
      </Profiler>
    </HomePageContainer>
  );
};

export default HomePage;
