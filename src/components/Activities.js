import React from 'react';
import { SectionTitle, ActivitiesContainer, ActivityGrid, Activity, ActivityContainer, ActivityContainer2, ActivityYellow, ActivityList, PhraseBleu, PhraseJaune } from './StyledComponents';

const Activities = () => {
  return (
    <ActivitiesContainer>
      <SectionTitle>Activities</SectionTitle>
      <ActivityGrid>
        <Activity>
          <ActivityContainer>
            <ActivityList>
              <PhraseBleu>Prepare a first version of the UI Design & assets</PhraseBleu>
              <PhraseBleu>Build an interactive prototype on Figma simulating the key features</PhraseBleu>
            </ActivityList>
          </ActivityContainer>

          <ActivityContainer2>
            <ActivityList>
              <PhraseBleu>Observe and note the strengths and weaknesses of the prototype</PhraseBleu>
              <PhraseBleu>Validate or fix initial hypotheses</PhraseBleu>
            </ActivityList>
          </ActivityContainer2>
        </Activity>

        <ActivityYellow>
          <ActivityList>
            <PhraseJaune>Testing feedback report</PhraseJaune>
            <PhraseJaune>Suggest missing elements for future roadmap & strategy</PhraseJaune>
            <PhraseJaune>MVP Development proposal and estimation</PhraseJaune>
          </ActivityList>
        </ActivityYellow>
      </ActivityGrid>
    </ActivitiesContainer>
  );
};

export default Activities;


