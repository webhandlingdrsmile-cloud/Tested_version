'use client'

import AboutDental from "../Components/AboutPages/AboutDental"
import AboutLanding from "../Components/AboutPages/Aboutlanding"
import AboutStory from "../Components/AboutPages/AboutStory"
import ReshmaDr from "../Components/AboutPages/ReshmaDr"

export default function about(){
    return(
        <div>
            <AboutLanding/>
            <AboutStory/>
            <ReshmaDr/>
            <AboutDental/>
        </div>
    )
}