'use client'

import Experience from "../Components/Experience"
import Expertise from "../Components/Expertise"
import Footer from "../Components/Footer/page"
import Gallery from "../Components/Gallary"
import Landing from "../Components/Landing"
import Logo from "../Components/Logo"
import Section2 from "../Components/Section2"
import Shedule from "../Components/Shedule"
import Technology from "../Components/Technology"
import Testimonials from "../Components/Testimonials"
import WhyChooseUs from "../Components/WhyChoose"

export default function Hero(){
    return(
        <div className="overflow-x-hidden">
            <Landing/>
            <Section2/>
            <Experience/>
            <Technology/>
            <Expertise/>
            <WhyChooseUs/>
            <Gallery/>
            <Shedule/>
            <Logo/>
            <Testimonials/>
        
        </div>
    )
}