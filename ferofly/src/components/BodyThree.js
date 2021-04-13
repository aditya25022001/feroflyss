import React from 'react'
import {Container, Image, ListGroup, Carousel } from 'react-bootstrap'
import '../App.css'

export const BodyThree = () => {

    const setCarouselItem = (heading, content) => {
        return <ListGroup>
            <ListGroup.Item className='border-0'>{heading}</ListGroup.Item>
            <ListGroup.Item className='border-0'>
                <img alt={`"`} style={{ height:20, width:25 }} src="https://static.wixstatic.com/media/a9ff3b_e630dab1211b433ba1955369e2f15c16.png/v1/fill/w_26,h_22,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_e630dab1211b433ba1955369e2f15c16.webp" />
            </ListGroup.Item>
            <ListGroup.Item className='border-0 text-muted font-weight-light py-5' style={{ fontStyle:'italic' }}>{content}</ListGroup.Item>
        </ListGroup>
    }

    return (
        <Container id='body_two' className='mx-auto text-center mb-5'>
            <Image src='./images/three.webp' id='image-two'/>
            <Carousel fade nextIcon='' prevIcon='' id='image_overlay'>
                <Carousel.Item>{setCarouselItem('GUEST REVIEW','“I\'m a testimonial. Click to edit me and add text that says something nice about you and your services.”') }</Carousel.Item>
                <Carousel.Item>{setCarouselItem('GUEST REVIEW','“I\'m a paragraph. Click here to add your own text and edit me.”') }</Carousel.Item>
                <Carousel.Item>{setCarouselItem('GUEST REVIEW','“I\'m a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.”') }</Carousel.Item>
            </Carousel>
        </Container>
    )
}