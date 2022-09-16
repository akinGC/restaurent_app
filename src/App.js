import { Fragment, useState } from 'react';
import './App.css';
import Modal from './components/CART/Modal';
import Header from './components/LAYOUT/Header';
import Summary from './components/LAYOUT/Summary';
import Availemeals from './components/MEALS/Availemeals';
import dom from'react-dom'

function App() {
  const [mdisp, setMdisp] = useState(false)
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

  return (

    <div className='overlay'>
      <div className='app_content'>
        <Header updatem={updatem} />
        <Summary />
        <Availemeals />

      </div>

      {
        (mdisp && dom.createPortal(<div className='modal_content'>
          <Modal updatem={updatem}/>
        </div>,document.getElementById('props_overlay')))
      }


    </div>


  );
}

export default App;
