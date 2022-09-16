import { useState } from 'react'
import './Additems.css'
import Context from '../CART/Context'
import { useContext } from 'react'
const Additems = (props) => {
    const auth = useContext(Context)
   
    const [num, setNum] = useState(0)
    function update() {
     
        setNum(num + 1)
       auth.arrayUpdates({
        name:props.itm.name,
        qty:num+1,
        desc:props.itm.desc,
        amt:props.itm.amt
       })

       
    }
    return (
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