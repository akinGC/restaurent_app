
import './Modal.css'
function Modal(props){
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
                <span className='moditm_total_txt totalprice'>35.45</span>
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