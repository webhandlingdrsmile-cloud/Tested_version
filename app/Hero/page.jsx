'use client'

import Experience from "../Components/Experience"
import Landing from "../Components/Landing"
import Section2 from "../Components/Section2"

export default function Hero(){
    return(
        <div className="overflow-x-hidden">
            <Landing/>
            <Section2/>
            <Experience/>
        </div>
    )
}