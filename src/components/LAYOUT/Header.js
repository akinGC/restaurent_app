import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { Fragment } from 'react'


const Header = (props) => {
    function setrue(){
        props.updatem(true)
    }
    return (
        <Fragment>
            <nav className='hdrnav'>
                <div className='hdrcovr'>
                    <span className='hdrtitle'>ReactMeals</span>
                    <div className='hdrcrt'>
                        <div className='hdrcrthold' onClick={setrue}>
                            <span className='hdrcrtsymb'><FontAwesomeIcon icon={faCartShopping} /></span>
                            <span className='hdrtxt'>Your Cart</span>
                            <span className='hdrnum'>0</span>
                        </div>
                    </div>
                </div>
            </nav>

        </Fragment>
    )
}
export default Header