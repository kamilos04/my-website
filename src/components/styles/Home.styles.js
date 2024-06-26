import { styled } from "styled-components";
import { device } from "../DeviceSize";
import { motion } from "framer-motion"

export const HomeContent = styled.div`
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    @media ${device.mobileS} {
        min-height: 0;
        /* margin-bottom: 20rem; */
    }
    @media ${device.laptop} {
        min-height: 100vh;
        
    }
`

export const HomeMainTextStyle = styled.div`
    /* margin-left: 12rem; */
    margin-top: 12rem;
    /* display: flex;
    flex-direction: column; */
    @media ${device.mobileS} {
        margin-top: 6rem;
        margin-left: 5rem;
    }
    @media ${device.laptop} {
        margin-top: 12rem;
        margin-left: 10rem;
    }
`

export const HomeHelloStyle = styled.div`
    @media ${device.mobileS} {
        font-size: 4rem;
    }
    @media ${device.laptop} {
        font-size: 6rem;
    }
`

export const HomeNameStyle = styled.h1`
    color: #5FFF5B;
    display: inline;
    @media ${device.mobileS} {
        font-size: 4rem;
    }
    @media ${device.laptop} {
        font-size: 6rem;
    }
`

export const HomeDeveloperStyle = styled(motion.h2)`
    @media ${device.mobileS} {
        font-size: 3rem;
    }
    @media ${device.laptop} {
        font-size: 4rem;
    }
    /* background: linear-gradient(90deg, #CB3066 0%, #16BFFD 100%); */
    /* background: linear-gradient(90deg, rgba(222,92,255,1) 0%, rgba(86,127,234,1) 100%); */
    background: linear-gradient(90deg, rgba(203,48,102,1) 0%, rgba(98,101,255,1) 50%, rgba(22,191,253,1) 100%);
    background-clip: text;
    -moz-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    display: inline-block;
    margin-block-start: 0;
    margin-block-end: 0;
`

export const HomeShortTextStyle = styled.div`
    font-size: 2rem;
    margin-top: 4rem;
    width: 25rem;
    font-weight: 400;
`

export const HomeHelloNameStyle = styled(motion.div)`
    font-size: 2rem;
    display: flex;
    flex-direction: row;
`

export const HomeButtonContactStyle = styled(motion.button)`
    width: 20rem;
    margin-top: 5rem;
    border: 2px solid white;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 1.5rem 1.5rem 1.5rem 1.5rem;
    border-radius: 3rem;
    font-weight: 600;
    background-color: rgba(255, 255, 255, 0.07);
    font-size: 1.5rem;
    cursor: pointer;
    color: white;
    font-family: 'Lato', sans-serif;
`

export const HomePhotoStyle = styled(motion.img)`
    width: 30rem;
    height: 30rem;
    margin-left: 4rem;
    /* margin-right: 3.4rem; */
    @media ${device.mobileS} {
        width: 23rem;
        height: 23rem;
        margin-right: 5rem;
        margin-top: 10rem;
    }
    @media ${device.mobileM} {
        width: 25rem;
        height: 25rem;
        margin-right: 5rem;
    }
    
    @media ${device.laptop} {
        width: 25rem;
        height: 25rem;
        margin-right: 10rem;
        margin-top: 14rem;
    }
`

export const HomeTextPhotoStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* align-items: center; */
`
