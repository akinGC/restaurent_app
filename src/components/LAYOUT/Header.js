import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { Fragment } from 'react'
import Summary from './Summary'

const Header=()=>{
    return(
        <Fragment>
       <nav className='hdrnav'>
        <div className='hdrcovr'>
            <span className='hdrtitle'>ReactMeals</span>
            <div className='hdrcrt'>
                <div className='hdrcrthold'>
                <span className='hdrcrtsymb'><FontAwesomeIcon icon={faCartShopping} /></span>
                <span className='hdrtxt'>Your Cart</span>
                <span className='hdrnum'>0</span>
                </div>
            </div>
        </div>
       </nav>
       <div className='sumryholder'>
       <div className='hdr_topBack'>
            <div className='hrd_img' ></div>
        </div>
        <div className='hdrsumry'>
            <Summary/>
        </div>
       </div>
       </Fragment>
    )
}
export default Header