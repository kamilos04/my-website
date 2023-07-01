import react from "react"
import BackgroundImageFile from "../images/background3.png"
import { BackgroundImage } from "../components/styles/Background.styles"
import { NavBar } from "../components/NavBar.js"
import { HomeContent } from "./styles/Home.styles.js"

export function Home() {
    return(
        <div>
            <BackgroundImage src={BackgroundImageFile} alt="Test"/>
            <HomeContent>
                <NavBar/>
                <div>
                    <div>Hi, I'm</div>
                    <div>Kamil Jach</div>
                </div>
                <div>Frontend Developer</div>
                <div>I'm a frontend developer, currently learning backend. I’m very willing to complete your order.</div>
            </HomeContent>

            
        </div>
    )
}