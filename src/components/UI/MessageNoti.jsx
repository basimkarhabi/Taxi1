import React , { useState,useEffect} from 'react';
import "../../styles/booking-form.css";


function MessageNoti({successMsg,hidden,setHidden}) {
    
    useEffect(() => {
        
      },[]);

      console.log(hidden)
  return (
    <>
   
    {
        hidden ?
    <div className="messageNoti" >
        <button onClick= {()=>setHidden(false)}>X</button>
        <div className="messageNoti2">
            <p>{successMsg}</p>
        </div>
        </div>
        :""

}
</>
  )
}

export default MessageNoti