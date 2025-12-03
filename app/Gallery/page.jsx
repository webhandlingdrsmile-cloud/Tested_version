'use client'

import BentoGallery from "../Components/GalleryPages/GalleryBento"
import GalleryLanding from "../Components/GalleryPages/GalleryLanding"

export default function Gallery(){
    return(
        <div>
            <GalleryLanding/>
            <BentoGallery/>
        </div>
    )
}