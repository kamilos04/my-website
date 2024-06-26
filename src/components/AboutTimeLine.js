import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { TimelineContentStyled, TimelineDivStyle, TimelineOppositeContentStyled, TimelineStyled } from './styles/AboutTimeLine.styles';
import { LanguageContext } from '../App';

export default function AboutMyTimeLine() {
  const { language, setLanguage } = React.useContext(LanguageContext)
  const TimelineAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1, transition: { delay: 1, duration: 1, type: "spring", ease: "easeOut" } },
  }

  return (
    <TimelineDivStyle
      variants={TimelineAnimation}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true
      }}
    >
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
            {language === "en" ? <>Silesian University of Technology - Computer Science / faculty of Applied Mathematics</> : <>Politechnika Śląska - Informatyka / wydział Matematyki Stosowanej</>}
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
    </TimelineDivStyle>
  );
}