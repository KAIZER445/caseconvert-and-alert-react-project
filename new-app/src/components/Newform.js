import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Newform({ fromheading = 'Case Converter',theme,showAlert }) {
    const convertuppercase = () => {
        newtext(prevtext.toUpperCase())
        if(prevtext!==''){
            showAlert('converted to uppercase','dark')
        }
        else{
            showAlert('Text box is empty','danger')
        }

    }

    const convertlowercase = () => {
        newtext(prevtext.toLowerCase())
        if(prevtext!==''){
            showAlert('converted to lowercase','dark')
        }
        else{
            showAlert('Text box is empty','danger')
        }
    }

    const copytext = () => {
        navigator.clipboard.writeText(prevtext)
        showAlert('text copied','dark')
    }

    const cleartext = () => {
        newtext('')
        if(prevtext!==''){
            showAlert('Text cleared','dark')
        }
        else{
            showAlert('Text box is empty','danger')
        }
    }

    const textcontent = (event) => {
        newtext(event.target.value)
    }

    const [prevtext, newtext] = useState('')

    const getWordCount = () => {
        if (prevtext.trim() === '') {
            return 0;
        }
        else {
            return prevtext.trim().split(' ').length;
        }

    }

    return (
        <>
            <div className='mt-5'>
            <Form data-bs-theme={theme}>
                <h1 className='text-center'>{fromheading}</h1>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Content BOX</Form.Label>
                    <Form.Control as="textarea" className='textbox' value={prevtext} onChange={textcontent} rows={12} />
                </Form.Group>
                <div className='d-flex justify-content-center gap-5'>
                    <Button className={`btn-${theme} shadow`} onClick={convertuppercase}>
                        Convert to uppercase
                    </Button>
                    <Button className={`btn-${theme} shadow`} onClick={convertlowercase}>
                        Convert to lowercase
                    </Button>
                    <Button className={`btn-${theme} shadow`} onClick={copytext}>
                        Copy text
                    </Button>
                    <Button className={`btn-${theme} shadow`} onClick={cleartext}>
                        Clear textarea
                    </Button>
                </div>
            </Form>
            <div>
                <h5 className='mb-4'>Text Summary</h5>
                <p className='fst-italic mb-1'>{prevtext.length} characters || {getWordCount()} words</p>
                <p> Estimated read time <span className='fst-italic'>{getWordCount() * 0.008}</span> minutes</p>
            </div>
            </div>
        </>

    )
}
