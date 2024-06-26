import { styled } from "styled-components";
import { device } from "../DeviceSize";
import { motion } from "framer-motion"

export const AboutContent = styled.div`
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-top: 7rem; */
    width: 100%;
    /* height: 100vh; */
    @media ${device.mobileS} {
        height: auto;
        margin-bottom: 15rem;
        margin-top: 14rem;
        font-size: 2rem;
    }
    @media ${device.laptop} {
        height: 100vh;
        font-size: 1.5rem;
        justify-content: center;
        padding-top: 4rem;
    }
`

export const AboutTitle = styled(motion.div)`
    font-size: 3rem; 
    margin-bottom: 5rem;
`

export const AboutTextAndTimeLine = styled.div`
    display: flex;
    flex-direction: row;
    /* margin-left: 12rem; */
    margin-left: 10rem;
    margin-right: 10rem;
    /* align-items: center; */
    @media ${device.mobileS} {
        margin-left: 3rem;
        margin-right: 0rem;  
    }
    @media ${device.laptop} {
        margin-left: 10rem;
        margin-right: 10rem;  
    }
`

export const AboutText = styled(motion.div)`
    
`

export const AboutTextSection = styled.div`
    margin-bottom: 1.5rem;
    font-weight: 400;
`

export const AboutTextImportant = styled.span`
    font-weight: 900;
    color: #5FFF5B;
`
