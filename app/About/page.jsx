'use client'

import AboutDental from "../Components/AboutPages/AboutDental"
import AboutLanding from "../Components/AboutPages/Aboutlanding"
import AboutStory from "../Components/AboutPages/AboutStory"
import WhyPatients from "../Components/AboutPages/AboutWhyP"
import ReshmaDr from "../Components/AboutPages/ReshmaDr"
import Logo from "../Components/Logo"
import Schedule from "../Components/Shedule"
import Testimonials from "../Components/Testimonials"

export default function about(){
    return(
        <div>
            <AboutLanding/>
            <AboutStory/>
            <ReshmaDr/>
            <AboutDental/>
            <WhyPatients/>
            <Schedule/>
            <Logo/>
            <Testimonials/>
        </div>
    )
}