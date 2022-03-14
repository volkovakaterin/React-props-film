import React from 'react';
import PropTypes from'prop-types';
import Star from './Star';

function Stars(props) {
const count = props.count;
let stars = [];
for (let i = 0; i < count; i++) {
    stars.push(<Star key = {i}/>)
    } 
return(
    <>
   {console.log(stars)} 
<ul className='card-body-stars'>  
        {stars}       
     </ul>   
    </> 
      
)
}

Stars.defaultProps= {count: 0};

export default Stars;