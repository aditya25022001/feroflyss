import React from 'react'
import { Button, FormControl, ListGroup } from 'react-bootstrap'

export const Contact = () => {
    return (
        <div id='contact'>
            <ListGroup className='mx-auto text-center' style={{ backgroundColor:'rgb(241,241,241)' }}>
                <ListGroup.Item className='border-0 font-weight-light py-5' style={{ backgroundColor:'rgb(241,241,241)', fontSize:28 }}>CONTACT US</ListGroup.Item>
                <ListGroup.Item className='border-0 text-muted' style={{ backgroundColor:'rgb(241,241,241)' }} id='contact_cred'>
                    <div>info@mysite.com</div>
                    <div id='sep'>/</div>
                    <div>500 Terry Francois Street, San Francisco, CA 94158</div>
                    <div id='sep'>/</div>
                    <div>Tel: 123-456-7890 </div>
                </ListGroup.Item>
                <ListGroup.Item  style={{ backgroundColor:'rgb(241,241,241)' }} className='border-0 mx-auto' id='form_contact'>
                        <div id='name_email' className='mx-auto'>
                            <FormControl className='border-0' id='name' placeholder='Name*'></FormControl>
                            <FormControl className='border-0' id='email' placeholder='Email*'></FormControl>
                        </div>
                        <FormControl style={{ marginBottom:'2%' }} className='border-0' id='subject' placeholder='Subject'></FormControl>
                        <FormControl className='border-0' id='message' as='textarea' rows={6} placeholder='Message'></FormControl>
                        <Button className='py-2' id='contact_button'>Send</Button>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}
