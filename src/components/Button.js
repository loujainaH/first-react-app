import React from 'react';

export const Button = (props) => {
    
console.log('hi')
  return (
    <button onClick={() =>
         props.sign == "+" ? props.updateCount(1) : props.updateCount(-1)

    }>
      {props.sign}
      
    </button>
   
  );
}