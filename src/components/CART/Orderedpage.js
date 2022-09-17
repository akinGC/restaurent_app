
import './Orderedpage.css'
import Context from '../CART/Context'
import { useContext } from 'react'

function Orderedpage(props) {

    const auth = useContext(Context);

    function close(){
       props.update()
    auth.reseter(true)
    auth.setngval(true)
    }
    
    return(
       <div className='ord'>
         <div className='ordcover'>
            Order Placed ...!
        </div>
        <button className='ordcls'onClick={close}>Close</button>
       </div>
    )
}
export default Orderedpage