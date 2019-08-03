import React from 'react';

import PublishMessage from './components/PublishMessage';
import MessageBoard from './components/MessageBoard';
import UserBoard from './components/UserBoard';

import {Provider} from 'react-redux';
import {createStore } from 'redux';


import PubSub from './pubsub';
import RootReducer from './reducer/RootReducer';
import {PubSubContext} from './pubsub';


// import MessageActionCreator from './Action/MessaegActionCreater';

const store = createStore(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//console.log('store.getData()', store.getState());
store.subscribe(()=>{ console.log(store.getState(), 'store.getData() via subscibe')})

const pubsub = new PubSub();

pubsub.addListener({
  message : (msgObj)=>{
      //const stupid = {user:'whoami', type:'asdasd'};
      const {message} = msgObj;
      console.log(msgObj, 'msgObj');

      store.dispatch(message);
  }
})




function App() {
  return (   
    <Provider store={store}>
      <PubSubContext.Provider value={{pubsub}}>
      <div className="App">
            <h1>Reaction</h1>
              <UserBoard/>
              <PublishMessage/>
              <MessageBoard />          
          </div>
      </PubSubContext.Provider>
    </Provider>
  );
}

export default App;
