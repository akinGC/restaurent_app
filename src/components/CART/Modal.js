
import { useState } from 'react'
import './Modal.css'
import Context from '../CART/Context'
import { useContext } from 'react'
import Orderedpage from './Orderedpage'
function Modal(props) {
    const [smod, setSmod] = useState(true)
    const auth = useContext(Context);
    let localArry = auth.array
    let amt = 0
    for (let i = 0; i < auth.array.length; i++) {
        amt = (amt + auth.array[i].amt) * auth.array[i].qty

    }
    function update() {
        props.updatem(false)
    }
    function setmodfunc() {
        let ele = document.getElementsByClassName('no_itm_msg')[0]
        if (localArry.length != 0) setSmod(false)
        else ele.style.display = 'block'
    }
    function addcontent(e) {
        for (let i = 0; i < localArry.length; i++) {
            if (localArry[i].name == e.target.name) {
                let newamt = localArry[i].amt / localArry[i].qty
                let newobj = {
                    name: localArry[i].name,
                    qty: localArry[i].qty + 1,
                    desc: localArry[i].desc,
                    amt: (newamt * (localArry[i].qty + 1))
                }
                localArry[i] = newobj
            }
        }

        auth.scndUpdte(localArry)
    }
    function delcontent(e) {
        for (let i = 0; i < localArry.length; i++) {
            if (localArry[i].name == e.target.name) {
                let newamt = localArry[i].amt / localArry[i].qty
                let newobj = {
                    name: localArry[i].name,
                    qty: localArry[i].qty - 1,
                    desc: localArry[i].desc,
                    amt: (newamt * (localArry[i].qty - 1))
                }
                localArry[i] = newobj
            }
        }
        auth.scndUpdte(localArry)

    }
    return (
        (smod) ? <div className='modcover'>
            <ul className='moditm_name'>
                {
                    localArry.map((item) => (
                        <li className='moditm_list'>
                            <div className='moditm_list_txt'>
                                <span className='moditm_list_txt_name'>{item.name}</span>
                                <div className='moditm_list_txt_num'>
                                    <span className='moditm_list_txt_price'>${(item.amt * item.qty).toFixed(2)}</span>
                                    <span className='moditm_list_txt_qty'>*{item.qty}</span>
                                </div>
                            </div>
                            <div className='moditm_list_btns'>
                                <button className='moditm_list_btn sub' name={item.name} onClick={delcontent}>-</button>
                                <button className='moditm_list_btn add' name={item.name} onClick={addcontent}>+</button>
                            </div>
                        </li>
                    ))
                }


            </ul>
            <div className='moditm_total'>
                <span className='moditm_total_txt'>Total Amount</span>
                <span className='moditm_total_txt totalprice'>${(amt).toFixed(2)}</span>
            </div>
            <div className='modbtns'>
                <div className='mod_btn_placer'>
                    <button className='modbtn modclsbtn' onClick={update}>Close</button>
                    <button className='modbtn modordbtn' onClick={setmodfunc}>Order</button>
                </div>
            </div>
            <div className='no_itm_msg'>Please Add Items to order</div>
        </div> :
            <Orderedpage update={update} />
    )
}
export default Modal