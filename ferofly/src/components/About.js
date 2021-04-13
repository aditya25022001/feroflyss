import React from 'react'
import { Container } from 'react-bootstrap'

export const About = () => {
    return (
        <Container className='mx-auto' style={{ textAlign: 'center', margin:'8% 0%' }}>
            <div className='my-5' style={{ fontWeight:300, fontSize:'25px' }}>ABOUT</div>
            <div id='about' className='text-muted mx-auto' >I'm a paragraph. 
                Click here to add your own text and edit me. 
                It’s easy. 
                Just click “Edit Text” or double click me to add your own content and make changes to the font. 
                Feel free to drag and drop me anywhere you like on your page. 
                I’m a great place for you to tell a story and let your users know a little more about you.
            </div>
        </Container>
    )
}
