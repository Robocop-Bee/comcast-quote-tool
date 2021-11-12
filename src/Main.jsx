import { useState } from 'react';

import './assets/style/main.css'
import AddressSearch from './components/Address-search';
import Header from './components/Header';
import Plan from './components/Plan';
import Sidebar from './components/Sidebar';

const Main = () => {
    
    const [display, setDisplay] = useState('side-menu')

    
    // const toggleBar = ()=> {
    //     if (display === 'side-menu'){
    //         setDisplay('side-menugone')
    //     } else {
    //         setDisplay('side-menu')
    //     }
    // }
    
    

    return ( 
        <div className="main-container">
            <Header/>
            <Sidebar/>
            <AddressSearch/>
            <div className="plans">
                <h2 className="plan-title">Plans</h2>
                <Plan/>
            </div>
        </div>
     );
}
 
export default Main;