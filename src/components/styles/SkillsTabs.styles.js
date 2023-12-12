import { TabPanel } from "@mui/lab";
import { Tab, styled } from "@mui/material";

export const TabStyled = styled(Tab)`
        color: white;
        text-transform: none;
        font-family: Lato;
        font-size: 2rem;
        &.Mui-selected {
         color: white;
        }
`

export const TabPanelStyled = styled(TabPanel)`
    /* display: flex; */
    /* flex-direction: row;
    justify-content: center; */
    /* margin-left: auto;
    margin-right: auto; */
`
