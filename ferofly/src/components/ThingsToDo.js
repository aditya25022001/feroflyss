import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'

export const ThingsToDo = () => {

    const setThingsToDo = (heading, content) => {
        return <div style={{ textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection:'column'}}>
            <div className='mb-3'>{heading}</div>
            <div className='text-muted font-weight-light' style={{ fontStyle:'italic', fontSize:15 }}>{content}</div>
        </div>
    }

    return (
        <Container id='things'>
            <ListGroup className='mx-auto border-0 text-center' style={{ width:'100%' }}>
                <ListGroup.Item className='border-0 font-weight-light' style={{ fontSize:28 }}>THINGS TO DO</ListGroup.Item>
                <ListGroup.Item id='things_listgroup' className='border-0'>
                    <div style={{ width:'30vh', marginBottom:'5%' }} >{setThingsToDo('Wineries Tour','I\'m a paragraph. Click here to add your own text and edit me.')}</div>
                    <div style={{ width:'30vh', marginBottom:'5%' }} >{setThingsToDo('Cultural Sites','I\'m a paragraph. Click here to add your own text and edit me.')}</div>
                    <div style={{ width:'30vh', marginBottom:'5%' }} >{setThingsToDo('Market Tour','I\'m a paragraph. Click here to add your own text and edit me.')}</div>
                </ListGroup.Item>
                <ListGroup.Item id='things_listgroup' className='border-0'>
                    <div style={{ width:'30vh', marginBottom:'5%' }} >{setThingsToDo('Leisure Activities','I\'m a paragraph. Click here to add your own text and edit me.')}</div>
                    <div style={{ width:'30vh', marginBottom:'5%' }} >{setThingsToDo('Birds Safari','I\'m a paragraph. Click here to add your own text and edit me.')}</div>
                    <div style={{ width:'30vh', marginBottom:'5%' }} >{setThingsToDo('Horse Riding','I\'m a paragraph. Click here to add your own text and edit me.')}</div>
                </ListGroup.Item>
            </ListGroup>
        </Container>
    )
}
