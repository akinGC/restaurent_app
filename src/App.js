import {useState } from 'react';
import './App.css';
import Modal from './components/CART/Modal';
import Header from './components/LAYOUT/Header';
import Summary from './components/LAYOUT/Summary';
import Availemeals from './components/MEALS/Availemeals';
import dom from'react-dom';
import Context from './components/CART/Context';

function App() {
const [updated,setUpdated]=useState([])
const [reset,setReset]=useState(false)
function setngval(e){
  setReset(e)
  console.log(reset)
}


function reseter(e){
 
  setUpdated([])
 
}
function scndUpdte(e){
console.log(e)
setUpdated(e)

}
  const [mdisp, setMdisp] = useState(false)
function arrayUpdate(e){
  setUpdated([...updated,e])
}

  function updatem(e) {
    let ele = document.getElementsByClassName('app_content')[0]
    setMdisp(e)
    if(e){
      ele.style.height='100vh'
    }
    else{
      ele.style.height='fit-content'
    }

  }

  const result = Object.values(updated.reduce((r, o) => {
    r[o.name] = (r[o.name] && r[o.name].qty > o.qty) ? r[o.name] : o
  
    return r
  }, {}))

  return (
<Context.Provider value={{
  arrayUpdates:arrayUpdate,
  array:result,
  scndUpdte:scndUpdte,
  reseter:reseter,
  reset:reset,
  setngval:setngval

}}>
    <div className='overlay'>
      <div className='app_content'>
        <Header updatem={updatem} />
        <Summary />
        <Availemeals />

      </div>

      {
        (mdisp && dom.createPortal(<div className='modal_content'>
     <Modal updatem={updatem} updated={updated}/>
        </div>,document.getElementById('props_overlay')))
      }
    </div>
    </Context.Provider>
  );
}

export default App;
