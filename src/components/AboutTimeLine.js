import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { TimelineContentStyled, TimelineOppositeContentStyled, TimelineStyled } from './styles/AboutTimeLine.styles';
import { LanguageContext } from '../App';

export default function AboutMyTimeLine() {
  const { language, setLanguage } = React.useContext(LanguageContext)
  
  return (
    <TimelineStyled>
      <TimelineItem>
        <TimelineOppositeContentStyled>
        {language === "en" ? <>October 2023 - 2027</> : <>10.2023r. - 2027r.</>}
        </TimelineOppositeContentStyled>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContentStyled>
        {language === "en" ? <>Silesian University of Technology - Computer Science / AEI faculty</> : <>Politechnika Śląska - Informatyka / wydział AEI</>}
        </TimelineContentStyled>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContentStyled>
        {language === "en" ? <>2022 - 2023</> : <>2022r. - 2023r.</>}
        </TimelineOppositeContentStyled>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContentStyled>
        {language === "en" ? <>IV High School named after KEN in Bielsko-Biała</> : <>IV LO im. KEN w Bielsku-Białej</>}
        </TimelineContentStyled>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContentStyled>
        {language === "en" ? <>2019 - 2022</> : <>2019r. - 2022r.</>}
          
        </TimelineOppositeContentStyled>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContentStyled>
          {language === "en" ? <>VI High School named after Tadeusz Reytan in Warsaw</> : <>VI LO im. Tadeusza Reytana w Warszawie</>}
        </TimelineContentStyled>
      </TimelineItem>
    </TimelineStyled>
  );
}