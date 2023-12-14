import { styled } from "styled-components";
import { device } from "../DeviceSize";


export const AboutContent = styled.div`
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-top: 7rem; */
    width: 100%;
    height: 100vh;
    @media ${device.mobileS} {
        height: auto;
        margin-bottom: 20rem;
        font-size: 2rem;
    }
    @media ${device.tablet} {
        height: 100vh;
        font-size: 1.5rem;
    }
`

export const AboutTitle = styled.div`
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
        margin-left: 5rem;
        margin-right: 5rem;  
    }
    @media ${device.tablet} {
        margin-left: 10rem;
        margin-right: 10rem;  
    }
`

export const AboutText = styled.div`
    
`

export const AboutTextSection = styled.div`
    margin-bottom: 1.5rem;
    font-weight: 400;
`

// export const AboutPhoto = styled.img`
//     width: 30rem;
//     height: 30rem;
//     /* margin-right: 12rem; */
//     margin-left: 7rem;
//     /* filter: drop-shadow(30px 30px 40px #9400C8); */
// `

export const AboutTextImportant = styled.span`
    font-weight: 900;
    color: #5FFF5B;
`
