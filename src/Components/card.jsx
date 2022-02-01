import React from 'react';
import Photo from './image-equilibrium.jpg'; 
import Person from './image-avatar.png'; 
import Clock from './icon-clock.svg';
import Etherium from './icon-ethereum.svg';
import './card.css';
export default function Card() {
    return (
        <div className='content'>
            <div className='objects'>
        
            <img src={Photo}/>
            <div className='Text'>
            
             <h4>Equilibrium #3429 </h4>
             <p>Our Equilibrium collection promotes balance and calm.</p>
              <div className='numb'>
                <div className='currency'> <img src={Etherium}/>0.041 ETH</div> 
                <div className='days'> <img src={Clock}/>3 days left</div> 
                </div>
              <div className='avatar'>
               <div className='owner'><img src={Person}/></div> 
                <div className='details'><p>Creation of 
                    <span className='Sp'> Jules Wyvern</span></p></div>
                </div>      
            </div>
            </div>
            
        </div>
    );
}


