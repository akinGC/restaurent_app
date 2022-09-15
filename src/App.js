import './App.css';
import Header from './components/LAYOUT/Header';
import Summary from './components/LAYOUT/Summary';
import Availemeals from './components/MEALS/Availemeals';

function App() {
  return (
   
  <div className='app_content'>
  <Header/>
 <Summary/>
<Availemeals/>
  </div>
   
  
  );
}

export default App;
