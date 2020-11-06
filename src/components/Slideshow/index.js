import React from 'react';
import { Slide } from 'react-slideshow-image';
import './styles.css';

import pets from '../../imagens/pets.svg';
import pets2 from '../../imagens/pets2.svg';
import pets3 from '../../imagens/pets3.svg';
 
const slideImages = [
  pets,
  pets2,
  pets3
];
 
function Slideshow() {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;