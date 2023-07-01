
import React from 'react';
import Main from './Main';

import { } from './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Caluculator from './Caluculator';
import New from './New'
import Environment from './Environment'
import Email from './Email';
export const UserContext = React.createContext()

function App({count}) {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact Component={Main} />
          <Route path='/Caluculator/' exact Component={Caluculator} />
           <Route path='/New/:name' exact Component={New} />
           <Route path='/Environment/' exact Component={Environment} />
           <Route path='/Email/:name1' exact Component={Email} />
        </Routes>
      </BrowserRouter>


      {/* <p>This Is count {count}</p> */}
   
        {/* Use Content Hook */}
      {/* <UserContext.Provider value={"This Is Rohith"}>
<Caluculator  />
      </UserContext.Provider> */}
        {/* Use Content Hook */}
      
    </div>
    
  )

}

export default App;
