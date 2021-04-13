import React from 'react'
import { Button, Container, Image, ListGroup } from 'react-bootstrap'
import '../App.css'

export const BodyTwo = () => {
    return (
        <Container id='body_two' className='mx-auto text-center mb-5'>
            <Image src='./images/two.webp' id='image-two'/>
            <ListGroup id='image_overlay'  >
                <ListGroup.Item className='border-0 pt-4 font-weight-light' style={{ fontSize:25 }}>
                    OUR ROOMS
                </ListGroup.Item>
                <ListGroup.Item className='border-0 px-4 text-muted font-weight-light' id='block_image'>
                I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
                </ListGroup.Item>
                <ListGroup.Item className='border-0 pb-5'>
                    <Button id='button_image'>Book a Room</Button>
                </ListGroup.Item>
            </ListGroup>
        </Container>
    )
}
