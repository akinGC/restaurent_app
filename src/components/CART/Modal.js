
import { useState } from 'react'
import './Modal.css'
function Modal(props){



 let  amt = 0
 for(let i=0;i<props.updated.length;i++){
    amt=amt+props.updated[i].amt

 }


    function update() {
        props.updatem(false)
    }
    return(
        <div className='modcover'>
            <ul className='moditm_name'>
                
                
                   
<li className='moditm_list'>Sushi</li>
                    
                
            </ul> 
            <div className='moditm_total'>
                <span className='moditm_total_txt'>Total Amount</span>
                <span className='moditm_total_txt totalprice'>{amt.toFixed(2)}</span>
            </div>
            <div className='modbtns'>
                <div className='mod_btn_placer'>
                <button className='modbtn modclsbtn' onClick={update}>Close</button>
                <button className='modbtn modordbtn'>Order</button>
                </div>
            </div>
        </div>
    )
}
export default Modal