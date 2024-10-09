import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

export default function About() {
    const [accordionhead, newaccordionhead] = useState('light')
    const [themestatus, newthemestatus] = useState('Enable dark mode')

    const handleToggle = () => {
        if (accordionhead === 'light') {
            newaccordionhead ('dark')
            newthemestatus ('dark mode Enabled')
            
        }else{
            newaccordionhead ('light')
            newthemestatus ('Enable dark mode')
            
        }
    }

    return (
        <>
            <div className='mt-5'>
                <Form className='mb-3'>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label={themestatus}
                        onChange={handleToggle}
                    />
                </Form>
                <Accordion data-bs-theme={accordionhead}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body data-bs-theme={accordionhead}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body data-bs-theme={accordionhead}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}
