import React from 'react';
import ReactDOM  from 'react-dom/client';
import {BrowserRouter as Router } from 'react-router-dom';
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebProvider} from "@thirdweb-dev/react";

import { StateContextProvider } from './context';
import App from './App';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider activeChain={ Sepolia } 
      clientId="314225566d3f9bc9b0cae3689711684e" >
        <Router>
        <StateContextProvider>
           <App/>
        </StateContextProvider>    
        </Router>
    </ThirdwebProvider>
)


