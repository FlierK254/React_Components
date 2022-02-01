import React from 'react'
import Photo from './qr.png'; 
import './Qr.css';
export default function code(){

    return (
        <div className='container'>
            <div className='scan'>
        
            <img src={Photo}/>
            <div className='Text'>
            <h3>Improve your front-end skills by building projects</h3>
            <p>Scan the QR code to visit
             Frontend Mentor and take your coding skills to the next level</p>       
            </div>
            </div>
            
        </div>
    );
}

