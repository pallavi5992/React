import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter} from "react-router-dom";
import {createStore, legacy_createStore } from 'redux';
import Reducer from './redux/login/Reducer';
import rootReducer from './redux/Store';
import Routers from './routers/Routers';


const store = legacy_createStore(Reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// sagaMiddleware.run(Saga)
function App() {
  return (
    <div>
      <Provider store={store}>
     <BrowserRouter>
      <Routers />
     </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;
