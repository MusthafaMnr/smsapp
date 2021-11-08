import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {FirebaseContext} from './Store/Fb_Context'
import Context from './Store/Fb_Context'
import firebase from './firebase/config'

ReactDOM.render(
  <FirebaseContext.Provider value={{firebase}}>
    <Context>
      <App />
    </Context>
  </FirebaseContext.Provider>
  ,document.getElementById('root')
);

//<React.StrictMode></React.StrictMode>