import React from 'react';
import '../styles/Content.css';
import Prop from '../pages/Prop'

function Test() {
    if(!document) return null;
      return (
        <div>
            <ul>
            <Prop content ='{present.data.content}' />
 
            </ul>
                         
        </div>
      );
    }

export default Test;

