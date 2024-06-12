import styled from "styled-components"
import { device } from "../DeviceSize"
import { motion } from "framer-motion"

export const StyledIconLogo = styled(motion.img)`
    width: 3rem; 
    @media ${device.mobileS} {
        width: 5rem;
    }
    @media ${device.mobileM} {
        width: 5rem;
    }
    @media ${device.tablet} {
        width: 3rem;
    }
    /* margin-right: 20px; */
`
export const NavBarSocialButton = styled.div`
    margin-right: 1.5rem;
    
    @media ${device.mobileS} {
        margin-right: 2.5rem;
    }
    @media ${device.mobileM} {
        margin-right: 2.5rem;
    }
    @media ${device.tablet} {
        margin-right: 1.5rem;
    }
`

export const NavBarStyle = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    padding-left: 1.7rem;
    padding-right: 2.5rem;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box; 
    background-color: black;
    /* background-size: 2.5rem 2.5rem;
        background-image:
        linear-gradient(to right, rgb(15,15,15) 1px, transparent 1px),
        linear-gradient(to bottom, rgb(15,15,15) 1px, transparent 1px); */
    z-index: 2;
    @media ${device.mobileS} {
        display: none;
    }
    @media ${device.laptop} {
        display: flex;
    }
`

export const NavBarMobileStyle = styled.div`
    @media ${device.mobileS} {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-left: 3rem;
        padding-right: 3rem;
        padding-top: 3rem;
    }
    @media ${device.laptop} {
        display: none;
    }
`

export const NavBarLinksStyle = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 1.5rem;
    font-weight: 400;
`

export const NavBarLinksElementStyle = styled(motion.button)`
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    cursor: pointer;
    background-color: transparent;
    color: white;
    @media ${device.mobileS} {
        font-size: 2rem;
    }
    @media ${device.mobileM} {
        font-size: 2rem;
    }
    @media ${device.tablet} {
        font-size: 1.5rem;
    }
    border: 0;
    font-family: 'Lato', sans-serif;
`

export const NavBarLogosStyle = styled.div`
    display: flex;
`

export const NavBarLanguageStyle = styled(motion.div)`
    @media ${device.mobileS} {
        margin-left: 1rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin-right: 1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    @media ${device.laptop} {
        margin-left: 1rem;
        margin-top: 0.5rem;
        margin-bottom: 0rem;
        margin-right: 0rem;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    
    
`
export const LanguageToggleStyle = styled.img`
    width: 2.5rem;
    height: 1.25rem;
    cursor: pointer;
    @media ${device.mobileS} {
        width: 5rem;
        height: 2.5rem;
    }
    @media ${device.mobileM} {
        width: 5rem;
        height: 2.5rem;
    }
    @media ${device.tablet} {
        width: 4rem;
        height: 2rem;
    }
    @media ${device.laptop} {
        width: 2.5rem;
        height: 1.25rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`