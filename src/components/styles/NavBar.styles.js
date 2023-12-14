import styled from "styled-components"
import { device } from "../DeviceSize"

export const StyledIconLogo = styled.img`
    width: 3rem; 
    @media ${device.mobileS} {
        width: 4rem;
    }
    @media ${device.mobileM} {
        width: 4rem;
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
    /* padding-top: 40px; */
    padding-top: 2.3rem;
    /* padding-left: 30px; */
    padding-left: 1.7rem;
    /* padding-right: 60px; */
    padding-right: 3.4rem;
    padding-bottom: 1.5rem;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box; 
    background-color: black;
    z-index: 2;
    
`

export const NavBarLinksStyle = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 1.5rem;
    font-weight: 400;
    @media ${device.mobileS} {
        font-size: 2rem;
    }
    @media ${device.mobileM} {
        font-size: 2rem;
    }
    @media ${device.tablet} {
        font-size: 1.5rem;
    }
`

export const NavBarLinksElementStyle = styled.div`
    margin-left: 4rem;
`

export const NavBarLogosStyle = styled.div`
    display: flex;
`

export const NavBarLanguageStyle = styled.div`
    margin-left: 4rem;
`
export const LanguageToggleStyle = styled.img`
    width: 2.5rem;
    height: 1.25rem;
    @media ${device.mobileS} {
        width: 3rem;
        height: 1.5rem;
    }
    @media ${device.mobileM} {
        width: 3rem;
        height: 1.5rem;
    }
    @media ${device.tablet} {
        width: 2.5rem;
        height: 1.25rem;
    }
`