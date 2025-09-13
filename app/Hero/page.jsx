'use client'

import Experience from "../Components/Experience"
import Expertise from "../Components/Expertise"
import Gallery from "../Components/Gallary"
import Landing from "../Components/Landing"
import Section2 from "../Components/Section2"
import Technology from "../Components/Technology"
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
        </div>
    )
}