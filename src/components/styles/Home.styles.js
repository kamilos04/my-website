import { styled } from "styled-components";


export const HomeContent = styled.div`
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const HomeMainTextStyle = styled.div`
    margin-left: 12rem;;
    margin-top: 6rem;
    
`

export const HomeHelloStyle = styled.div`
    font-size: 6rem
`

export const HomeNameStyle = styled.span`
    font-size: 6rem;
    color: #5FFF5B;
`

export const HomeDeveloperStyle = styled.div`
    font-size: 4rem;
    /* background: linear-gradient(90deg, #CB3066 0%, #16BFFD 100%); */
    /* background: linear-gradient(90deg, rgba(222,92,255,1) 0%, rgba(86,127,234,1) 100%); */
    background: linear-gradient(90deg, rgba(203,48,102,1) 0%, rgba(98,101,255,1) 50%, rgba(22,191,253,1) 100%);
    background-clip: text;
    -moz-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    display: inline-block
`

export const HomeShortTextStyle = styled.div`
    font-size: 2rem;
    margin-top: 4rem;
    width: 55%;
    font-weight: 400;
`

export const HomeHelloNameStyle = styled.div`
    font-size: 2rem;
    display: flex;
    flex-direction: row;
`

export const HomeButtonContactStyle = styled.div`
    width: 20%;
    margin-top: 5rem;
    border: 2px solid white;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 1.5rem 1.5rem 1.5rem 1.5rem;
    border-radius: 3rem;
    font-weight: 600;
    background-color: rgba(255, 255, 255, 0.07)
`