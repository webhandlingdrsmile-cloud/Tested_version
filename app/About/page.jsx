'use client'

import AboutLanding from "../Components/AboutPages/Aboutlanding"
import AboutStory from "../Components/AboutPages/AboutStory"
import ReshmaDr from "../Components/AboutPages/ReshmaDr"

export default function about(){
    return(
        <div>
            <AboutLanding/>
            <AboutStory/>
            <ReshmaDr/>
        </div>
    )
}