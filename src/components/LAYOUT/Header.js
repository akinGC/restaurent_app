import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { Fragment,useContext } from 'react'
import Context from '../CART/Context'

const Header = (props) => {

    const auth = useContext(Context)
    let sum =0;
  
     auth.array.forEach((ele)=>{
        sum=sum+ele.qty
    })

    function setrue(){
        props.updatem(true)
    }

    return (
       
            <nav className='hdrnav'>
                <div className='hdrcovr'>
                    <span className='hdrtitle'>ReactMeals</span>
                    <div className='hdrcrt'>
                        <div className='hdrcrthold' onClick={setrue}>
                            <span className='hdrcrtsymb'><FontAwesomeIcon icon={faCartShopping} /></span>
                            <span className='hdrtxt'>Your Cart</span>
                            <span className='hdrnum'>{sum}</span>
                        </div>
                    </div>
                </div>
            </nav>

     
    )
}
export default Header