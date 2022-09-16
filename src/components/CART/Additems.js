import { useState } from 'react'
import './Additems.css'
const Additems=()=>{
    const [num,setNum]=useState(0)
    function update(){
        setNum(num+1)
    }
    return(
        <div className='Adcover'>
            <div className='Adnumcvr'>
                <span className='adnumtxt'>Amount</span>
                <span className='adamt'>{num}</span>
            </div>
            <button className='adbtn' onClick={update}>+ Add</button>
        </div>
    )
}
export default Additems