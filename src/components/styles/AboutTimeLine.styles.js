import { styled } from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
export const TimelineContentStyled = styled(TimelineContent)`
        color: white;
        font-size: 1.2rem;
        margin-bottom: 3rem;
        width: 20rem;
        font-family: 'Lato', sans-serif;
        font-weight: 800;
    `
export const TimelineOppositeContentStyled = styled(TimelineOppositeContent)`
    font-family: 'Lato', sans-serif;
    font-size: 1.1rem;
`

export const TimelineStyled = styled(Timeline)`
    padding: 0;
    /* margin-right: 12rem; */
`