import React from 'react';

import './Footer.css'

const YEAR = new Date().getFullYear();

const footer = () => (
    <div className='footer__container'>
        <p>Contact: marcin@janerka.com</p>
        <p>&copy;copyrights Marcin Janerka {YEAR}</p>
    </div>
)

export default footer;