import { useEffect, useState } from 'react'
import './Additems.css'
import Context from '../CART/Context'
import { useContext } from 'react'
const Additems = (props) => {
    const auth = useContext(Context)
   
    const [num, setNum] = useState(0)

    function update() {
     auth.setngval(false)
        setNum(num + 1)
       auth.arrayUpdates({
        name:props.itm.name,
        qty:num+1,
        desc:props.itm.desc,
        amt:props.itm.amt
       }) 
    }
    useEffect(()=>{
        auth.reset?setNum(0):setNum(num)
    },[auth.reset])
    return (
        <div className='Adcover'>
            <div className='Adnumcvr'>
                <span className='adnumtxt'>Amount</span>
              
                <span className='adamt'>{(auth.reset)?0:num}</span>
            </div>
            <button className='adbtn' onClick={update}>+ Add</button>
        </div>
    )
}
export default Additems