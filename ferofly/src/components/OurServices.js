import React from 'react'
import { Breakfast } from '../svgs/Breakfast'
import { Garden } from '../svgs/Garden'
import { Pool } from '../svgs/Pool'
import { Dining } from '../svgs/Dining'
import { HouseKeeping } from '../svgs/HouseKeeping'
import { Wifi } from '../svgs/Wifi'
import { Container, ListGroup } from 'react-bootstrap'

export const OurServices = () => {
    
    const setServices = (icon, heading, content) => {
        return <div style={{ textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection:'column'}}>
            <div className='text-muted'>{icon}</div>
            <div className='mb-3'>{heading}</div>
            <div className='text-muted font-weight-light' style={{ fontStyle:'italic', fontSize:15 }}>{content}</div>
        </div>
    }

    return (
        <Container id='services'>
            <ListGroup className='mx-auto border-0 text-center'>
                <ListGroup.Item className='border-0 font-weight-light' style={{ fontSize:28 }}>OUR SERVICES</ListGroup.Item>
                <ListGroup.Item id='services_listgroup' className='border-0'>
                    <div style={{ width:'30vh', marginBottom:'5%' }} >{setServices(<Breakfast/>,'Breakfast','I\'m a paragraph. Click here to add your own text and edit me.')}</div>
                    <div style={{ width:'30vh', marginBottom:'5%' }} >{setServices(<Garden/>,'Garden','I\'m a paragraph. Click here to add your own text and edit me.')}</div>
                    <div style={{ width:'30vh', marginBottom:'5%' }} >{setServices(<Pool/>,'Pool','I\'m a paragraph. Click here to add your own text and edit me.')}</div>
                </ListGroup.Item>
                <ListGroup.Item id='services_listgroup' className='border-0'>
                    <div style={{ width:'30vh', marginBottom:'5%' }} >{setServices(<Wifi/>,'Free Wifi','I\'m a paragraph. Click here to add your own text and edit me.')}</div>
                    <div style={{ width:'30vh', marginBottom:'5%' }} >{setServices(<HouseKeeping/>,'Daily Housekeeping','I\'m a paragraph. Click here to add your own text and edit me.')}</div>
                    <div style={{ width:'30vh', marginBottom:'5%' }} >{setServices(<Dining/>,'In-Room Dining Service','I\'m a paragraph. Click here to add your own text and edit me.')}</div>
                </ListGroup.Item>
            </ListGroup>
        </Container>
    )
}
