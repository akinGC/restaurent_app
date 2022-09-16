import Additems from '../CART/Additems'
import './Mealslist.css'
const Mealslist = (props) => {

    return (
        <div className='listplacer'>
            <ul className="listcover">
                {
                    props.list.map((itm) => (
                        <li className='list_item'>
                            <div className='item_cover'>
                                <div className='list_item_name'>{itm.name}</div>
                                <div className='list_item_desc'>{itm.desc}</div>
                                <div className='list_item_amt'>${itm.amt}</div>
                            </div>
                            <div className='list_item_select'><Additems/></div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Mealslist