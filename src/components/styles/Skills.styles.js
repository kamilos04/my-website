import { styled } from "styled-components";
import { device } from "../DeviceSize";
import { motion } from "framer-motion"

export const SkillsContent = styled.div`
    display: flex;
    flex-direction: column;
    /* height: 100vh; */
    align-items: center;
    /* justify-content: center; */
    /* padding-left: 10rem;
    padding-right: 10rem; */
    @media ${device.mobileS} {
        margin-top: 14rem;
        //margin-bottom: 20rem;
    }
    @media ${device.laptop} {
        height: 100vh;
        justify-content: center;
        /* height: 45rem; */
    }
`

export const SkillsTitle = styled(motion.div)`
    font-size: 3rem;
    margin-bottom: 5rem;
    font-weight: 700;
`

export const SkillsIconStyle = styled(motion.div)`
    width: 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
    margin-left: 1rem;
    margin-bottom: 3rem;
`

export const SkillsIconTextStyle = styled.div`
    font-size: 1.5rem;
`

export const SkillsIconImgStyle = styled.img`
    width: 6rem;
`

export const SkillsTable = styled.div`
    width: 49rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 3rem;
    height: 18.7rem;
`

export const SkillsTableDivCenter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const SkillsTableButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const SkillsTableButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-right: 2rem;
    padding-left: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 2rem;
    cursor: pointer;
    color: ${props => props.checked ? "#5FFF5B" : "white"};
    background-color: transparent;
    border: 0;
    font-family: 'Lato', sans-serif;
`
