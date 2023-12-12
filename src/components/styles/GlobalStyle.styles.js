import { createGlobalStyle } from "styled-components";
import { device } from "../DeviceSize"

export const GlobalStyle = createGlobalStyle`
    body {
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        background: rgb(0, 0, 0);
        margin: 0;
        color: white;
        /* display: flex;
        flex-direction: column; */
    }
    html{
        font-size: 17px;
        
        @media ${device.mobileS} {
            font-size: 4px;
        }

        @media ${device.mobileM} {
            font-size: 5px;
        }

        @media ${device.mobileL} {
            font-size: 6px;
        }

        @media ${device.tablet} {
            font-size: 10px;
        }

        @media ${device.laptop} {
            font-size: 11px;
        }

        @media ${device.laptopL} {
            font-size: 17px;
        }

        @media ${device.desktop} {
            font-size: 20px;
        }
        
        
        
    }
    
`