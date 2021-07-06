import React, { useState } from 'react'

const Birthday = (props) => {

     return (
          <>
               <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={props.image} alt="" />
                    <div className="text" style={{ marginLeft: '1rem' }}>
                         <h4>{props.name}</h4>
                         <span>{props.age} years</span>
                    </div>
               </div>
          </>
     )
}

export default Birthday
