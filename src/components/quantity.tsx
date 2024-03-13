'use client'

import React, {useState} from 'react'

const Quantity = () => {
 
  const[num, setNum]=useState(1);

    return (
<div className='items-center flex gap-x-2'>
  {/* Minus */}
    <div className='border h-6 w-6 rounded-full center'
       onClick={() => {
        setNum(num <= 1 ? 1: num - 1);
   }}>
     <button>-</button>
    </div>
  {/* Number */}
   <span>{num}</span>
  {/* Plus */}
  <div className='border h-6 w-6 rounded-full center' 
   onClick={() => {
        setNum(num+1);
   }}> 
   <button>+</button>
   </div>
</div>
    )
}

export default Quantity


