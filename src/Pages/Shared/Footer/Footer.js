import React from 'react';

const Footer = () => {

    const today = new Date();

    return (
        <footer sticky='bottom'>
            <p className='text-center'><small > copyright &copy; {today.getFullYear()} </small></p>
        </footer>
    );
};

export default Footer;