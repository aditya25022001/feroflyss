import React, { useState } from 'react'
import { Button, Container, FormControl, Image, ListGroup } from 'react-bootstrap'

export const BodyOne = () => {
    
    const [focusCheckIn, setHasFocusCheckIn] = useState(false)

    const [focusCheckOut, setHasFocusCheckOut] = useState(false)

    const setDateTypeCheckIn = () => {
        setHasFocusCheckIn(true)
    }

    const setDateTypeCheckOut = () => {
        setHasFocusCheckOut(true)
    }

    return (
        <Container style={{ marginTop:'5%' }}>
            <ListGroup className='border-0 text-center'>
                <ListGroup.Item id='title' className='border-0 mx-auto py-5 text-center'>
                    <div style={{ fontWeight:700, fontSize:'40px', letterSpacing:'5px' }}>
                        Ferofly
                    </div>
                    <div style={{ fontWeight:500, fontSize:'1.3em', letterSpacing:'1px' }}>
                        Magnify your Journey
                    </div>
                </ListGroup.Item>
                <ListGroup.Item className='border-0 text-center'>
                    <Image src='./images/one.webp' id='image-one' />
                </ListGroup.Item>
                <ListGroup.Item className='border-0' id='inputs_list'>
                    <div className='text-left mr-3' id='inputs'>
                        <div className='font-weight-light mb-1' id='input_headings'>Check In</div>
                        <FormControl className='py-0 font-weight-light' style={{ fontSize:15 }} id='checkin' onFocus={e => setDateTypeCheckIn()} type={focusCheckIn ? 'date' : 'text'} placeholder='DD MM YYYY' />
                    </div>
                    <div className='text-left mr-3' id='inputs'>
                        <div className='font-weight-light mb-1' id='input_headings'>Check Out</div>
                        <FormControl className='py-0 font-weight-light' style={{ fontSize:15 }} id='checkout' onFocus={e => setDateTypeCheckOut()} type={focusCheckOut ? 'date' : 'text'} placeholder='DD MM YYYY' />
                    </div>
                    <div className='text-left mr-3' id='inputs'>
                        <div className='font-weight-light mb-1' id='input_headings'>Adults</div> 
                        <FormControl className='py-0' id='adults' type='number'/>
                    </div>
                    <div className='text-left mr-3' id='inputs'>
                        <div className='font-weight-light mb-1' id='input_headings'>Kids</div>
                        <FormControl className='py-0' id='kids' type='number'/>
                    </div>
                    <div className='text-left mr-3'>
                        <Button id='button_inputs'>Search</Button>
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </Container>
    )
}
