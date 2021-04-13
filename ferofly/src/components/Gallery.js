import React from 'react'
import { Carousel, Image } from 'react-bootstrap'

export const Gallery = () => {
    return (
        <div id='gallery'> 
            <div id='gallery_each'>
                <Carousel fade nextIcon="" prevIcon="" indicators={false}>
                    <Carousel.Item interval={1500}>
                        <Image src='./images/gallery1.webp' id='car_images'/>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <Image src='./images/gallery2.webp' id='car_images'/>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div id='gallery_each'>
                <Carousel fade nextIcon="" prevIcon="" indicators={false}>
                    <Carousel.Item interval={1500}>
                        <Image src='./images/gallery3.webp' id='car_images'/>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <Image src='./images/gallery4.webp' id='car_images'/>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div id='gallery_each'>
                <Carousel fade nextIcon="" prevIcon="" indicators={false}>
                    <Carousel.Item interval={1500}>
                        <Image src='./images/gallery5.webp' id='car_images'/>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <Image src='./images/gallery6.webp' id='car_images'/>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
