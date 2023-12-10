import styled from "styled-components";

export const ContactContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10rem;
`

export const ContactTitle = styled.div`
    font-size: 3rem;
    margin-bottom: 3rem;
    font-weight: 700;
`

export const ContactText = styled.div`
    font-size: 2rem;
    margin-bottom: 2rem;
`

export const ContactImportantText = styled.div`
    background: linear-gradient(90deg, rgba(203,48,102,1) 0%, rgba(98,101,255,1) 50%, rgba(22,191,253,1) 100%);
    background-clip: text;
    -moz-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    display: inline-block
    
`

export const ContactEmailAndIcon = styled.div`
    display: flex;
    flex-direction: row;

`

export const ContactEmail = styled.div`

`

export const ContactIcon = styled.img`
    width: 3rem;
    margin-right: 1.5rem;
`