import {styled} from "styled-components"

export const ContactMessageBoxStyle = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    position: fixed;
    z-index: 3;
    width: 40rem;
    height: 30rem;
    margin: auto;
    top: 50%;
    left: 50%;
    margin-top: -15rem;
    margin-left: -20rem;
    border-radius: 1.5rem;
`
export const CloseImgStyle = styled.img`
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    right: 1rem;
    top: 1rem;
    position: absolute;
`